import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/about/AboutSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ABOUT_PORTRAIT_SRC } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Why I photograph — a quiet journal from Zain Nawaz, a student photographer in Toronto.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-7 md:px-10 md:py-32">
        <div className="animate-fade-in space-y-5 md:space-y-8">
          <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
            About
          </p>
          <h1 className="text-balance font-display text-[2rem] leading-[1.05] tracking-[0.03em] text-[#f4f0e8] sm:text-4xl md:text-[2.75rem] lg:text-6xl lg:leading-[1.08]">
            Why I photograph.
          </h1>
        </div>
      </section>

      <section className="border-t border-[#f4f0e8]/[0.05]">
        <RevealOnScroll>
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-7 md:py-24 lg:max-w-6xl">
            <div className="flex flex-col gap-12 md:grid md:grid-cols-[minmax(13rem,18rem)_1fr] md:items-stretch md:gap-14 lg:grid-cols-[minmax(15rem,20rem)_1fr] lg:gap-20">
              <figure className="relative mx-auto w-full max-w-[17.5rem] md:mx-0 md:h-full md:max-w-none">
                <div className="relative aspect-[804/1024] w-full overflow-hidden border border-[#f4f0e8]/[0.08] bg-[#141110] md:absolute md:inset-0 md:aspect-auto md:h-full md:w-full">
                  <Image
                    src={ABOUT_PORTRAIT_SRC}
                    alt="Zain Nawaz with a camera on a city street"
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 80vw, 20rem"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                </div>
                <div
                  className="aspect-[804/1024] w-full md:hidden"
                  aria-hidden="true"
                />
              </figure>

              <div className="flex-1 md:min-w-0">
                <div className="space-y-4 md:space-y-5">
                  <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
                    My Story
                  </p>
                  <h2 className="text-balance font-display text-[1.75rem] leading-[1.1] tracking-[0.03em] text-[#f4f0e8] sm:text-3xl md:text-[2rem] md:leading-[1.12]">
                    It started before I had a camera.
                  </h2>
                </div>
                <div className="mt-8 space-y-6 text-sm leading-[1.85] text-[#f4f0e8]/65 md:mt-10 md:space-y-7 md:text-[0.95rem] md:leading-[1.9]">
                  <p>
                    I&apos;m nineteen, studying electrical engineering at the
                    University of Toronto. Most of my days are spent with
                    equations and circuits, but long before I owned a camera, I
                    was already taking pictures.
                  </p>
                  <p>
                    It started with my phone. I was always the one capturing
                    things. Friends laughing, family gatherings, a street I
                    wanted to remember. Photography wasn&apos;t something I
                    studied. It was just how I paid attention to the world.
                  </p>
                  <p>
                    What drew me in was simple: I wanted to preserve memories.
                    To make something beautiful out of ordinary days. To hold
                    onto moments before they slipped away.
                  </p>
                  <p>
                    A job that involved taking photographs changed something for
                    me. I realized how much I loved the craft, not just the
                    result, but the act of looking, waiting, and pressing the
                    shutter. That&apos;s when I started taking it seriously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <AboutSection
        label="How I See The World"
        title="Moments that feel like film."
      >
        <p>
          I&apos;m drawn to moments that feel cinematic, like they belong in a
          movie I haven&apos;t seen yet.
        </p>
        <p>
          It might be beautiful light falling across a face. A quiet expression
          someone didn&apos;t know I caught. A place heavy with memory. An
          ordinary afternoon that suddenly feels extraordinary.
        </p>
        <p>
          Photography lets me tell stories about the people in front of my
          lens, and about how I see the world when nobody&apos;s watching.
        </p>
      </AboutSection>

      <AboutSection
        label="Beyond Photography"
        title="Two sides of the same life."
      >
        <p>
          My days are spent studying technology, circuits, and engineering,
          where logic is essential. Photography is where I slow
          down, observe, and appreciate the emotional side of the world.
        </p>
        <p>
          I&apos;m from Oakville, and Toronto has become a second home, full of
          streets, corners, and light I&apos;m still discovering.
        </p>
        <p>
          When I&apos;m not behind a camera or buried in coursework, you&apos;ll
          probably find me watching baseball. The Blue Jays have quickly become a huge part of my life.
        </p>
        <p>Either way, I&apos;m always looking for moments worth remembering.</p>
      </AboutSection>

      <AboutSection
        label="For The People I Photograph"
        title="More than a good photograph."
      >
        <p>I don&apos;t just want people to receive good photographs.</p>
        <p>
          I want them to receive something they can frame, revisit years later,
          and immediately remember exactly how that moment felt.
        </p>
        <p>
          The photograph should become a memory they can return to, not a file
          they&apos;ll forget on a hard drive.
        </p>
      </AboutSection>

      <AboutSection
        label="Growth"
        title="Still finding my way."
        className="border-b border-[#f4f0e8]/[0.05]"
      >
        <p>
          I&apos;m still growing as a photographer. I&apos;m still learning,
          still developing my eye, still exploring new stories and moments I
          haven&apos;t tried before.
        </p>
        <p>
          I don&apos;t think that&apos;s a weakness. It&apos;s why I&apos;m
          here. I&apos;m curious, hungry, and aspiring to create work that means
          something to the people in it, and to me.
        </p>
      </AboutSection>

      <section className="pb-[calc(7rem+env(safe-area-inset-bottom,0px))] md:pb-36">
        <RevealOnScroll>
          <div className="mx-auto max-w-md px-5 py-16 text-center sm:px-7 md:py-24">
            <p className="font-display text-lg leading-[1.6] tracking-[0.02em] text-[#f4f0e8]/75 md:text-xl">
              If you have a moment worth preserving, I&apos;d love to hear about
              it.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="hero-cta">
                Begin the Conversation
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
