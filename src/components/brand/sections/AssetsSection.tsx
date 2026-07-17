import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Download } from "lucide-react";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";

const staticAssets = [
  { href: "/brand/logo-wordmark.svg", name: "logo-wordmark.svg", desc: "Primary wordmark, ink on paper." },
  { href: "/brand/logo-monogram.svg", name: "logo-monogram.svg", desc: "Monogram, gold on ink." },
  { href: "/brand/favicon.svg", name: "favicon.svg", desc: "Site icon — monogram at favicon size." },
  { href: "/tokens.css", name: "tokens.css", desc: "CSS variables — colors, type scale, motion, layout." },
  { href: "/tailwind-snippet.css", name: "tailwind-snippet.css", desc: "@theme block wiring tokens into Tailwind v4." },
  { href: "/design-tokens.json", name: "design-tokens.json", desc: "The full token set as structured JSON." },
];

export function AssetsSection() {
  const hasFontsZip = existsSync(resolve(process.cwd(), "public/fonts.zip"));

  const assets = hasFontsZip
    ? [...staticAssets, { href: "/fonts.zip", name: "fonts.zip", desc: "Licensed IvyPresto Headline files, zipped from src/brand/fonts." }]
    : staticAssets;

  return (
    <Section id="assets" tone="paper-deep">
      <SectionHeader
        eyebrow="Assets"
        heading="Everything, generated from one file."
        description="These downloads are built from src/brand/tokens.ts at build time — change a value there and every file here updates with it."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assets.map((a) => (
          <a
            key={a.name}
            href={a.href}
            download
            className="group flex items-start justify-between gap-3 rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper p-5 transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] hover:border-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            <div>
              <p className="font-body text-sm font-semibold text-ink">{a.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-mut">{a.desc}</p>
            </div>
            <Download size={16} className="mt-1 shrink-0 text-mut transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] group-hover:text-gold-deep" aria-hidden="true" />
          </a>
        ))}
      </div>
    </Section>
  );
}
