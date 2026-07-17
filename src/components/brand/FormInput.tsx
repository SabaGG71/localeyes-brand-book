export function FormInput({
  label,
  placeholder,
  id,
}: {
  label: string;
  placeholder?: string;
  id: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="border-0 border-b border-ink/30 bg-transparent px-0 py-2 font-body text-sm text-ink placeholder:text-mut focus:border-gold focus:outline-none"
      />
    </div>
  );
}
