import { Section } from "../Section";
import { Eyebrow } from "../Eyebrow";
import { brand } from "@/brand/tokens";

export function CoverSection() {
  return (
    <Section id="cover" tone="ink-gradient" grain aura className="!py-0">
      <div className="flex min-h-[60vh] flex-col justify-center lg:min-h-[75vh]">
        <Eyebrow tone="gold">Brand Book</Eyebrow>
        <h1 className="mt-6 font-display font-light text-[length:var(--fs-display-xl)] leading-[var(--lh-display-xl)] tracking-[var(--ls-display-xl)]">
          {brand.name}
        </h1>
        <div className="mt-10 flex items-center gap-4 font-body text-sm text-mut-ink">
          <span className="tabular-nums">{brand.version}</span>
          <span aria-hidden="true" className="text-gold">✦</span>
          <span>Updated 2026</span>
        </div>
        <p className="mt-4 max-w-md font-body text-base text-mut-ink">{brand.tagline}</p>
      </div>
    </Section>
  );
}
