/** Soft radial gold aura, for dark ink sections. Parent must be `relative`. */
export function GoldAura({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`gold-aura absolute inset-0 ${className}`} />;
}
