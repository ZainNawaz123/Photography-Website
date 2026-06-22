import { ContactAlternatives } from "@/components/contact/ContactAlternatives";
import { ContactForm } from "@/components/contact/ContactForm";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Begin a conversation — portraits, celebrations, and quiet moments worth remembering.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-7 md:px-10 md:py-32">
        <div className="animate-fade-in space-y-5 md:space-y-8">
          <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
            Contact
          </p>
          <h1 className="text-balance font-display text-[2rem] leading-[1.05] tracking-[0.03em] text-[#f4f0e8] sm:text-4xl md:text-[2.75rem] lg:text-6xl lg:leading-[1.08]">
            Let&apos;s create something worth remembering.
          </h1>
          <p className="mx-auto max-w-[20rem] text-sm leading-[1.85] text-[#f4f0e8]/65 sm:max-w-md md:max-w-lg md:text-[0.95rem] md:leading-[1.9]">
            Whether it&apos;s a portrait, a celebration, or a quiet moment in
            between, I&apos;d love to hear your story.
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="scroll-mt-28 border-t border-[#f4f0e8]/[0.05]"
      >
        <div className="mx-auto flex w-full max-w-lg justify-center px-5 py-16 sm:px-7 md:py-28">
          <ContactForm />
        </div>
      </section>

      <section className="border-t border-[#f4f0e8]/[0.05]">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:px-7 md:py-28">
          <ContactAlternatives />
        </div>
      </section>

      <section className="border-t border-[#f4f0e8]/[0.05] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] md:pb-36">
        <div className="mx-auto max-w-md px-5 py-16 text-center sm:px-7 md:py-20">
          <p className="font-display text-lg leading-[1.6] tracking-[0.02em] text-[#f4f0e8]/75 md:text-xl">
            Every photograph begins with a conversation.
          </p>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-[1.85] text-[#f4f0e8]/45">
            The most meaningful photographs are not only about how something
            looked, but how it felt. Tell me about the moment you want to
            preserve.
          </p>
        </div>
      </section>
    </main>
  );
}
