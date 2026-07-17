import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { HairlineRule } from "../HairlineRule";
import { voicePrinciples, voiceExamples } from "@/brand/content";

export function VoiceSection() {
  return (
    <Section id="voice" tone="paper">
      <SectionHeader eyebrow="Voice & Copy" heading="Confident, warm, editorial." />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {voicePrinciples.map((p) => (
          <div key={p.title}>
            <h3 className="font-display text-2xl font-light">{p.title}</h3>
            <HairlineRule className="my-3 w-10" />
            <p className="text-sm leading-relaxed text-mut">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {voiceExamples.map((ex, i) => (
          <div key={i} className="grid grid-cols-1 gap-4 rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper-deep p-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-deep">Do</p>
              <p className="font-display text-lg font-normal">{ex.do}</p>
            </div>
            <div>
              <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.2em] text-mut">Don&apos;t</p>
              <p className="font-display text-lg font-normal text-mut">{ex.dont}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
