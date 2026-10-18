# Vikram Jayate update — setup

1. In Supabase SQL Editor, run `supabase/migrations/20261016_site_settings.sql`. It creates admin-editable pricing and a public image bucket with admin-only uploads. Requires existing `public.is_admin()` helper.
2. In Admin → Website Settings, configure WhatsApp number with country code, prices (defaults ₹499 / ₹4999), and upload Hero/About images.
3. Public pricing page: `/subscribe`. It does not take payments or automatically activate premium; admin must verify payment and manually grant access.
4. Recommendations page filter now uses parent-provided list instead of stale child state. Date/time shown from `published_at` in IST; editing a recommendation preserves its original published_at. Existing Telegram sync already sets published_at; Telegram edits should preserve the original timestamp in the Edge Function.
5. Run `npm install && npm run lint && npm run build` and push to GitHub. Vercel auto-deploys when connected. Keep `.env` and tokens out of Git.
6. Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` exist in local environment and Vercel settings.
