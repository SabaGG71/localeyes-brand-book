export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold px-3 py-1 font-body text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-deep">
      {children}
    </span>
  );
}
