"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/i-was-here", label: "I Was Here" },
];

function NavLink({
  href,
  label,
  isActive,
  isOverHero,
}: {
  href: string;
  label: string;
  isActive: boolean;
  isOverHero: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "nav-link group relative py-1 text-[0.68rem] tracking-[0.22em] uppercase transition-ui",
        isOverHero && "text-nav-shadow",
        isActive
          ? "text-[#f4f0e8]"
          : "text-[#f4f0e8]/72 hover:text-[#f4f0e8]",
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "nav-link-underline absolute -bottom-0.5 left-0 h-px w-full bg-[#f4f0e8]/75",
          isActive && "nav-link-underline-visible",
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setHomeScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isOverHero = isHome && !homeScrolled;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-ui",
          "pt-[env(safe-area-inset-top,0px)]",
          "[view-transition-name:site-header]",
          isOverHero
            ? "border-b border-[#f4f0e8]/[0.08] bg-linear-to-b from-[#0c0a09]/48 via-[#0c0a09]/16 to-transparent backdrop-blur-[2px]"
            : "border-b border-[#f4f0e8]/[0.05] bg-[#0c0a09]/78 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-7 md:h-20 md:px-10">
          <Link
            href="/"
            className={cn(
              "font-display text-[1.125rem] tracking-[0.12em] text-[#f4f0e8] uppercase transition-ui sm:text-xl md:text-[1.35rem] md:tracking-[0.14em]",
              isOverHero && "text-nav-shadow",
            )}
          >
            Zain Nawaz
          </Link>

          <nav
            className="hidden items-center gap-9 lg:gap-11 md:flex"
            aria-label="Main"
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={isActive}
                  isOverHero={isOverHero}
                />
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center transition-ui md:hidden",
              isOverHero && "text-nav-shadow",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "relative block h-px w-6 bg-[#f4f0e8]/88 transition-ui before:absolute before:-top-2 before:block before:h-px before:w-6 before:bg-[#f4f0e8]/88 before:transition-ui after:absolute after:top-2 after:block after:h-px after:w-6 after:bg-[#f4f0e8]/88 after:transition-ui",
                menuOpen &&
                  "rotate-45 before:top-0 before:rotate-90 after:top-0 after:-rotate-90",
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
