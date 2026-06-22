"use server";

import { contactSchema } from "@/lib/validations/contact";
import { createClient } from "@/lib/supabase/server";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    project_type: formData.get("project_type") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      error:
        parsed.error.issues[0]?.message ??
        "Please check your message and try again.",
    };
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return {
      error:
        "I'm unable to receive messages at the moment. Please reach out directly by email.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("contact_submissions").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    project_type: parsed.data.project_type ?? null,
    message: parsed.data.message,
    read: false,
  });

  if (error) {
    console.error("Failed to submit contact message:", error.message);
    return {
      error: "Something went quiet. Please try again in a moment.",
    };
  }

  return { success: true };
}
