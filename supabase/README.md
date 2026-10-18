# Telegram → Vikram Jayate recommendation sync

1. Run `supabase/migrations/20261016_telegram_sync.sql` in the Supabase SQL editor.
2. Create a Telegram bot using @BotFather. Add it as an administrator of `@Tradewithjayate` (client must authorize this).
3. Find the channel's numeric chat ID (`-100...`) from a test `channel_post` update via `getUpdates` **before** setting a webhook, or use a trusted channel ID lookup. Do not assume username is the ID.
4. Set Supabase Edge Function secrets: `TELEGRAM_WEBHOOK_SECRET` (random letters/numbers/underscores/hyphens, 32+ chars), `TELEGRAM_CHANNEL_ID` (numeric chat ID). Supabase automatically supplies `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in hosted functions; verify in project settings.
5. Deploy with `supabase functions deploy telegram-sync --no-verify-jwt` (Telegram cannot send a Supabase JWT; function authenticates using Telegram's secret header).
6. Register webhook (replace placeholders locally; never commit token):
   `curl -sS -X POST "https://api.telegram.org/bot${BOT_TOKEN}/setWebhook" --data-urlencode "url=https://${PROJECT_REF}.supabase.co/functions/v1/telegram-sync" --data-urlencode "secret_token=${TELEGRAM_WEBHOOK_SECRET}" --data-urlencode 'allowed_updates=["channel_post","edited_channel_post"]'`
7. Verify using `getWebhookInfo` and post a sample signal. Check `recommendations` table and public website.

Sample recognized signal:
`Sell 23000CE @100\nMark sL 120 only`

Notes: Bot receives future channel posts and edits, not channel history. Unsupported posts are skipped. Editing a recognized post into an unrecognized post does not remove the previous recommendation. Deleted Telegram posts do not generate Bot API deletion events. Database and website public SELECT RLS policy must already permit `is_premium=false` rows. Website currently fetches on page load; reload to see latest changes. Existing `target` is required text, so absent targets are stored as empty strings, never fabricated. Verify how your UI renders empty targets. This is a starter integration; add auditing and idempotent edit-time tracking before mission-critical use.
