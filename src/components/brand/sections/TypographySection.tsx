import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Download } from "lucide-react";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { TypeSpecimenRow } from "../TypeSpecimenRow";
import { typeScale, fontFamilies } from "@/brand/tokens";

export function TypographySection() {
  const hasFontsZip = existsSync(resolve(process.cwd(), "public/fonts.zip"));

  return (
    <Section id="typography" tone="paper">
      <SectionHeader
        eyebrow="Typography"
        heading="Two families. No italics, ever."
        description={`${fontFamilies.display.note} ${fontFamilies.body.label} carries every other role.`}
      />

      {hasFontsZip && (
        <a
          href="/fonts.zip"
          download
          className="group mb-14 -mt-8 inline-flex items-center gap-2 rounded-full border hairline border-ink/20 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] hover:border-gold hover:text-gold-deep"
        >
          <Download size={13} aria-hidden="true" />
          Download fonts.zip
        </a>
      )}

      <div>
        {Object.values(typeScale).map((style) => (
          <TypeSpecimenRow key={style.key} style={style} />
        ))}
      </div>
    </Section>
  );
}
