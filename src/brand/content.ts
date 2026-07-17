/** Typed content for the brand book — copy, principles, do/don't examples. */

export const voicePrinciples = [
  {
    title: "Confident",
    description: "State the fact. Skip the hedge. We know what we're offering and we say it plainly.",
  },
  {
    title: "Warm",
    description: "Editorial, not corporate. Write like a person who respects the reader's time and intelligence.",
  },
  {
    title: "Declarative",
    description: "Short sentences. Full stops. No exclamation marks — conviction doesn't need volume.",
  },
] as const;

export const voiceExamples = [
  {
    do: "The collection ships in October.",
    dont: "We're SO excited to announce that the collection is shipping in October!!",
  },
  {
    do: "Built for daily use. Priced for it too.",
    dont: "Our amazing product was carefully crafted to be used every single day, and it's affordable!",
  },
  {
    do: "Returns are free within 30 days.",
    dont: "Don't worry — if you're not 100% satisfied, we've got you covered with our hassle-free return policy!",
  },
] as const;

export const logoClearSpace = {
  rule: "Clear space equals the cap-height of the wordmark on every side. Nothing — text, imagery, edge of frame — enters that space.",
  minSizeDigital: "120px wide",
  minSizePrint: "25mm wide",
  minSizeMonogram: "24px / 6mm",
} as const;

export const logoDonts = [
  { title: "Don't recolor", description: "The mark is set in ink or paper only. Never gold, never a photo fill." },
  { title: "Don't stretch", description: "Scale proportionally. No independent width/height adjustment." },
  { title: "Don't add effects", description: "No drop shadows, outlines, gradients, or bevels on the wordmark." },
] as const;
