"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { ornament } from "@/brand/tokens";

export function CopyButton({
  value,
  label = "Copy",
  tone = "ink",
}: {
  value: string;
  label?: string;
  tone?: "ink" | "paper";
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  const toneClass =
    tone === "paper"
      ? "border-paper/30 text-paper hover:border-paper hover:bg-paper/10"
      : "border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] cursor-pointer ${toneClass}`}
      aria-live="polite"
    >
      {copied ? (
        <>
          <span aria-hidden="true">{ornament.star}</span> Copied
        </>
      ) : (
        <>
          <Copy size={13} aria-hidden="true" /> {label}
        </>
      )}
    </button>
  );
}
