import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { GALLERY, GALLERY_FILTERS, IMG } from "../data/content";
import { EASE } from "../components/Reveal";

export default function Galeria() {
  const [filter, setFilter] = useState("vsetko");
  const [sel, setSel] = useState(null);

  const items = GALLERY.filter((g) => filter === "vsetko" || g.cat === filter);

  useEffect(() => {
    const onKey = (e) => {
      if (sel === null) return;
      if (e.key === "Escape") setSel(null);
      if (e.key === "ArrowRight") setSel((s) => (s === null ? null : (s + 1) % items.length));
      if (e.key === "ArrowLeft") setSel((s) => (s === null ? null : (s - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel, items.length]);

  useEffect(() => {
    if (sel !== null) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
  }, [sel]);

  return (
    <div>
      <PageHero
        eyebrow="Galéria"
        title={["Kúsok z", "nášho ohňa."]}
        sub="Oheň, múka, klenby a sviečky. Takto vyzerá Soľ & Pec, keď si myslíte, že sa nikto nepozerá."
        img={IMG.interiorArch}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap gap-2" data-testid="gallery-filters">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.k}
              type="button"
              data-testid={`gallery-filter-${f.k}`}
              onClick={() => setFilter(f.k)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === f.k
                  ? "bg-leska text-cream"
                  : "text-leska-ink/65 ring-1 ring-leska-ink/15 hover:text-leska-ink hover:ring-leska-ink/30"
              }`}
            >
              {f.l}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 [column-fill:_balance]">
          {items.map((g, i) => (
            <Reveal key={g.t} delay={Math.min(i * 0.05, 0.3)} className="mb-4 break-inside-avoid">
              <button
                type="button"
                data-testid={`gallery-item-${i}`}
                onClick={() => setSel(i)}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl ring-1 ring-leska-ink/10"
              >
                <img
                  src={g.src}
                  alt={g.t}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-leska-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-serif text-lg text-cream">{g.t}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {sel !== null && items[sel] && (
          <motion.div
            data-testid="lightbox"
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-leska-ink/95 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSel(null)}
          >
            <button
              type="button"
              data-testid="lightbox-close"
              aria-label="Zavrieť galériu"
              onClick={() => setSel(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-cream/80 ring-1 ring-cream/25 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              data-testid="lightbox-prev"
              aria-label="Predchádzajúca fotografia"
              onClick={(e) => {
                e.stopPropagation();
                setSel((s) => (s - 1 + items.length) % items.length);
              }}
              className="absolute left-3 sm:left-6 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-cream/80 ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              data-testid="lightbox-next"
              aria-label="Ďalšia fotografia"
              onClick={(e) => {
                e.stopPropagation();
                setSel((s) => (s + 1) % items.length);
              }}
              className="absolute right-3 sm:right-6 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-cream/80 ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              <ChevronRight size={20} />
            </button>
            <motion.img
              key={items[sel].src}
              src={items[sel].src}
              alt={items[sel].t}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="mt-5 font-serif text-lg italic text-cream/80" data-testid="lightbox-caption">
              {items[sel].t}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
