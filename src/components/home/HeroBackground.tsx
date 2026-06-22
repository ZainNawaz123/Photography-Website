"use client";

import { usePathname } from "next/navigation";
import { HERO_IMAGE_SRC } from "@/lib/constants/images";
import { cn } from "@/lib/utils/cn";

export function HeroBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden={!isHome}
      className={cn(
        "pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity ease-linear",
        isHome && "opacity-100",
      )}
      style={{ transitionDuration: "var(--hero-fade-duration)" }}
    >
      <div className="absolute inset-0 isolate overflow-hidden">
        <div className="hero-ken-burns absolute inset-[0_-2%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE_SRC}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_58%] max-sm:object-[center_66%] max-md:object-[center_70%]"
            decoding="async"
            fetchPriority="high"
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
