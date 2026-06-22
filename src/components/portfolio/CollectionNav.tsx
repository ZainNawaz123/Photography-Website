import Link from "next/link";
import { portfolioCollections } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { PortfolioCollection } from "@/types/portfolio";

type CollectionNavProps = {
  collection: PortfolioCollection;
};

export function CollectionNav({ collection }: CollectionNavProps) {
  const prev = portfolioCollections[collection.prev];
  const next = portfolioCollections[collection.next];

  return (
    <RevealOnScroll>
      <nav
        aria-label="Collection navigation"
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-7 md:flex-row md:justify-between md:py-24"
      >
        <Link
          href={`/portfolio/${prev.id}`}
          className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[0.62rem] tracking-[0.22em] text-[#f4f0e8]/45 uppercase transition-elegant hover:text-[#f4f0e8]/75 max-md:active:text-[#f4f0e8]/75"
        >
          <span className="mr-2 opacity-60">←</span>
          {prev.title}
        </Link>
        <span className="hidden h-px w-8 bg-[#f4f0e8]/10 md:block" aria-hidden="true" />
        <Link
          href={`/portfolio/${next.id}`}
          className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[0.62rem] tracking-[0.22em] text-[#f4f0e8]/45 uppercase transition-elegant hover:text-[#f4f0e8]/75 max-md:active:text-[#f4f0e8]/75"
        >
          {next.title}
          <span className="ml-2 opacity-60">→</span>
        </Link>
      </nav>
    </RevealOnScroll>
  );
}
