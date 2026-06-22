import type { PortfolioImage } from "@/types/portfolio";

export function portfolioImage(
  category: string,
  filename: string,
  width: number,
  height: number,
  alt = "Photograph by Zain Nawaz",
): PortfolioImage {
  return {
    src: `/images/portfolio/${category}/${encodeURIComponent(filename)}`,
    alt,
    width,
    height,
  };
}
