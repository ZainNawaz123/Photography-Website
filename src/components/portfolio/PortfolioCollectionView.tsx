import {
  CollectionIntro,
} from "@/components/portfolio/CollectionIntro";
import { CollectionNav } from "@/components/portfolio/CollectionNav";
import {
  EditorialGallery,
  EmptyCollection,
} from "@/components/portfolio/EditorialGallery";
import type { PortfolioCollection } from "@/types/portfolio";

type PortfolioCollectionViewProps = {
  collection: PortfolioCollection;
};

export function PortfolioCollectionView({
  collection,
}: PortfolioCollectionViewProps) {
  const hasImages = collection.blocks.some((block) => block.type !== "pause");

  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <CollectionIntro collection={collection} />

      <section className="border-t border-[#f4f0e8]/[0.05]">
        {hasImages ? (
          <EditorialGallery blocks={collection.blocks} />
        ) : (
          <EmptyCollection />
        )}
      </section>

      <section className="border-t border-[#f4f0e8]/[0.05] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] md:pb-36">
        <CollectionNav collection={collection} />
      </section>
    </main>
  );
}
