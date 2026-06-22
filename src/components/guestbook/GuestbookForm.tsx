"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitGuestbookEntry,
  type GuestbookFormState,
} from "@/lib/guestbook/actions";

const initialState: GuestbookFormState = {};

export function GuestbookForm() {
  const [state, formAction, pending] = useActionState(
    submitGuestbookEntry,
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
          Your mark has been received. It will appear here once it has been
          shared.
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
        <label htmlFor="name" className="guestbook-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={80}
          className="guestbook-field"
          placeholder="Your name"
        />
      </div>

      <div className="guestbook-field-group">
        <label htmlFor="location" className="guestbook-label">
          Location{" "}
          <span className="normal-case tracking-normal text-[#f4f0e8]/30">
            (optional)
          </span>
        </label>
        <input
          id="location"
          name="location"
          type="text"
          autoComplete="address-level2"
          maxLength={120}
          className="guestbook-field"
          placeholder="City, country"
        />
      </div>

      <div className="guestbook-field-group">
        <label htmlFor="message" className="guestbook-label">
          A thought, memory, or feeling{" "}
          <span className="normal-case tracking-normal text-[#f4f0e8]/30">
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={500}
          className="guestbook-field guestbook-field-multiline resize-none"
          placeholder="What stayed with you?"
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
          {pending ? "Leaving…" : "Leave Your Mark"}
        </button>
      </div>
    </form>
  );
}
