"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/i-was-here", label: "I Was Here" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          transparent
            ? "bg-transparent"
            : "border-b border-border/50 bg-background/80 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.12em] text-foreground uppercase md:text-2xl"
          >
            Zain Nawaz
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-px w-6 bg-foreground before:absolute before:-top-2 before:block before:h-px before:w-6 before:bg-foreground after:absolute after:top-2 after:block after:h-px after:w-6 after:bg-foreground" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
