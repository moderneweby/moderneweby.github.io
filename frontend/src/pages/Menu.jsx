import { Flame, Leaf, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BtnButton } from "../components/Btn";
import { MENU, IMG, PHONE_HREF } from "../data/content";
import { useUI } from "../context/ui";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -110 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function Menu() {
  const { openReservation } = useUI();
  return (
    <div>
      <PageHero
        eyebrow="Jedálny lístok"
        title={["Menu, ktoré", { t: "voní drevom.", c: "italic text-zlato" }]}
        sub="Predjedlá, hlavné chody z pece, dezerty a nápoje. Meníme ho štyrikrát do roka, vždy podľa sezóny a toho, čo práve dozrelo."
        img={IMG.ovenPizza}
      />

      <div
        data-testid="menu-category-nav"
        className="sticky top-16 z-30 border-b border-leska-ink/10 bg-smotana/90 backdrop-blur-md md:top-20"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              data-testid={`menu-anchor-${c.id}`}
              onClick={() => scrollTo(c.id)}
              className="cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-leska-ink/65 transition-colors duration-300 hover:bg-cream hover:text-leska-deep"
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {MENU.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-36 border-b border-leska-ink/10 py-14 last:border-0 sm:py-20">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <h2 className="font-serif text-3xl tracking-tight text-leska-ink sm:text-4xl">{cat.title}</h2>
                <span className="h-px flex-1 bg-leska-ink/10" />
                <span className="font-serif italic text-lg text-leska-ink/30">0{MENU.indexOf(cat) + 1}</span>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-2">
              {cat.items.map((item, i) => (
                <Reveal key={item.n} delay={Math.min(i * 0.06, 0.3)}>
                  <div data-testid={`menu-item-${cat.id}-${i}`} className="group flex gap-5">
                    {item.img && (
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-leska-ink/10 sm:h-28 sm:w-28 print:hidden">
                        <img
                          src={item.img}
                          alt={item.n}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-serif text-lg leading-snug text-leska-ink sm:text-xl">
                          {item.n}
                          {item.pec && (
                            <span className="ml-2.5 inline-flex translate-y-[-1px] items-center gap-1 rounded-full bg-terracotta/10 px-2.5 py-0.5 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-terracotta transition-colors duration-300 group-hover:bg-terracotta group-hover:text-[#14110E]">
                              <Flame size={11} /> z pece
                            </span>
                          )}
                        </h3>
                        <span className="dotted-leader" />
                        <span className="whitespace-nowrap font-serif text-lg italic text-terracotta">{item.p} €</span>
                      </div>
                      <p className="mt-1.5 text-sm text-leska-ink/55">{item.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap items-center justify-between gap-6 py-14">
          <p className="max-w-md text-sm leading-relaxed text-leska-ink/60">
            <Leaf size={14} className="mr-2 inline text-zlato" />
            Vegetariánske jedlá označujeme priamo v popise. Alergény vám radi povie každý z kuchyne.
          </p>
          <div className="flex flex-wrap items-center gap-4 print:hidden">
            <button
              type="button"
              data-testid="menu-print-button"
              onClick={() => window.print()}
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-leska-ink/25 px-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-leska-ink transition-all duration-300 hover:bg-cream hover:text-leska-deep"
            >
              Vytlačiť lístok
            </button>
            <BtnButton data-testid="menu-reserve-cta" onClick={openReservation}>
              Rezervovať stôl
            </BtnButton>
          </div>
        </div>
      </div>
    </div>
  );
}
