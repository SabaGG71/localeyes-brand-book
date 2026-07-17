import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { CopyButton } from "../CopyButton";
import { PrimaryButton } from "../PrimaryButton";
import { motion } from "@/brand/tokens";

const easingCSS = `transition-timing-function: ${motion.easing.value};`;
const durationCSS = `transition-duration: ${motion.duration.fast.value}; /* fast */\ntransition-duration: ${motion.duration.slow.value}; /* slow */`;

export function MotionSection() {
  return (
    <Section id="motion" tone="ink" aura>
      <SectionHeader
        tone="paper"
        eyebrow="Motion"
        heading="Quiet, deliberate, reversible."
        description="Motion in the brand book itself is minimal. When it appears elsewhere, it follows this curve."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-[var(--radius-card)] border border-paper/15 bg-paper/5 p-6">
          <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">Easing</p>
          <code className="block font-body text-sm text-paper">{motion.easing.value}</code>
          <div className="mt-4 h-px w-full bg-paper/15" />
          <div className="mt-4 h-8 w-8 rounded-full bg-gold transition-transform ease-[var(--ease)] duration-[var(--dur-slow)] motion-safe:hover:translate-x-[calc(100%-2rem)]" />
          <p className="mt-2 text-xs text-mut-ink">Hover the dot</p>
          <div className="mt-4">
            <CopyButton tone="paper" value={easingCSS} label="Copy CSS" />
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-paper/15 bg-paper/5 p-6">
          <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">Durations</p>
          <p className="font-body text-sm text-paper">Fast — {motion.duration.fast.value}</p>
          <p className="font-body text-sm text-paper">Slow — {motion.duration.slow.value}</p>
          <p className="mt-3 text-xs leading-relaxed text-mut-ink">
            Fast for hovers and small state changes. Slow for the signature button flood and anything that
            covers more than a third of the viewport.
          </p>
          <div className="mt-4">
            <CopyButton tone="paper" value={durationCSS} label="Copy CSS" />
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-paper/15 bg-paper/5 p-6">
          <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">{motion.button.label}</p>
          <p className="mb-6 text-xs leading-relaxed text-mut-ink">{motion.button.description}</p>
          <PrimaryButton>Hover me</PrimaryButton>
        </div>
      </div>

      <p className="mt-10 text-xs text-mut-ink">All motion respects prefers-reduced-motion — durations collapse to near-zero automatically.</p>
    </Section>
  );
}
