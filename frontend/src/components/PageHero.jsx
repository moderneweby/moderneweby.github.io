import { MaskLines, Reveal } from "./Reveal";

export default function PageHero({ eyebrow, title, sub, img, children }) {
  return (
    <section className="relative overflow-hidden bg-leska-deep text-cream">
      {img && (
        <>
          <img
            src={img}
            alt=""
            loading="eager"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-leska-deep/80 via-leska-deep/55 to-leska-deep" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pb-16 pt-32 sm:pb-24 sm:pt-44">
        <Reveal delay={0.1}>
          <span className="eyebrow text-zlato">
            <span className="h-px w-8 bg-zlato/70" />
            {eyebrow}
          </span>
        </Reveal>
        <MaskLines
          lines={title}
          delay={0.2}
          className="mt-5 font-serif text-[clamp(2.4rem,6.5vw,4.8rem)] leading-[1.04] tracking-tight"
        />
        {sub && (
          <Reveal delay={0.45}>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-cream/75">{sub}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
