import Link from "next/link";
import type { PortfolioCollection } from "@/types/portfolio";

type CollectionIntroProps = {
  collection: PortfolioCollection;
};

export function CollectionIntro({ collection }: CollectionIntroProps) {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-7 md:px-10 md:py-32">
      <div className="animate-fade-in space-y-5 md:space-y-8">
        <Link
          href="/portfolio"
          className="inline-flex min-h-[44px] items-center justify-center text-[0.58rem] tracking-[0.28em] text-[#f4f0e8]/38 uppercase transition-elegant hover:text-[#f4f0e8]/65 max-md:active:text-[#f4f0e8]/65"
        >
          ← Back to Selected Work
        </Link>
        <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
          {collection.label}
        </p>
        <h1 className="text-balance font-display text-[2rem] leading-[1.05] tracking-[0.03em] text-[#f4f0e8] sm:text-4xl md:text-[2.75rem] lg:text-6xl lg:leading-[1.08]">
          {collection.title}
        </h1>
        <p className="mx-auto max-w-md text-sm leading-[1.85] text-[#f4f0e8]/65 md:text-[0.95rem] md:leading-[1.9]">
          {collection.description}
        </p>
      </div>
    </section>
  );
}
