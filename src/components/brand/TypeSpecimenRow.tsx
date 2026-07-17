import type { TypeStyle } from "@/brand/tokens";
import { fontFamilies } from "@/brand/tokens";
import { CopyButton } from "./CopyButton";

export function TypeSpecimenRow({ style }: { style: TypeStyle }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b hairline border-ink/10 py-8 md:grid-cols-[1fr_auto]">
      <p className={style.className}>{style.sample}</p>
      <div className="flex flex-col gap-2 md:w-56 md:items-end md:text-right">
        <p className="font-body text-sm font-semibold text-ink">{style.label}</p>
        <p className="font-body text-xs text-mut">{fontFamilies[style.family].label} · {style.weightLabel}</p>
        <p className="font-body text-xs tabular-nums text-mut">{style.specLabel}</p>
        <CopyButton value={style.className} label="Copy classes" />
      </div>
    </div>
  );
}
