import { Grain } from "./Grain";
import { GoldAura } from "./GoldAura";

export function Section({
  id,
  tone = "paper",
  grain = false,
  aura = false,
  className = "",
  children,
}: {
  id: string;
  tone?: "paper" | "paper-deep" | "ink" | "ink-gradient";
  grain?: boolean;
  aura?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const bg =
    tone === "ink-gradient"
      ? "bg-hero-gradient text-paper"
      : tone === "ink"
        ? "bg-ink text-paper"
        : tone === "paper-deep"
          ? "bg-paper-deep text-ink"
          : "bg-paper text-ink";

  return (
    <section
      id={id}
      className={`relative isolate scroll-mt-24 overflow-hidden ${bg} ${className}`}
    >
      {aura && <GoldAura />}
      {grain && <Grain />}
      <div className="relative mx-auto max-w-[1480px] px-6 py-20 md:px-12 md:py-28">
        {children}
      </div>
    </section>
  );
}
