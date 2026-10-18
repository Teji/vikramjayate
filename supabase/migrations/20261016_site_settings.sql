-- Run once in Supabase SQL Editor. Safe to rerun.
create table if not exists public.site_settings (
 id integer primary key default 1 check (id=1),
 monthly_price integer not null default 499 check (monthly_price>=0),
 yearly_price integer not null default 4999 check (yearly_price>=0),
 whatsapp_number text not null default '',
 hero_image_url text not null default '',
 about_image_url text not null default '',
 updated_at timestamptz not null default now()
);
insert into public.site_settings (id) values (1) on conflict (id) do nothing;
alter table public.site_settings enable row level security;
drop policy if exists "Anyone can read site settings" on public.site_settings;
create policy "Anyone can read site settings" on public.site_settings for select to anon,authenticated using (true);
drop policy if exists "Admins can update site settings" on public.site_settings;
create policy "Admins can update site settings" on public.site_settings for update to authenticated using (public.is_admin()) with check (public.is_admin());
-- Public bucket: published website photos are intentionally public.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('site-images','site-images',true,5242880,array['image/png','image/jpeg','image/webp'])
on conflict (id) do update set public=true,file_size_limit=5242880,allowed_mime_types=array['image/png','image/jpeg','image/webp'];
drop policy if exists "Admin upload site images" on storage.objects;
create policy "Admin upload site images" on storage.objects for insert to authenticated with check (bucket_id='site-images' and public.is_admin());
-- Existing recommendations already have published_at. Preserve original date on admin edits.
