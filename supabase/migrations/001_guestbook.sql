-- Guestbook entries with manual approval via Supabase Dashboard

create table public.guestbook_entries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  message text check (message is null or char_length(message) <= 500),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index guestbook_entries_approved_created_at_idx
  on public.guestbook_entries (approved, created_at desc);

alter table public.guestbook_entries enable row level security;

-- Anyone can submit; inserts always start unapproved
create policy "Anyone can submit guestbook entries"
  on public.guestbook_entries
  for insert
  to anon, authenticated
  with check (approved = false);

-- Public can only read approved entries
create policy "Public can read approved guestbook entries"
  on public.guestbook_entries
  for select
  to anon, authenticated
  using (approved = true);

-- Service role / dashboard can manage all rows (no public update/delete policies)
