-- Vikram Jayate: run this in Supabase SQL Editor before using the Admin CMS.

-- 1) Admin helper. Admin role is independent of premium subscription status.
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- 2) Blog CMS table.
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null default 'Market Insight',
  title text not null,
  excerpt text not null,
  content text not null,
  read_time text not null default '5 min read',
  is_premium boolean not null default false,
  is_published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published free blogs" on public.blog_posts;
create policy "Public can read published free blogs" on public.blog_posts for select
to anon, authenticated using (is_published = true and is_premium = false);

drop policy if exists "Premium can read premium blogs" on public.blog_posts;
create policy "Premium can read premium blogs" on public.blog_posts for select
to authenticated using (is_published = true and is_premium = true and public.is_premium_user());

drop policy if exists "Admins can read all blogs" on public.blog_posts;
create policy "Admins can read all blogs" on public.blog_posts for select
to authenticated using (public.is_admin());

drop policy if exists "Admins can insert blogs" on public.blog_posts;
create policy "Admins can insert blogs" on public.blog_posts for insert
to authenticated with check (public.is_admin());

drop policy if exists "Admins can update blogs" on public.blog_posts;
create policy "Admins can update blogs" on public.blog_posts for update
to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Admins can delete blogs" on public.blog_posts;
create policy "Admins can delete blogs" on public.blog_posts for delete
to authenticated using (public.is_admin());

-- 3) Secure recommendation writes for admins. Existing SELECT policies remain in place.
alter table public.recommendations enable row level security;
drop policy if exists "Admins can read all recommendations" on public.recommendations;
create policy "Admins can read all recommendations" on public.recommendations for select
to authenticated using (public.is_admin());
drop policy if exists "Admins can insert recommendations" on public.recommendations;
create policy "Admins can insert recommendations" on public.recommendations for insert
to authenticated with check (public.is_admin());
drop policy if exists "Admins can update recommendations" on public.recommendations;
create policy "Admins can update recommendations" on public.recommendations for update
to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "Admins can delete recommendations" on public.recommendations;
create policy "Admins can delete recommendations" on public.recommendations for delete
to authenticated using (public.is_admin());

-- 4) Make a specific existing user an admin. Replace the UUID if required.
-- update public.profiles set role = 'admin' where id = 'YOUR-USER-UUID';
