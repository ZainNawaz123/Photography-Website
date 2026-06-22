"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  pathname: string;
};

export function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-opacity duration-500 md:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav
        className="flex h-full flex-col items-center justify-center gap-8"
        aria-label="Mobile"
      >
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "font-display text-3xl tracking-[0.08em] transition-colors duration-300",
              pathname === link.href || pathname.startsWith(`${link.href}/`)
                ? "text-foreground"
                : "text-muted hover:text-foreground",
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
