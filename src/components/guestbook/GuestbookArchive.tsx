import { formatGuestbookDate } from "@/lib/guestbook/format";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { GuestbookEntry } from "@/types/guestbook";

type GuestbookArchiveProps = {
  entries: GuestbookEntry[];
};

export function GuestbookArchive({ entries }: GuestbookArchiveProps) {
  return (
    <div>
      <RevealOnScroll>
        <div className="space-y-4 text-center">
          <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
            Archive
          </p>
          <h2 className="text-balance font-display text-[1.85rem] tracking-[0.03em] text-[#f4f0e8] sm:text-3xl md:text-4xl">
            Those Who Were Here
          </h2>
        </div>
      </RevealOnScroll>

      {entries.length === 0 ? (
        <RevealOnScroll className="mt-16 md:mt-20">
          <p className="mx-auto max-w-xs text-center text-sm leading-[1.8] text-[#f4f0e8]/45 sm:max-w-sm">
            The pages are open. The first marks are yet to be made.
          </p>
        </RevealOnScroll>
      ) : (
        <ul className="mt-16 space-y-0 md:mt-20" aria-label="Approved guestbook entries">
          {entries.map((entry) => (
            <li key={entry.id}>
              <RevealOnScroll>
                <article className="border-t border-[#f4f0e8]/[0.05] py-10 md:py-14">
                  <header className="space-y-1.5">
                    <h3 className="font-display text-[1.65rem] tracking-[0.02em] text-[#f4f0e8] sm:text-2xl md:text-[1.65rem]">
                      {entry.name}
                    </h3>
                    {entry.location && (
                      <p className="text-sm tracking-[0.04em] text-[#f4f0e8]/50">
                        {entry.location}
                      </p>
                    )}
                  </header>

                  {entry.message && (
                    <blockquote className="mt-5 max-w-full md:mt-6 md:max-w-lg">
                      <p className="font-display text-[1.05rem] leading-[1.65] tracking-[0.01em] text-[#f4f0e8]/78 sm:text-lg md:text-xl md:leading-[1.7]">
                        &ldquo;{entry.message}&rdquo;
                      </p>
                    </blockquote>
                  )}

                  <p className="mt-6 text-[0.62rem] tracking-[0.18em] text-[#f4f0e8]/38 uppercase md:mt-8">
                    {formatGuestbookDate(entry.created_at)}
                  </p>
                </article>
              </RevealOnScroll>
            </li>
          ))}
          <li aria-hidden className="border-t border-[#f4f0e8]/[0.05]" />
        </ul>
      )}
    </div>
  );
}
