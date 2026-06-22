import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-2xl px-5 py-20 sm:px-6 md:px-10 md:py-32">
        <p className="text-xs tracking-[0.35em] text-muted uppercase">
          Contact
        </p>
        <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
          Let&apos;s connect
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
          Contact form coming in the next milestone. Submissions will be stored
          securely in Supabase.
        </p>
      </section>
    </main>
  );
}
