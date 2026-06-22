const contactLinks = [
  {
    label: "Instagram",
    value: "@zan.photography_",
    href: "https://instagram.com/zan.photography_",
  },
  {
    label: "Email",
    value: "zain081206@gmail.com",
    href: "mailto:zain081206@gmail.com",
  },
];

export function ContactAlternatives() {
  return (
    <div className="mx-auto max-w-md space-y-10 text-center">
      <div className="space-y-3">
        <p className="font-display text-xl tracking-[0.02em] text-[#f4f0e8]/85 md:text-2xl">
          Prefer a simpler conversation?
        </p>
        <p className="text-sm leading-[1.75] text-[#f4f0e8]/50">
          Some stories begin with just a message.
        </p>
      </div>

      <ul className="space-y-8">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group inline-flex min-h-[44px] flex-col items-center justify-center gap-1.5 transition-ui"
            >
              <span className="text-[0.62rem] tracking-[0.22em] text-[#f4f0e8]/40 uppercase">
                {link.label}
              </span>
              <span className="text-sm tracking-[0.03em] text-[#f4f0e8]/70 transition-ui group-hover:text-[#f4f0e8] group-active:text-[#f4f0e8] md:group-hover:text-[#f4f0e8]">
                {link.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
