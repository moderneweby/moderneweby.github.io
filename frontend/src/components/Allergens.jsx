export function Allergens({ list, testId }) {
  if (!list?.length) return null;
  return (
    <span
      data-testid={testId}
      className="inline-flex items-baseline gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-leska-ink/40"
    >
      <span>Alergény</span>
      <span className="tracking-[0.08em] text-leska-ink/60">{list.join(", ")}</span>
    </span>
  );
}
