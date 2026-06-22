import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: "Portraits, events, and personal work by Zain Nawaz.",
  path: "/portfolio",
});

const categories = [
  {
    href: "/portfolio/portraits",
    title: "Portraits",
    description: "Intimate studies of character, light, and presence.",
  },
  {
    href: "/portfolio/events",
    title: "Events",
    description: "Meaningful gatherings captured with a cinematic eye.",
  },
  {
    href: "/portfolio/personal",
    title: "Personal Work",
    description: "Experiments, observations, and images made for the self.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs tracking-[0.35em] text-muted uppercase">
              Portfolio
            </p>
            <h1 className="font-display text-5xl tracking-[0.04em] md:text-6xl">
              Selected Work
            </h1>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Three collections — each curated to feel editorial, not algorithmic.
            </p>
          </div>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-background p-10 transition-colors duration-500 hover:bg-surface"
              >
                <h2 className="font-display text-3xl tracking-[0.04em] transition-colors group-hover:text-accent">
                  {category.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <span className="mt-8 inline-block text-xs tracking-[0.25em] text-foreground/60 uppercase transition-colors group-hover:text-foreground">
                  View Collection
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
