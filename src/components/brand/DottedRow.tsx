export function DottedRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 py-1.5 font-body text-sm">
      <span className="text-ink">{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-b border-dotted border-ink/30 translate-y-[-3px]"
      />
      <span className="font-semibold tabular-nums text-ink">{value}</span>
    </div>
  );
}
