# Vikram Jayate - Final Pre-Payment Build

## Setup
1. Copy `.env.example` to `.env` and add your Supabase URL and publishable key.
2. In Supabase SQL Editor, run `supabase/final_schema.sql`.
3. Set your admin user's `profiles.role` to `admin`.
4. Run `npm install`, then `npm run lint`, `npm run build`, and `npm run dev`.

## Admin
- `/admin`
- `/admin/blog`
- `/admin/recommendations`

Admin writes are protected by Supabase RLS and `public.is_admin()`; the UI route alone is not the security boundary.
