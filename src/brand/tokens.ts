/**
 * SINGLE SOURCE OF TRUTH for the brand.
 *
 * Every color swatch, type specimen, generated tokens.css / tailwind
 * snippet / design-tokens.json, and every component in src/components/brand
 * reads from this file. Change a value here and the whole site (and every
 * generated download) updates with it.
 */

export const brand = {
  name: "Localeyes",
  monogram: "LE",
  version: "v1.0",
  tagline: "Editorial luxury, kept honest.",
} as const;

export const colors = {
  paper: { value: "#ededd5", var: "--paper", label: "Paper", usage: "Primary cream background for light sections.", swatchText: "ink" },
  paperDeep: { value: "#e6e3cd", var: "--paper-deep", label: "Paper Deep", usage: "Slightly deeper cream for alternating sections and recessed panels.", swatchText: "ink" },
  ink: { value: "#261f15", var: "--ink", label: "Ink", usage: "All body text on light backgrounds; also used as the dark section background.", swatchText: "paper" },
  gold: { value: "#a67c3d", var: "--gold", label: "Gold", usage: "Primary accent. Use sparingly — buttons, rules, ornament, small highlights.", swatchText: "ink" },
  goldHover: { value: "#8f6a32", var: "--gold-hover", label: "Gold Hover", usage: "Hover / active state for gold-filled elements.", swatchText: "paper" },
  goldDeep: { value: "#7a5a2a", var: "--gold-deep", label: "Gold Deep", usage: "Accent text on light backgrounds where standard gold fails contrast.", swatchText: "paper" },
  mut: { value: "rgba(38,31,21,0.6)", var: "--mut", label: "Muted (on Paper)", usage: "Secondary / muted text on cream backgrounds.", swatchText: "paper" },
  paperOnInk: { value: "#ededd5", var: "--paper", label: "Paper (text on Ink)", usage: "Body text color used on dark ink section backgrounds.", swatchText: "ink" },
  mutOnInk: { value: "rgba(237,237,213,0.6)", var: "--mut-ink", label: "Muted (on Ink)", usage: "Secondary / muted text on dark ink backgrounds.", swatchText: "ink" },
} as const;

export const contrastPairs = [
  { fg: "Ink #261f15", bg: "Paper #ededd5", ratio: "14.1:1", note: "AA & AAA — primary body text." },
  { fg: "Ink #261f15", bg: "Paper Deep #e6e3cd", ratio: "13.3:1", note: "AA & AAA — body text on recessed panels." },
  { fg: "Paper #ededd5", bg: "Ink #261f15", ratio: "14.1:1", note: "AA & AAA — inverted sections." },
  { fg: "Gold Deep #7a5a2a", bg: "Paper #ededd5", ratio: "5.3:1", note: "AA for normal text — accent text on paper." },
  { fg: "Gold #a67c3d", bg: "Ink #261f15", ratio: "4.6:1", note: "AA for normal text — use for accents & labels on dark." },
  { fg: "Muted rgba(38,31,21,.6)", bg: "Paper #ededd5", ratio: "5.1:1", note: "AA for normal text — captions, meta." },
] as const;

export const fontFamilies = {
  display: {
    label: "Display",
    stack: 'var(--font-ivypresto, "IvyPresto Headline"), var(--font-fraunces), Georgia, serif',
    css: '--font-display',
    note: 'IvyPresto Headline, licensed and loaded locally from src/brand/fonts. Fraunces is the fallback for contexts where the licensed files aren’t available (e.g. the downloaded tokens.css).',
  },
  body: {
    label: "Body / UI",
    stack: "var(--font-manrope), Arial, sans-serif",
    css: "--font-body",
    note: "Manrope for all UI, body copy, and labels.",
  },
} as const;

export type TypeStyleKey =
  | "displayXl"
  | "display"
  | "h2"
  | "h3"
  | "body"
  | "small"
  | "eyebrow";

export interface TypeStyle {
  key: TypeStyleKey;
  label: string;
  sample: string;
  family: keyof typeof fontFamilies;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
  weightLabel: string;
  specLabel: string;
  className: string;
}

