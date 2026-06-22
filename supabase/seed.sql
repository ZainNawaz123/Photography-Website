-- Optional seed data for local preview. Run manually in Supabase SQL editor.
-- Set approved = true to display entries publicly.

insert into public.guestbook_entries (name, location, message, approved, created_at)
values
  (
    'Ayesha',
    'Toronto, Canada',
    'Your image of the empty train platform reminded me of waiting for my father after work.',
    true,
    '2026-06-01T12:00:00Z'
  ),
  (
    'Daniel',
    'London, England',
    'These photographs made ordinary moments feel important.',
    true,
    '2026-03-15T12:00:00Z'
  );
