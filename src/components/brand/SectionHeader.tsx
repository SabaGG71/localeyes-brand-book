import { Eyebrow } from "./Eyebrow";
import { HairlineRule } from "./HairlineRule";

/** Eyebrow + hairline + big serif heading — the canonical section-header pattern. */
export function SectionHeader({
  eyebrow,
  heading,
  tone = "ink",
  description,
}: {
  eyebrow: string;
  heading: string;
  tone?: "ink" | "paper";
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Eyebrow tone="gold">{eyebrow}</Eyebrow>
      <HairlineRule tone={tone} className="my-4 w-16" />
      <h2 className="font-display font-light text-[length:var(--fs-h2)] leading-[var(--lh-h2)] tracking-[var(--ls-h2)]">
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-[length:var(--fs-body)] leading-[var(--lh-body)] ${tone === "paper" ? "text-mut-ink" : "text-mut"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
