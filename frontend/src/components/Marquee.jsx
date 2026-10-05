const WORDS = ["Oheň", "Soľ", "Kvas", "Drevo", "Čas", "Rodina"];

function Strip({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 sm:px-10 font-serif italic text-xl sm:text-3xl whitespace-nowrap">{w}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cream/70 inline-block" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ dark = false }) {
  return (
    <div
      data-testid="editorial-marquee"
      className={`marquee relative overflow-hidden py-5 sm:py-7 ${
        dark ? "bg-leska-deep text-cream/80" : "bg-terracotta text-[#14110E]"
      }`}
    >
      <div className="marquee-track flex w-max">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
