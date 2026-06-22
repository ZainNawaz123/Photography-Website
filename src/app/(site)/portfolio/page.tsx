import Link from "next/link";
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
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-7 md:px-10 md:py-32">
        <div className="animate-fade-in mx-auto max-w-2xl space-y-5 md:space-y-8">
          <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
            Portfolio
          </p>
          <h1 className="text-balance font-display text-[2rem] leading-[1.05] tracking-[0.03em] text-[#f4f0e8] sm:text-4xl md:text-[2.75rem] lg:text-6xl lg:leading-[1.08]">
            Selected Work
          </h1>
          <p className="text-sm leading-[1.85] text-[#f4f0e8]/65 md:text-[0.95rem] md:leading-[1.9]">
            Three collections — each curated to show you who I am.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-[#f4f0e8]/[0.05] md:mt-20 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block min-h-[11rem] bg-[#0c0a09] p-8 transition-elegant max-md:active:bg-[#141110] md:p-10 md:hover:bg-[#141110]"
            >
              <h2 className="font-display text-3xl tracking-[0.04em] text-[#f4f0e8] transition-elegant group-hover:text-[#f4f0e8] md:group-active:text-[#f4f0e8]">
                {category.title}
              </h2>
              <p className="mt-4 text-sm leading-[1.85] text-[#f4f0e8]/65">
                {category.description}
              </p>
              <span className="mt-8 inline-block text-[0.62rem] tracking-[0.22em] text-[#f4f0e8]/45 uppercase transition-elegant group-hover:text-[#f4f0e8]/75 max-md:group-active:text-[#f4f0e8]/75">
                View Collection
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
