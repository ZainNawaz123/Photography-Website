import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "I Was Here",
  description: "Leave your mark — a guestbook for visitors who connected with the work.",
  path: "/i-was-here",
});

export default function IWasHerePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-xs tracking-[0.35em] text-muted uppercase">
            I Was Here
          </p>
          <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
            Sign the guestbook
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            Guestbook coming in a later milestone. Approved messages will appear
            here after you review them in Supabase.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
