/** Paper mat + thin gold border — the standard frame for photography / artwork. */
export function FramedImage({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`inline-block bg-paper p-3 shadow-[var(--card-shadow)] ${className}`}>
      <div className="flex aspect-[4/5] w-56 items-center justify-center border border-gold/50 bg-gradient-to-br from-paper-deep to-ink/10">
        {label && (
          <span className="font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
