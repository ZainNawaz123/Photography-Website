import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

type AboutSectionProps = {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export function AboutSection({
  label,
  title,
  children,
  className,
  titleClassName,
}: AboutSectionProps) {
  return (
    <section className={cn("border-t border-[#f4f0e8]/[0.05]", className)}>
      <RevealOnScroll>
        <div className="mx-auto max-w-xl px-5 py-16 sm:px-7 md:max-w-2xl md:py-24">
          <div className="space-y-4 md:space-y-5">
            <p className="text-[0.62rem] tracking-[0.34em] text-[#f4f0e8]/45 uppercase">
              {label}
            </p>
            <h2
              className={cn(
                "text-balance font-display text-[1.75rem] leading-[1.1] tracking-[0.03em] text-[#f4f0e8] sm:text-3xl md:text-[2rem] md:leading-[1.12]",
                titleClassName,
              )}
            >
              {title}
            </h2>
          </div>
          <div className="mt-8 space-y-6 text-sm leading-[1.85] text-[#f4f0e8]/65 md:mt-10 md:space-y-7 md:text-[0.95rem] md:leading-[1.9]">
            {children}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
