import { ornament } from "@/brand/tokens";

export function SecondaryLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
    >
      <span aria-hidden="true" className="text-gold">
        {ornament.star}
      </span>
      <span className="border-b-2 border-gold pb-0.5 transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] group-hover:border-gold-hover group-hover:text-gold-hover">
        {children}
      </span>
    </a>
  );
}
