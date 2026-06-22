import { Hero } from "@/components/home/Hero";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  description:
    "Cinematic photography capturing meaningful moments — portraits, events, and personal work.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="hero-page">
      <Hero />
    </main>
  );
}
