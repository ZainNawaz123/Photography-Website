import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full animate-ken-burns">
          <Image
            src="/images/hero.jpg"
            alt="Featured photograph by Zain Nawaz"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-background/10" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center md:pb-32">
        <div className="max-w-3xl animate-fade-in space-y-6">
          <p className="text-xs tracking-[0.35em] text-foreground/80 uppercase">
            Photography
          </p>
          <h1 className="font-display text-5xl leading-tight tracking-[0.04em] text-foreground md:text-7xl lg:text-8xl">
            Zain Nawaz
          </h1>
          <p className="mx-auto max-w-md text-sm leading-relaxed tracking-[0.08em] text-foreground/75 md:text-base">
            Capturing meaningful moments with intention, light, and quiet
            elegance.
          </p>
          <div className="pt-4">
            <Link
              href="/portfolio"
              className="inline-block border border-foreground/30 px-8 py-3 text-xs tracking-[0.25em] text-foreground uppercase transition-colors duration-300 hover:border-foreground hover:bg-foreground/5"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "600ms" }}
          aria-hidden
        >
          <span className="block h-10 w-px bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}
