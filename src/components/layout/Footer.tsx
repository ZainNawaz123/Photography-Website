import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-foreground/[0.04] bg-linear-to-t from-background via-background to-background/95 [view-transition-name:site-footer] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-6 md:flex-row md:px-10 md:py-12">
        <p className="text-[0.65rem] tracking-[0.18em] text-foreground/45 uppercase md:text-xs">
          © {year} Zain Nawaz Photography
        </p>

        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[0.65rem] tracking-[0.18em] text-foreground/50 uppercase transition-elegant hover:text-foreground/85 max-md:active:text-foreground/85 md:text-xs"
          >
            Get in Touch
          </Link>
          <Link
            href="/i-was-here"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[0.65rem] tracking-[0.18em] text-foreground/50 uppercase transition-elegant hover:text-foreground/85 max-md:active:text-foreground/85 md:text-xs"
          >
            I Was Here
          </Link>
        </div>
      </div>
    </footer>
  );
}
