"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HERO_IMAGE_SRC } from "@/lib/constants/images";
import { cn } from "@/lib/utils/cn";

export function HeroBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const heroEl = document.querySelector(".hero-page");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.intersectionRatio > 0.2);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const showHero = isHome && heroInView;

  return (
    <div
      aria-hidden={!showHero}
      className={cn(
        "pointer-events-none fixed inset-0 z-0 transition-opacity ease-linear",
        showHero ? "opacity-100" : "opacity-0",
      )}
      style={{
        transitionDuration: isHome
          ? "var(--hero-scroll-fade, 450ms)"
          : "var(--hero-fade-duration)",
      }}
    >
      <div className="absolute inset-0 isolate overflow-hidden">
        <div
          className={cn(
            "hero-ken-burns absolute inset-[0_-2%]",
            !showHero && "hero-ken-burns-paused",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE_SRC}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_58%] max-sm:object-[center_66%] max-md:object-[center_70%]"
            decoding="async"
            fetchPriority={showHero ? "high" : "low"}
          />
        </div>

        <div className="absolute inset-0 bg-[#1a1208]/12 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[#8b6914]/[0.04]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 38%, rgba(10, 8, 6, 0) 0%, rgba(10, 8, 6, 0) 42%, rgba(10, 8, 6, 0.28) 78%, rgba(8, 6, 5, 0.72) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-[#0c0a09]/92 via-[#0c0a09]/32 to-transparent max-md:h-[58%]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0c0a09]/55 to-transparent max-md:h-36" />
      </div>
    </div>
  );
}
