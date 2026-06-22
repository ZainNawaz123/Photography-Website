import { createClient } from "@/lib/supabase/server";
import type { GuestbookEntry } from "@/types/guestbook";

function isSupabaseConfigured() {
  return (
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}

export async function getApprovedGuestbookEntries(): Promise<GuestbookEntry[]> {
  if (!isSupabaseConfigured()) return [];

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("guestbook_entries")
    .select("id, name, location, message, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch guestbook entries:", error.message);
    return [];
  }

  return data ?? [];
}
