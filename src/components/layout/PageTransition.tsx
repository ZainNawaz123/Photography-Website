import { ViewTransition } from "react";
import { HeroBackground } from "@/components/home/HeroBackground";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit">
      {children}
    </ViewTransition>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroBackground />
      <Header />
      <div className="relative z-10 flex min-h-full flex-1 flex-col bg-background [&:has(.hero-page)]:bg-transparent">
        <PageTransition>{children}</PageTransition>
        <Footer />
      </div>
    </>
  );
}
