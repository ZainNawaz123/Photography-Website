import { GuestbookArchive } from "@/components/guestbook/GuestbookArchive";
import { GuestbookForm } from "@/components/guestbook/GuestbookForm";
import { getApprovedGuestbookEntries } from "@/lib/guestbook/queries";
import { createPageMetadata } from "@/lib/utils/metadata";

export const metadata = createPageMetadata({
  title: "I Was Here",
  description:
    "Leave your mark — a quiet guestbook for visitors who connected with the photography.",
  path: "/i-was-here",
});

export default async function IWasHerePage() {
  const entries = await getApprovedGuestbookEntries();

  return (
    <main className="pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-20">
      <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-7 md:px-10 md:py-32">
        <div className="animate-fade-in space-y-5 md:space-y-8">
          <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
            I Was Here
          </p>
          <h1 className="text-balance font-display text-[2rem] leading-[1.05] tracking-[0.03em] text-[#f4f0e8] sm:text-4xl md:text-[2.75rem] lg:text-6xl lg:leading-[1.08]">
            Leave your mark.
          </h1>
          <p className="mx-auto max-w-[20rem] text-sm leading-[1.85] text-[#f4f0e8]/65 sm:max-w-md md:max-w-lg md:text-[0.95rem] md:leading-[1.9]">
            If these photographs made you pause for a moment, I invite you to
            leave a small piece of your experience behind.
          </p>
        </div>
      </section>

      <section
        id="guestbook-form"
        className="scroll-mt-28 border-t border-[#f4f0e8]/[0.05]"
      >
        <div className="mx-auto flex w-full max-w-lg justify-center px-5 py-16 sm:px-7 md:py-28">
          <GuestbookForm />
        </div>
      </section>

      <section className="border-t border-[#f4f0e8]/[0.05] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] md:pb-36">
        <div className="mx-auto max-w-2xl px-5 sm:px-7 md:px-10">
          <GuestbookArchive entries={entries} />
        </div>
      </section>
    </main>
  );
}
