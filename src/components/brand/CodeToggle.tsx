"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CopyButton } from "./CopyButton";

/**
 * Wraps a live demo with a "View code" disclosure showing the exact
 * JSX / Tailwind snippet, plus a one-click copy button.
 */
export function CodeToggle({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <div>{children}</div>
      <div className="mt-4 border-t hairline pt-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-[0.1em] text-mut hover:text-ink transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] cursor-pointer"
        >
          <ChevronDown
            size={14}
            aria-hidden="true"
            className={`transition-transform duration-[var(--dur-fast)] ease-[var(--ease)] ${open ? "rotate-180" : ""}`}
          />
          {open ? "Hide code" : "View code"}
        </button>
        {open && (
          <div id={panelId} className="mt-3 flex items-start gap-2">
            <pre className="flex-1 overflow-x-auto rounded-[var(--radius-card)] bg-ink px-4 py-3 text-xs leading-relaxed text-paper">
              <code>{code}</code>
            </pre>
            <CopyButton value={code} label="Copy" />
          </div>
        )}
      </div>
    </div>
  );
}
