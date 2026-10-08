import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    q: "Najlepšie rebrá, aké sme kedy jedli. Oslava päťdesiatky maminej bola ako z filmu: sviečky, klenby a ten dym.",
    a: "Katarína B., rodinná oslava",
  },
  {
    q: "Svadba pre tridsať ľudí a každý chod prišiel rovno z pece. Hostia sa ešte týždeň pýtali na recept na chlieb.",
    a: "Martin a Lucia, svadba",
  },
  {
    q: "Chodíme sem na obedy už rok. Polievka, chlieb a pokoj. Je to miesto, kde sa nikam neponáhľate.",
    a: "Peter H., stály hosť",
  },
];

const INTERVAL = 6000;

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), INTERVAL);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section data-testid="testimonials-section" className="bg-leska-deep py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="relative min-h-[11rem] sm:min-h-[12rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                data-testid={`testimonial-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-2xl italic leading-snug sm:text-4xl sm:leading-snug">„{REVIEWS[i].q}“</p>
                <p className="mt-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  {REVIEWS[i].a}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {REVIEWS.map((_, d) => (
              <button
                key={d}
                type="button"
                aria-label={`Recenzia ${d + 1}`}
                data-testid={`testimonial-dot-${d}`}
                onClick={() => setI(d)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  d === i ? "w-8 bg-terracotta" : "w-1.5 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
