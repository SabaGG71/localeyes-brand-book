import { Check, X } from "lucide-react";

export function DoDontCard({
  kind,
  title,
  description,
  children,
}: {
  kind: "do" | "dont";
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  const isDo = kind === "do";
  return (
    <div
      className={`rounded-[var(--radius-card)] border p-6 ${
        isDo ? "border-gold/40 bg-paper-deep" : "border-ink/15 bg-paper-deep opacity-70"
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isDo ? "bg-gold text-ink" : "bg-ink/20 text-ink"
          }`}
          aria-hidden="true"
        >
          {isDo ? <Check size={14} /> : <X size={14} />}
        </span>
        <p className="font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">
          {isDo ? "Do" : "Don't"}
        </p>
      </div>
      {children && <div className="mb-4 flex min-h-24 items-center justify-center">{children}</div>}
      <h4 className="font-display text-lg font-normal">{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-mut">{description}</p>
    </div>
  );
}
