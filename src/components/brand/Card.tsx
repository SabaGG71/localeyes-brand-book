export function CardCream({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border hairline bg-paper-deep p-6">
      {eyebrow && (
        <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold-deep">
          {eyebrow}
        </p>
      )}
      <h4 className="font-display text-xl font-normal leading-[1.15]">{title}</h4>
      {children && <div className="mt-3 text-sm leading-relaxed text-mut">{children}</div>}
    </div>
  );
}

export function CardInk({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-card)] bg-ink p-6 text-paper shadow-[var(--card-shadow)]">
      {eyebrow && (
        <p className="mb-2 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      )}
      <h4 className="font-display text-xl font-normal leading-[1.15]">{title}</h4>
      {children && <div className="mt-3 text-sm leading-relaxed text-mut-ink">{children}</div>}
    </div>
  );
}
