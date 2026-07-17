import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { ColorSwatchCard } from "../ColorSwatchCard";
import { ContrastTable } from "../ContrastTable";
import { colors } from "@/brand/tokens";

export function ColorsSection() {
  return (
    <Section id="colors" tone="paper-deep">
      <SectionHeader
        eyebrow="Colors"
        heading="Seven tokens. Used with restraint."
        description="Gold is the accent, not the palette. Most of every layout should read as paper and ink."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Object.values(colors).map((c) => (
          <ColorSwatchCard key={c.var + c.label} label={c.label} value={c.value} cssVar={c.var} usage={c.usage} swatchText={c.swatchText} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 font-display text-2xl font-normal">Contrast pairings</h3>
        <ContrastTable />
      </div>
    </Section>
  );
}
