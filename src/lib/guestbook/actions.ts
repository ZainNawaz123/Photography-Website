"use server";

import { guestbookSchema } from "@/lib/validations/guestbook";
import { createClient } from "@/lib/supabase/server";

export type GuestbookFormState = {
  success?: boolean;
  error?: string;
};

export async function submitGuestbookEntry(
  _prevState: GuestbookFormState,
  formData: FormData,
): Promise<GuestbookFormState> {
  const parsed = guestbookSchema.safeParse({
    name: formData.get("name"),
    location: formData.get("location") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Please check your entry and try again.",
    };
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return {
      error: "The guestbook is not yet connected. Please try again later.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("guestbook_entries").insert({
    name: parsed.data.name,
    location: parsed.data.location ?? null,
    message: parsed.data.message ?? null,
    approved: false,
  });

  if (error) {
    console.error("Failed to submit guestbook entry:", error.message);
    return { error: "Something went quiet. Please try again in a moment." };
  }

  return { success: true };
}
