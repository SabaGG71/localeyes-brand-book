import { ornament } from "@/brand/tokens";

export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "gold";
}) {
  const toneClass = tone === "gold" ? "text-gold" : "text-ink";
  return (
    <p
      className={`font-body font-extrabold uppercase text-[length:var(--fs-eyebrow)] leading-[var(--lh-eyebrow)] tracking-[var(--ls-eyebrow)] ${toneClass}`}
    >
      <span aria-hidden="true">{ornament.star}</span> {children}
    </p>
  );
}
