import { PortfolioCollectionView } from "@/components/portfolio/PortfolioCollectionView";
import { personalCollection } from "@/data/portfolio/personal";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Personal Work",
  description:
    "The world as I see it when nobody is asking me to photograph it.",
  path: "/portfolio/personal",
});

export default function PersonalPage() {
  return <PortfolioCollectionView collection={personalCollection} />;
}
