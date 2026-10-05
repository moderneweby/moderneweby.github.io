import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Phone, Soup, UtensilsCrossed, CakeSlice } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { DAILY_NOTE, DENNE, IMG, PHONE, PHONE_HREF } from "../data/content";

const todayIdx = () => {
  const d = new Date().getDay();
  return d >= 1 && d <= 5 ? d - 1 : -1;
};

export default function DenneMenu() {
  const [active, setActive] = useState(todayIdx() === -1 ? 0 : todayIdx());
  const day = DENNE[active];
  const isToday = todayIdx() === active;

  return (
    <div>
      <PageHero
        eyebrow="Denné menu"
        title={["Obed, ako", "má byť."]}
        sub={DAILY_NOTE + " Vždy s polievkou, hlavným chodom a chlebom z pece, ktorý k obedu pribalíme."}
        img={IMG.breadOven}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap gap-2" data-testid="daily-menu-tabs">
          {DENNE.map((d, i) => (
            <button
              key={d.den}
              type="button"
              data-testid={`day-tab-${d.den.toLowerCase()}`}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                active === i ? "text-leska-deep" : "text-leska-ink/70 hover:text-leska-ink"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="day-pill"
                  className="absolute inset-0 rounded-full bg-cream"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{d.den}</span>
              {i === todayIdx() && (
                <span className="relative ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
              )}
            </button>
          ))}
        </div>

        {isToday && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta" data-testid="daily-menu-today-badge">
            <Clock size={13} /> Dnes {day.den.toLowerCase()} varíme práve toto
          </p>
        )}

        <motion.div
          key={day.den}
          data-testid="daily-menu-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="card-light mt-8 p-7 sm:p-12"
        >
          <div>
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
              <Soup size={14} /> Polievka
            </p>
            <div className="mt-3 flex items-baseline">
              <h2 className="font-serif text-xl sm:text-2xl text-leska-ink">{day.polievka.n}</h2>
              <span className="dotted-leader" />
              <span className="font-serif text-xl italic text-terracotta">{day.polievka.p} €</span>
            </div>
          </div>

          <div className="mt-10">
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
              <UtensilsCrossed size={14} /> Hlavné jedlá
            </p>
            <div className="mt-3 space-y-5">
              {day.hlavne.map((h) => (
                <div key={h.n}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-leska-ink">
                      {h.n}
                      {h.pec && (
                        <span className="ml-2.5 inline-flex translate-y-[-1px] items-center gap-1 rounded-full bg-terracotta/10 px-2.5 py-0.5 align-middle text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-terracotta">
                          <Flame size={11} /> z pece
                        </span>
                      )}
                    </h3>
                    <span className="dotted-leader" />
                    <span className="whitespace-nowrap font-serif text-lg italic text-terracotta">{h.p} €</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-cream/5 p-5">
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zlato">
              <CakeSlice size={14} /> Dezert dňa
            </p>
            <div className="mt-2 flex items-baseline">
              <p className="font-serif text-lg text-leska-ink">{day.dezert.n}</p>
              <span className="dotted-leader" />
              <span className="whitespace-nowrap font-serif text-lg italic text-terracotta">{day.dezert.p} €</span>
            </div>
          </div>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-leska-deep p-7 text-cream">
              <h3 className="font-serif text-xl">Lunch set</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Polievka + ľubovoľný hlavný chod od <span className="font-semibold text-zlato">11,20 €</span>. K obedu
                vždy pribalíme kváskový chlieb z pece a dojednáme si to do 45 minút.
              </p>
            </div>
            <div className="rounded-3xl bg-smotana-dusk p-7">
              <h3 className="font-serif text-xl text-leska-ink">Víkend?</h3>
              <p className="mt-2 text-sm leading-relaxed text-leska-ink/70">
                V sobotu a v nedeľu denné menu nevaríme, pozrite sa na{" "}
                <a href="/menu" data-testid="daily-weekend-menu-link" className="font-semibold text-terracotta underline-offset-4 hover:underline">
                  celý jedálny lístok
                </a>
                . Pre skupiny pripravíme obed na mieru.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl ring-1 ring-leska-ink/10 p-6">
            <p className="text-sm text-leska-ink/70">Obed pre väčšiu skupinu? Zavolajte, stihneme to aj na hodinu.</p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                data-testid="daily-print-button"
                onClick={() => window.print()}
                className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-leska-ink/20 px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-leska-ink transition-all duration-300 hover:bg-cream hover:text-leska-deep print:hidden"
              >
                Vytlačiť menu
              </button>
              <a
                href={PHONE_HREF}
                data-testid="daily-call-button"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-terracotta px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#14110E] transition-all duration-300 hover:bg-terracotta-dark"
              >
                <Phone size={15} /> {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
