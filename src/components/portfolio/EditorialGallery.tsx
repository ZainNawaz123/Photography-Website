import { GalleryImage } from "@/components/portfolio/GalleryImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import type { LayoutBlock, PortfolioImage } from "@/types/portfolio";

type EditorialGalleryProps = {
  blocks: LayoutBlock[];
};

function isPortrait(image: PortfolioImage) {
  return image.height > image.width;
}

const portraitColumnClass =
  "w-full max-w-[15.5rem] sm:max-w-[16.5rem] md:max-w-none";

function singleWidthClass(
  image: PortfolioImage,
  scale: "hero" | "standard" = "standard",
) {
  if (isPortrait(image)) {
    return portraitColumnClass;
  }

  if (scale === "hero" || image.width / image.height >= 1.65) {
    return "w-full max-w-6xl";
  }

  return "w-full max-w-4xl";
}

export function EditorialGallery({ blocks }: EditorialGalleryProps) {
  const rendered = blocks
    .filter((block) => block.type !== "pause")
    .map((block, index) => (
      <GalleryBlock key={`${block.type}-${index}`} block={block} index={index} />
    ));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 px-5 sm:px-7 md:gap-28 md:px-10">
      {rendered}
    </div>
  );
}

type GalleryBlockProps = {
  block: LayoutBlock;
  index: number;
};

function GalleryBlock({ block, index }: GalleryBlockProps) {
  const priority = index === 0;

  switch (block.type) {
    case "featured":
      return (
        <SingleSpread
          image={block.image}
          priority={priority}
          scale="hero"
          sizes="(max-width: 768px) 100vw, 72rem"
        />
      );

    case "wide":
      return (
        <SingleSpread
          image={block.image}
          priority={priority}
          scale="standard"
          sizes="(max-width: 768px) 100vw, 56rem"
        />
      );

    case "portrait":
      return (
        <VerticalPair image={block.image} priority={priority} />
      );

    case "pair":
      return (
        <div className="grid w-full max-w-4xl grid-cols-2 items-start gap-5 sm:max-w-5xl sm:gap-8 md:max-w-6xl md:gap-10 lg:gap-12">
          <VerticalPair image={block.images[0]} priority={priority} />
          <VerticalPair image={block.images[1]} />
        </div>
      );

    case "sequence":
      return (
        <div className="grid w-full max-w-4xl grid-cols-2 items-start gap-5 sm:max-w-6xl sm:gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          {block.images.map((image, imageIndex) => (
            <VerticalPair
              key={image.src}
              image={image}
              priority={priority && imageIndex === 0}
              className={cn(
                block.images.length === 3 &&
                  imageIndex === 2 &&
                  "col-span-2 mx-auto max-w-[16.5rem] md:col-span-1 md:mx-0 md:max-w-none",
              )}
            />
          ))}
        </div>
      );

    case "asymmetric":
      return (
        <div className="grid w-full max-w-4xl grid-cols-2 items-start gap-5 sm:max-w-5xl sm:gap-8 md:max-w-6xl md:gap-10">
          <VerticalPair image={block.primary} priority={priority} />
          <VerticalPair image={block.secondary} />
        </div>
      );

    default:
      return null;
  }
}

type VerticalPairProps = {
  image: PortfolioImage;
  priority?: boolean;
  className?: string;
};

function VerticalPair({ image, priority = false, className }: VerticalPairProps) {
  if (!isPortrait(image)) {
    return (
      <SingleSpread
        image={image}
        priority={priority}
        scale="standard"
        sizes="(max-width: 768px) 100vw, 40vw"
        className={className}
      />
    );
  }

  return (
    <div className={cn("mx-auto w-full", portraitColumnClass, className)}>
      <GalleryImage
        image={image}
        priority={priority}
        sizes="(max-width: 768px) 44vw, 18rem"
      />
    </div>
  );
}

type SingleSpreadProps = {
  image: PortfolioImage;
  priority?: boolean;
  scale?: "hero" | "standard";
  sizes: string;
  className?: string;
};

function SingleSpread({
  image,
  priority = false,
  scale = "standard",
  sizes,
  className,
}: SingleSpreadProps) {
  return (
    <div className={cn("mx-auto", singleWidthClass(image, scale), className)}>
      <GalleryImage image={image} priority={priority} sizes={sizes} />
    </div>
  );
}

type EmptyCollectionProps = {
  message?: string;
};

export function EmptyCollection({
  message = "This collection is being prepared.",
}: EmptyCollectionProps) {
  return (
    <RevealOnScroll>
      <p className="mx-auto max-w-sm px-5 py-20 text-center text-sm leading-[1.85] text-[#f4f0e8]/45 sm:px-7 md:py-28">
        {message}
      </p>
    </RevealOnScroll>
  );
}
