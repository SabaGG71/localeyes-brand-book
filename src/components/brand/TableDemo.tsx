const rows = [
  { item: "Wordmark, primary", spec: "IvyPresto Headline / Light", value: "48px" },
  { item: "Monogram, standalone", spec: "IvyPresto Headline / Light", value: "32px" },
  { item: "Clear space", spec: "× cap-height of the mark", value: "1.0×" },
];

export function TableDemo() {
  return (
    <table className="w-full border-collapse font-body text-sm">
      <thead>
        <tr className="border-b hairline text-left">
          <th className="py-2 pr-4 font-extrabold uppercase tracking-[0.15em] text-[11px] text-mut">Item</th>
          <th className="py-2 pr-4 font-extrabold uppercase tracking-[0.15em] text-[11px] text-mut">Spec</th>
          <th className="py-2 font-extrabold uppercase tracking-[0.15em] text-[11px] text-mut text-right">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.item} className="border-b border-ink/10">
            <td className="py-2.5 pr-4 text-ink">{row.item}</td>
            <td className="py-2.5 pr-4 text-mut">{row.spec}</td>
            <td className="py-2.5 text-right font-semibold tabular-nums text-ink">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
