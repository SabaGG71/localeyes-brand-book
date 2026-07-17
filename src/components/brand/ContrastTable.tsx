import { contrastPairs } from "@/brand/tokens";

export function ContrastTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse font-body text-sm">
        <thead>
          <tr className="border-b hairline border-ink/15 text-left">
            <th className="py-2 pr-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-mut">Text</th>
            <th className="py-2 pr-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-mut">Background</th>
            <th className="py-2 pr-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-mut">Ratio</th>
            <th className="py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-mut">Note</th>
          </tr>
        </thead>
        <tbody>
          {contrastPairs.map((pair) => (
            <tr key={`${pair.fg}-${pair.bg}`} className="border-b border-ink/10">
              <td className="py-2.5 pr-4 text-ink">{pair.fg}</td>
              <td className="py-2.5 pr-4 text-ink">{pair.bg}</td>
              <td className="py-2.5 pr-4 font-semibold tabular-nums text-ink">{pair.ratio}</td>
              <td className="py-2.5 text-mut">{pair.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
