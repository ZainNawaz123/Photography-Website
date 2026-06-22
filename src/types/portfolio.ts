export type PortfolioCollectionId = "portraits" | "events" | "personal";

export type LayoutBlockType =
  | "featured"
  | "wide"
  | "portrait"
  | "pair"
  | "sequence"
  | "asymmetric"
  | "pause";

export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LayoutBlock =
  | { type: "featured"; image: PortfolioImage }
  | { type: "wide"; image: PortfolioImage }
  | { type: "portrait"; image: PortfolioImage; size?: "large" | "medium" }
  | { type: "pair"; images: [PortfolioImage, PortfolioImage] }
  | { type: "sequence"; images: [PortfolioImage, PortfolioImage, PortfolioImage] }
  | {
      type: "asymmetric";
      primary: PortfolioImage;
      secondary: PortfolioImage;
    }
  | { type: "pause" };

export type PortfolioCollection = {
  id: PortfolioCollectionId;
  title: string;
  label: string;
  description: string;
  blocks: LayoutBlock[];
  prev: PortfolioCollectionId;
  next: PortfolioCollectionId;
};
