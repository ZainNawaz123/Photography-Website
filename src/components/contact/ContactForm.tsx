"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitContactMessage,
  type ContactFormState,
} from "@/lib/contact/actions";
import { PROJECT_TYPE_OPTIONS } from "@/types/contact";

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div
        className="guestbook-form animate-fade-in space-y-4 py-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl tracking-[0.03em] text-[#f4f0e8] md:text-3xl">
          Thank you.
        </p>
        <p className="mx-auto max-w-sm text-sm leading-[1.8] text-[#f4f0e8]/65">
          Your message has been received. I&apos;ll read it soon and be in
          touch.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="guestbook-form space-y-12 md:space-y-16"
    >
      <div className="guestbook-field-group">
        <label htmlFor="contact-name" className="guestbook-label">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          className="guestbook-field"
          placeholder="Your name"
        />
      </div>

      <div className="guestbook-field-group">
        <label htmlFor="contact-email" className="guestbook-label">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          className="guestbook-field"
          placeholder="you@example.com"
        />
      </div>

      <div className="guestbook-field-group">
        <label htmlFor="contact-project-type" className="guestbook-label">
          What are we creating?{" "}
          <span className="normal-case tracking-normal text-[#f4f0e8]/30">
            (optional)
          </span>
        </label>
        <select
          id="contact-project-type"
          name="project_type"
          defaultValue=""
          className="guestbook-field guestbook-select"
        >
          <option value="">Portrait session, event, or something else…</option>
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="guestbook-field-group">
        <label htmlFor="contact-message" className="guestbook-label">
          Tell me about your idea
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={7}
          maxLength={2000}
          className="guestbook-field guestbook-field-multiline resize-none"
          placeholder="The moment you want captured, the feeling you want preserved, your vision…"
        />
      </div>

      {state.error && (
        <p className="text-center text-sm text-[#f4f0e8]/55" role="alert">
          {state.error}
        </p>
      )}

      <div className="flex justify-center pt-2 pb-[env(safe-area-inset-bottom,0px)] md:pt-4">
        <button
          type="submit"
          disabled={pending}
          className="hero-cta w-full max-w-xs disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {pending ? "Sending…" : "Begin the Conversation"}
        </button>
      </div>
    </form>
  );
}
