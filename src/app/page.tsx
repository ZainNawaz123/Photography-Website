import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Header transparent />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
