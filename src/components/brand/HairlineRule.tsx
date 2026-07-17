export function HairlineRule({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  const colorClass = tone === "paper" ? "text-paper" : "text-ink";
  return (
    <hr
      className={`hairline border-t ${colorClass} ${className}`}
      role="presentation"
    />
  );
}
