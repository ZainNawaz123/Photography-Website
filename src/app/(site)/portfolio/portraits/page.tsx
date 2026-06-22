import { PortfolioCollectionView } from "@/components/portfolio/PortfolioCollectionView";
import { portraitsCollection } from "@/data/portfolio/portraits";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Portraits",
  description: "Faces, expressions, and moments of presence.",
  path: "/portfolio/portraits",
});

export default function PortraitsPage() {
  return <PortfolioCollectionView collection={portraitsCollection} />;
}
