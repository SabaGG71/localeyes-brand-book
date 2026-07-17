import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { HairlineRule } from "../HairlineRule";
import { Grain } from "../Grain";
import { GoldAura } from "../GoldAura";
import { CopyButton } from "../CopyButton";
import { ornament, texture } from "@/brand/tokens";

const hairlineCSS = `border-top: 1px solid;\nborder-color: color-mix(in srgb, currentColor 12%, transparent);`;
const grainCSS = `.grain::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: ${texture.grainAlpha};\n  mix-blend-mode: overlay;\n  background-image: url("noise.svg");\n}`;
const auraCSS = `background: ${texture.goldAura};`;

export function OrnamentSection() {
  return (
    <Section id="ornament" tone="paper-deep">
      <SectionHeader
        eyebrow="Ornament & Texture"
        heading="One star. Used everywhere, sparingly."
        description={ornament.note}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper p-6">
          <p className="mb-4 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">List marker</p>
          <ul className="space-y-2 font-body text-sm">
            <li className="flex gap-2"><span className="text-gold">{ornament.star}</span> Consistency over novelty</li>
            <li className="flex gap-2"><span className="text-gold">{ornament.star}</span> Restraint over decoration</li>
            <li className="flex gap-2"><span className="text-gold">{ornament.star}</span> Craft over speed</li>
          </ul>
        </div>

        <div className="rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper p-6">
          <p className="mb-4 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">Hairline rule</p>
          <HairlineRule className="my-6" />
          <div className="flex items-center justify-between">
            <code className="font-body text-xs text-mut">1px · 12% opacity</code>
            <CopyButton value={hairlineCSS} label="Copy CSS" />
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper p-6">
          <p className="mb-4 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">Divider</p>
          <div className="flex items-center gap-3 py-6 font-body text-xs uppercase tracking-[0.2em] text-mut">
            <span className="h-px flex-1 bg-ink/15" />
            <span className="text-gold">{ornament.star}</span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
          <CopyButton value={hairlineCSS} label="Copy CSS" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-ink p-8">
          <Grain />
          <p className="relative font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">Grain demo</p>
          <p className="relative mt-3 max-w-xs font-display text-2xl font-light text-paper">Subtle noise on dark surfaces.</p>
          <div className="relative mt-6">
            <CopyButton tone="paper" value={grainCSS} label="Copy CSS" />
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-ink p-8">
          <GoldAura />
          <p className="relative font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">Gold aura demo</p>
          <p className="relative mt-3 max-w-xs font-display text-2xl font-light text-paper">A soft glow, never a spotlight.</p>
          <div className="relative mt-6">
            <CopyButton tone="paper" value={auraCSS} label="Copy CSS" />
          </div>
        </div>
      </div>
    </Section>
  );
}
