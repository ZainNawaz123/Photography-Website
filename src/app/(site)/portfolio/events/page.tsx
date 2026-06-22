import { PortfolioCollectionView } from "@/components/portfolio/PortfolioCollectionView";
import { eventsCollection } from "@/data/portfolio/events";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Events",
  description: "The emotions, details, and memories that made the day.",
  path: "/portfolio/events",
});

export default function EventsPage() {
  return <PortfolioCollectionView collection={eventsCollection} />;
}
