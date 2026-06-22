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
        "fixed inset-0 z-40 bg-[#0c0a09]/96 backdrop-blur-md transition-[opacity,visibility] duration-500 ease-linear md:hidden",
        "pt-[calc(4.75rem+env(safe-area-inset-top,0px))]",
        "pb-[env(safe-area-inset-bottom,0px)]",
        open
          ? "visible opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <nav
        className="flex h-full flex-col items-center justify-center gap-2 px-6"
        aria-label="Mobile"
      >
        {links.map((link, index) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex min-h-[3rem] min-w-[12rem] items-center justify-center font-display text-[1.75rem] tracking-[0.06em] transition-[opacity,color] duration-700 ease-linear sm:text-[1.85rem]",
                open ? "opacity-100" : "opacity-0",
                isActive
                  ? "text-[#f4f0e8]"
                  : "text-[#f4f0e8]/60 active:text-[#f4f0e8]",
              )}
              style={{
                transitionDelay: open ? `${120 + index * 70}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
