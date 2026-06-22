import { eventsCollection } from "@/data/portfolio/events";
import { personalCollection } from "@/data/portfolio/personal";
import { portraitsCollection } from "@/data/portfolio/portraits";
import type { PortfolioCollection, PortfolioCollectionId } from "@/types/portfolio";

export const portfolioCollections: Record<
  PortfolioCollectionId,
  PortfolioCollection
> = {
  portraits: portraitsCollection,
  events: eventsCollection,
  personal: personalCollection,
};

export function getPortfolioCollection(
  id: PortfolioCollectionId,
): PortfolioCollection {
  return portfolioCollections[id];
}

export const collectionOrder: PortfolioCollectionId[] = [
  "portraits",
  "events",
  "personal",
];
