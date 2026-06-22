import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "About",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-xs tracking-[0.35em] text-muted uppercase">About</p>
          <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
            The approach
          </h1>
          <div className="mt-12 space-y-6 text-sm leading-8 text-muted md:text-base">
            <p>
              I am Zain Nawaz — a photographer drawn to quiet moments that carry
              weight. My work sits between documentary honesty and cinematic
              composition: portraits that reveal character, events that feel
              lived-in, and personal images that explore light as language.
            </p>
            <p>
              Every frame is an invitation to pause. I believe the most
              meaningful photographs are not the loudest — they are the ones
              that stay with you after you look away.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
