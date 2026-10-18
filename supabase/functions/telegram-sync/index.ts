import { createClient } from 'npm:@supabase/supabase-js@2';

const respond = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

function parseSignal(raw: string) {
  const text = raw.trim();
  const line = text.split(/\r?\n/)[0].trim();
  const first = line.match(/^(BUY|SELL)\s+(.+?)\s*@\s*(\d+(?:\.\d+)?)\s*$/i);
  if (!first) return null;
  const symbol = first[2].trim().replace(/\s+/g, ' ').toUpperCase();
  if (!/^[A-Z0-9][A-Z0-9 ._/-]*$/.test(symbol)) return null;
  const sl = text.match(/(?:^|\n)\s*(?:MARK\s+)?(?:SL|STOP\s*LOSS)\s*[-:=@\s]*?(\d+(?:\.\d+)?)/i);
  const target = text.match(/(?:^|\n)\s*(?:TARGET|TGT)\s*[-:=@\s]*?(\d+(?:\.\d+)?)(\s*POINTS?)?/i);
  return {
    type: first[1].toUpperCase(), symbol,
    company: symbol.split(' ')[0], entry: first[3],
    stop_loss: sl?.[1] ?? '',
    target: target ? `${target[1]}${target[2] ? ' points' : ''}` : '',
    summary: text,
  };
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  const secret = Deno.env.get('TELEGRAM_WEBHOOK_SECRET');
  const channelId = Deno.env.get('TELEGRAM_CHANNEL_ID');
  const url = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!secret || !channelId || !url || !serviceKey) return respond({ error: 'Server not configured' }, 500);
  if (req.headers.get('X-Telegram-Bot-Api-Secret-Token') !== secret) return respond({ error: 'Unauthorized' }, 401);

  let update: any;
  try { update = await req.json(); } catch { return respond({ error: 'Invalid JSON' }, 400); }
  const msg = update.channel_post ?? update.edited_channel_post;
  if (!msg || String(msg.chat?.id) !== channelId || !Number.isSafeInteger(msg.message_id)) return respond({ skipped: true });
  const parsed = parseSignal(msg.text ?? msg.caption ?? '');
  if (!parsed) return respond({ skipped: true, reason: 'Unsupported signal format' });

  const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
  const slug = `tg-${String(msg.chat.id).replace('-', 'n')}-${msg.message_id}`;
  const { data: existing, error: lookupError } = await supabase.from('recommendations')
    .select('published_at,status,analysis').eq('telegram_chat_id', msg.chat.id)
    .eq('telegram_message_id', msg.message_id).maybeSingle();
  if (lookupError) return respond({ error: 'Database lookup failed' }, 500);
  const row = {
    ...parsed, slug, status: existing?.status ?? 'ACTIVE', analysis: existing?.analysis ?? '', is_premium: false,
    published_at: existing?.published_at ?? new Date(msg.date * 1000).toISOString(),
    telegram_chat_id: msg.chat.id, telegram_message_id: msg.message_id,
  };
  const { error } = await supabase.from('recommendations').upsert(row, {
    onConflict: 'telegram_chat_id,telegram_message_id',
  });
  if (error) {
    console.error('Telegram recommendation sync failed:', error.message);
    return respond({ error: 'Database write failed' }, 500);
  }
  return respond({ ok: true, slug });
});
