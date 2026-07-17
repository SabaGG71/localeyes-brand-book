/** Film-grain overlay. Parent must be `relative` (or `isolate`). */
export function Grain({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`grain absolute inset-0 ${className}`} />;
}
