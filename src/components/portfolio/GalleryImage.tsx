"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import type { PortfolioImage } from "@/types/portfolio";

function isPortrait(image: PortfolioImage) {
  return image.height > image.width;
}

type GalleryImageProps = {
  image: PortfolioImage;
  priority?: boolean;
  className?: string;
  sizes: string;
};

export function GalleryImage({
  image,
  priority = false,
  className,
  sizes,
}: GalleryImageProps) {
  return (
    <RevealOnScroll className={className}>
      <div className="gallery-image-wrap overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={90}
          priority={priority}
          sizes={sizes}
          className={cn(
            "gallery-image block h-auto w-full",
            isPortrait(image) ? "max-h-[82vh]" : "max-h-[70vh]",
          )}
        />
      </div>
    </RevealOnScroll>
  );
}