export const typeScale: Record<TypeStyleKey, TypeStyle> = {
  displayXl: {
    key: "displayXl",
    label: "Display XL",
    sample: "The Mark",
    family: "display",
    fontSize: "clamp(3.25rem, 3rem + 4vw, 7.5rem)",
    lineHeight: "1.04",
    letterSpacing: "-0.02em",
    fontWeight: 300,
    weightLabel: "Light 300",
    specLabel: "52–120px / 1.04 / -0.02em",
    className:
      "font-display font-light text-[length:var(--fs-display-xl)] leading-[var(--lh-display-xl)] tracking-[var(--ls-display-xl)]",
  },
  display: {
    key: "display",
    label: "Display",
    sample: "Editorial Luxury",
    family: "display",
    fontSize: "clamp(2.5rem, 2.3rem + 2vw, 4.5rem)",
    lineHeight: "1.06",
    letterSpacing: "-0.02em",
    fontWeight: 300,
    weightLabel: "Light 300",
    specLabel: "40–72px / 1.06 / -0.02em",
    className:
      "font-display font-light text-[length:var(--fs-display)] leading-[var(--lh-display)] tracking-[var(--ls-display)]",
  },
  h2: {
    key: "h2",
    label: "H2",
    sample: "Section Heading",
    family: "display",
    fontSize: "clamp(2rem, 1.85rem + 1vw, 3rem)",
    lineHeight: "1.08",
    letterSpacing: "-0.015em",
    fontWeight: 400,
    weightLabel: "Regular 400",
    specLabel: "32–48px / 1.08 / -0.015em",
    className:
      "font-display font-normal text-[length:var(--fs-h2)] leading-[var(--lh-h2)] tracking-[var(--ls-h2)]",
  },
  h3: {
    key: "h3",
    label: "H3",
    sample: "Subsection Heading",
    family: "display",
    fontSize: "clamp(1.375rem, 1.3rem + 0.5vw, 2rem)",
    lineHeight: "1.12",
    letterSpacing: "-0.01em",
    fontWeight: 400,
    weightLabel: "Regular 400",
    specLabel: "22–32px / 1.12 / -0.01em",
    className:
      "font-display font-normal text-[length:var(--fs-h3)] leading-[var(--lh-h3)] tracking-[var(--ls-h3)]",
  },
  body: {
    key: "body",
    label: "Body",
    sample: "Consistency is the quiet luxury of a brand system.",
    family: "body",
    fontSize: "1rem",
    lineHeight: "1.6",
    letterSpacing: "0em",
    fontWeight: 400,
    weightLabel: "Regular 400",
    specLabel: "16px / 1.6 / 0em",
    className:
      "font-body font-normal text-[length:var(--fs-body)] leading-[var(--lh-body)] tracking-[var(--ls-body)]",
  },
  small: {
    key: "small",
    label: "Small",
    sample: "Captions, meta, and fine print read here.",
    family: "body",
    fontSize: "0.875rem",
    lineHeight: "1.5",
    letterSpacing: "0em",
    fontWeight: 400,
    weightLabel: "Regular 400",
    specLabel: "14px / 1.5 / 0em",
    className:
      "font-body font-normal text-[length:var(--fs-small)] leading-[var(--lh-small)] tracking-[var(--ls-small)]",
  },
  eyebrow: {
    key: "eyebrow",
    label: "Eyebrow / Label",
    sample: "Section Label",
    family: "body",
    fontSize: "0.6875rem",
    lineHeight: "1",
    letterSpacing: "0.28em",
    fontWeight: 800,
    weightLabel: "Extrabold 800",
    specLabel: "11px / 1 / 0.28em / uppercase",
    className:
      "font-body font-extrabold uppercase text-[length:var(--fs-eyebrow)] leading-[var(--lh-eyebrow)] tracking-[var(--ls-eyebrow)]",
  },
};

export const ornament = {
  star: "✦",
  note: "The four-pointed star is the only decorative ornament permitted. It marks eyebrows, list markers, and dividers. No other decorative icons — functional icons (lucide-react) are fine.",
} as const;

export const texture = {
  grainAlpha: 0.11,
  hairlineOpacity: 0.12,
  goldAura: "radial-gradient(circle at 50% 0%, rgba(166,124,61,0.08), transparent 60%)",
  cardShadow: "0 32px 64px -20px rgba(0,0,0,0.55)",
} as const;

export const motion = {
  easing: { value: "cubic-bezier(0.22, 1, 0.36, 1)", css: "--ease", label: "Signature ease" },
  duration: {
    fast: { value: "0.45s", css: "--dur-fast" },
    slow: { value: "0.7s", css: "--dur-slow" },
  },
  button: {
    label: "Signature button",
    description:
      "Gold pill with a circular ink chip holding an arrow. On hover, the ink circle floods the pill (scale ~12), the chip inverts to gold, and the arrow rotates 45°. Transform and color only — never layout.",
    chipScale: 12,
    arrowRotate: "45deg",
  },
} as const;

export const layout = {
  maxWidth: "1480px",
  gutterX: "1.5rem",
  gutterXMd: "3rem",
  radiusPill: "999px",
  radiusCard: "1.25rem",
} as const;

export const focusRing = {
  width: "2px",
  color: colors.gold.value,
  offset: "4px",
} as const;

export const navSections = [
  { id: "cover", label: "Cover" },
  { id: "logo", label: "Logo" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "ornament", label: "Ornament & Texture" },
  { id: "components", label: "Components" },
  { id: "voice", label: "Voice & Copy" },
  { id: "motion", label: "Motion" },
  { id: "assets", label: "Assets" },
] as const;
