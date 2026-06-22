import type { Metadata } from "next";

const siteName = "Zain Nawaz Photography";
const siteDescription =
  "Cinematic photography capturing meaningful moments — portraits, events, and personal work.";

export const siteConfig = {
  name: siteName,
  description: siteDescription,
  url: "https://zainnawazphotography.com",
} as const;

export function createPageMetadata({
  title,
  description = siteDescription,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${siteName}` : siteName;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      url: `${siteConfig.url}${path}`,
      type: "website",
    },
  };
}
