import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Personal Work",
  path: "/portfolio/personal",
});

export default function PersonalPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs tracking-[0.35em] text-muted uppercase">
            Portfolio · Personal Work
          </p>
          <h1 className="mt-6 font-display text-5xl tracking-[0.04em] md:text-6xl">
            Personal Work
          </h1>
          <p className="mt-6 max-w-xl text-sm text-muted">
            Editorial masonry gallery coming in Milestone 2.
          </p>
          <div className="relative mt-16 aspect-square max-w-sm overflow-hidden">
            <Image
              src="/images/portfolio/personal/01.jpg"
              alt="Personal work placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
