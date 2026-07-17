/**
 * Pure generators that turn tokens.ts into distributable artifacts:
 * a CSS variables file, a Tailwind v4 @theme snippet, and a JSON token
 * file. Used by scripts/generate-tokens.ts (build-time, writes to public/)
 * and by the Assets section (to show the exact snippet on the page).
 */
import { brand, colors, fontFamilies, typeScale, motion, layout, texture } from "./tokens";

export function buildCSSVariables(): string {
  const lines: string[] = [];
  lines.push(`/* Generated from src/brand/tokens.ts — do not edit by hand. */`);
  lines.push(`:root {`);
  lines.push(`  /* Brand: ${brand.name} ${brand.version} */`);
  lines.push(``);
  lines.push(`  /* Colors */`);
  lines.push(`  ${colors.paper.var}: ${colors.paper.value};`);
  lines.push(`  ${colors.paperDeep.var}: ${colors.paperDeep.value};`);
  lines.push(`  ${colors.ink.var}: ${colors.ink.value};`);
  lines.push(`  ${colors.gold.var}: ${colors.gold.value};`);
  lines.push(`  ${colors.goldHover.var}: ${colors.goldHover.value};`);
  lines.push(`  ${colors.goldDeep.var}: ${colors.goldDeep.value};`);
  lines.push(`  ${colors.mut.var}: ${colors.mut.value};`);
  lines.push(`  ${colors.mutOnInk.var}: ${colors.mutOnInk.value};`);
  lines.push(``);
  lines.push(`  /* Fonts (fallback stacks — swap the next/font vars for your own build) */`);
  lines.push(`  ${fontFamilies.display.css}: "IvyPresto Headline", "Fraunces", Georgia, serif;`);
  lines.push(`  ${fontFamilies.body.css}: "Manrope", Arial, sans-serif;`);
  lines.push(``);
  lines.push(`  /* Type scale */`);
  Object.values(typeScale).forEach((style) => {
    lines.push(`  --fs-${kebab(style.key)}: ${style.fontSize};`);
    lines.push(`  --lh-${kebab(style.key)}: ${style.lineHeight};`);
    lines.push(`  --ls-${kebab(style.key)}: ${style.letterSpacing};`);
  });
  lines.push(``);
  lines.push(`  /* Motion */`);
  lines.push(`  ${motion.easing.css}: ${motion.easing.value};`);
  lines.push(`  ${motion.duration.fast.css}: ${motion.duration.fast.value};`);
  lines.push(`  ${motion.duration.slow.css}: ${motion.duration.slow.value};`);
  lines.push(``);
  lines.push(`  /* Layout */`);
  lines.push(`  --max-width: ${layout.maxWidth};`);
  lines.push(`  --gutter-x: ${layout.gutterX};`);
  lines.push(`  --gutter-x-md: ${layout.gutterXMd};`);
  lines.push(`  --radius-pill: ${layout.radiusPill};`);
  lines.push(`  --radius-card: ${layout.radiusCard};`);
  lines.push(``);
  lines.push(`  /* Texture */`);
  lines.push(`  --grain-alpha: ${texture.grainAlpha};`);
  lines.push(`  --hairline-opacity: ${texture.hairlineOpacity};`);
  lines.push(`  --gold-aura: ${texture.goldAura};`);
  lines.push(`  --card-shadow: ${texture.cardShadow};`);
  lines.push(`}`);
  lines.push(``);
  return lines.join("\n");
}

export function buildTailwindSnippet(): string {
  return `/* Tailwind v4 — paste into globals.css, after @import "tailwindcss"; */
@import "./tokens.css";

@theme inline {
  --color-paper: var(${colors.paper.var});
  --color-paper-deep: var(${colors.paperDeep.var});
  --color-ink: var(${colors.ink.var});
  --color-gold: var(${colors.gold.var});
  --color-gold-hover: var(${colors.goldHover.var});
  --color-gold-deep: var(${colors.goldDeep.var});
  --color-mut: var(${colors.mut.var});
  --color-mut-ink: var(${colors.mutOnInk.var});

  --font-display: var(${fontFamilies.display.css});
  --font-body: var(${fontFamilies.body.css});

  --radius-pill: var(--radius-pill);
  --radius-card: var(--radius-card);
}

/* Usage: bg-paper, bg-ink, text-gold, border-gold, font-display, font-body … */
`;
}

export function buildDesignTokensJSON(): string {
  const json = {
    brand,
    colors: Object.fromEntries(
      Object.entries(colors).map(([key, c]) => [key, { value: c.value, cssVariable: c.var, usage: c.usage }])
    ),
    fonts: fontFamilies,
    typeScale: Object.fromEntries(
      Object.entries(typeScale).map(([key, s]) => [
        key,
        {
          fontSize: s.fontSize,
          lineHeight: s.lineHeight,
          letterSpacing: s.letterSpacing,
          fontWeight: s.fontWeight,
          family: s.family,
        },
      ])
    ),
    motion,
    layout,
    texture,
  };
  return JSON.stringify(json, null, 2) + "\n";
}

function kebab(s: string): string {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
