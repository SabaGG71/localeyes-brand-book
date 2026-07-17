import { ArrowUpRight } from "lucide-react";

/**
 * Signature button: gold pill with a circular ink "chip" holding an arrow.
 * On hover the ink circle floods the pill, the chip inverts to gold, and
 * the arrow rotates 45° — transform / color only, per the motion spec.
 */
export function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-ink transition-transform duration-[var(--dur-slow)] ease-[var(--ease)] group-hover:scale-[12]"
      />
      <span className="relative z-10 pl-1">{children}</span>
      <span
        aria-hidden="true"
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-gold transition-colors duration-[var(--dur-slow)] ease-[var(--ease)] group-hover:bg-gold group-hover:text-ink"
      >
        <ArrowUpRight
          size={16}
          className="transition-transform duration-[var(--dur-slow)] ease-[var(--ease)] group-hover:rotate-45"
        />
      </span>
    </>
  );

  const className =
    "group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-[var(--radius-pill)] bg-gold py-1.5 pl-6 pr-1.5 font-body text-sm font-semibold text-ink transition-colors duration-[var(--dur-slow)] ease-[var(--ease)] hover:text-paper focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  );
}
