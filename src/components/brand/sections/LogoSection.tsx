import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { DoDontCard } from "../DoDontCard";
import { DottedRow } from "../DottedRow";
import { brand } from "@/brand/tokens";
import { logoClearSpace, logoDonts } from "@/brand/content";

export function LogoSection() {
  return (
    <Section id="logo" tone="paper">
      <SectionHeader eyebrow="Logo" heading="The mark, used correctly." />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex h-48 items-center justify-center rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper-deep">
            <p className="font-display font-light text-5xl tracking-[-0.02em]">{brand.name}</p>
          </div>
          <div className="flex h-48 items-center justify-center rounded-[var(--radius-card)] bg-ink">
            <p className="font-display font-light text-6xl tracking-[-0.02em] text-gold">{brand.monogram}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <DottedRow label="Minimum size — digital" value={logoClearSpace.minSizeDigital} />
          <DottedRow label="Minimum size — print" value={logoClearSpace.minSizePrint} />
          <DottedRow label="Minimum size — monogram" value={logoClearSpace.minSizeMonogram} />
          <p className="mt-6 text-sm leading-relaxed text-mut">{logoClearSpace.rule}</p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <DoDontCard kind="do" title="Set in the display serif" description="The wordmark is always typeset in the display face, never redrawn or substituted.">
          <p className="font-display font-light text-3xl">{brand.name}</p>
        </DoDontCard>
        {logoDonts.map((item) => (
          <DoDontCard key={item.title} kind="dont" title={item.title} description={item.description}>
            <p className="font-display font-light text-3xl text-gold">{brand.name}</p>
          </DoDontCard>
        ))}
      </div>
    </Section>
  );
}
