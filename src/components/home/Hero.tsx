import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full">
      <div className="relative z-10 flex min-h-dvh items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] sm:px-7 md:px-10 md:pb-16 lg:pb-[4.5rem] xl:pb-20">
          <div className="max-w-lg animate-fade-in space-y-4 sm:max-w-xl md:space-y-5 lg:max-w-2xl lg:space-y-6 xl:max-w-[34rem]">
            <p className="text-[0.58rem] leading-relaxed tracking-[0.28em] text-[#f4f0e8]/82 uppercase sm:text-[0.62rem] sm:tracking-[0.32em] md:text-xs md:tracking-[0.34em]">
              Portrait <span className="text-[#f4f0e8]/35">•</span> Event{" "}
              <span className="text-[#f4f0e8]/35">•</span> Documentary
            </p>
            <h1 className="text-balance font-display text-[2.5rem] leading-[0.92] tracking-[0.04em] text-[#f4f0e8] sm:text-[2.65rem] md:text-6xl lg:text-7xl xl:text-[5.25rem] xl:tracking-[0.045em]">
              Zain Nawaz
            </h1>
            <p className="max-w-md text-sm leading-[1.75] tracking-[0.03em] text-[#f4f0e8]/78 md:text-[0.95rem] md:leading-[1.8]">
              Portraits, events, and quiet moments, photographed with intention.
            </p>
            <div className="pt-3 md:pt-5">
              <Link href="/portfolio" className="hero-cta">
                Enter the Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
