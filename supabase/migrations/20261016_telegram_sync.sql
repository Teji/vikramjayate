alter table public.recommendations add column if not exists telegram_chat_id bigint;
alter table public.recommendations add column if not exists telegram_message_id bigint;
create unique index if not exists recommendations_telegram_unique on public.recommendations (telegram_chat_id, telegram_message_id);
-- Ensure an existing SELECT policy allows anonymous visitors to see public records.
-- Review existing SELECT policies before adding a new one.
