import { CopyButton } from "./CopyButton";

export function ColorSwatchCard({
  label,
  value,
  cssVar,
  usage,
  swatchText,
}: {
  label: string;
  value: string;
  cssVar: string;
  usage: string;
  swatchText: "ink" | "paper";
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper-deep">
      <div className="flex h-28 items-end p-4" style={{ background: value }}>
        <span
          className={`font-body text-[11px] font-extrabold uppercase tracking-[0.2em] ${
            swatchText === "paper" ? "text-paper" : "text-ink"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <code className="font-body text-sm font-semibold text-ink">{value}</code>
          <CopyButton value={value} label="Copy" />
        </div>
        <p className="font-body text-xs text-mut">{cssVar}</p>
        <p className="text-xs leading-relaxed text-mut">{usage}</p>
      </div>
    </div>
  );
}
