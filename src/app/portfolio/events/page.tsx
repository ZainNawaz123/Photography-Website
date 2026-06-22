import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Events",
  path: "/portfolio/events",
});

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs tracking-[0.35em] text-muted uppercase">
            Portfolio · Events
          </p>
          <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
            Events
          </h1>
          <p className="mt-6 max-w-xl text-sm text-muted">
            Editorial masonry gallery coming in Milestone 2.
          </p>
          <div className="relative mt-16 aspect-4/3 max-w-lg overflow-hidden">
            <Image
              src="/images/portfolio/events/01.jpg"
              alt="Event placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
