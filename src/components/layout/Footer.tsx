import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-10">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">
          © {year} Zain Nawaz Photography
        </p>

        <div className="flex items-center gap-8">
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
          >
            Get in Touch
          </Link>
          <Link
            href="/i-was-here"
            className="text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
          >
            I Was Here
          </Link>
        </div>
      </div>
    </footer>
  );
}
