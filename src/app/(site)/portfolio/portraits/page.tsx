import Image from "next/image";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Portraits",
  path: "/portfolio/portraits",
});

export default function PortraitsPage() {
  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 md:py-24">
        <p className="text-xs tracking-[0.35em] text-muted uppercase">
          Portfolio · Portraits
        </p>
        <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
          Portraits
        </h1>
        <p className="mt-6 max-w-xl text-sm text-muted">
          Editorial masonry gallery coming in Milestone 2.
        </p>
        <div className="relative mt-16 aspect-3/4 max-w-md overflow-hidden">
          <Image
            src="/images/portfolio/portraits/01.jpg"
            alt="Portrait placeholder"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </section>
    </main>
  );
}
