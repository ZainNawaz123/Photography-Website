-- Add optional location field for guestbook entries

alter table public.guestbook_entries
  add column if not exists location text
  check (location is null or char_length(location) <= 120);
