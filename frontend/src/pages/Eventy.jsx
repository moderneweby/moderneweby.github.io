import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Check, Loader2, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMG, PHONE, PHONE_HREF } from "../data/content";

const STATS = [
  { n: "40", l: "hostí maximálne" },
  { n: "4", l: "chodové menu z pece" },
  { n: "48 h", l: "na kvas kvásku" },
];

const PACKAGES = [
  {
    n: "Rodinná oslava",
    cap: "do 20 hostí",
    price: "od 29 € / os.",
    points: ["Dlhý spoločný stôl pri peci", "Výber z troch hlavných chodov", "Domáce koláče k káve"],
  },
  {
    n: "Malá svadba",
    cap: "do 40 hostí",
    price: "od 49 € / os.",
    points: ["Uvítací drink a pohostenie", "Štyri chody priamo z pece", "Svadobný koláč z našej pekárne", "Dekorácia stola a sviečky"],
  },
  {
    n: "Firemná večera",
    cap: "na mieru",
    price: "podľa dohody",
    points: ["Celý priestor len pre vás", "Vlastný program a hudba", "Pečené prasiatko z pece"],
  },
];

const TYPES = ["Svadba", "Rodinná oslava", "Firemné podujatie", "Iné podujatie"];
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Eventy() {
  const [status, setStatus] = useState("idle");
  const [refCode, setRefCode] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const fd = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch(`${API}/dopyty`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meno: fd.meno,
          email: fd.email,
          telefon: fd.telefon,
          typ: fd.typ,
          datum: fd.datum,
          hostia: Number(fd.hostia),
          sprava: fd.sprava || "",
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRefCode("EP-" + (data._id || data.id || "").slice(-6).toUpperCase());
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Eventy & svadby"
        title={["Sviatok", "pri žiacej peci."]}
        sub="Rodinné oslavy a malé svadby do 40 hostí. Bez hotelovej chladnosti, s kuchyňou, ktorá vonia drevom."
        img={IMG.weddingGarden}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="card-light p-7 text-center">
                <p className="font-serif text-4xl text-terracotta sm:text-5xl">{s.n}</p>
                <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-leska-ink/55">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="max-w-xl font-serif text-3xl leading-tight tracking-tight text-leska-ink sm:text-4xl">
              Tri spôsoby, ako <span className="italic text-terracotta">oslaviť pri ohni</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="h-full">
                <div
                  data-testid={`event-package-${i}`}
                  className={`group flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                    i === 1
                      ? "bg-leska-deep text-cream shadow-[0_30px_60px_-30px_rgba(26,38,32,0.6)]"
                      : "card-light"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl">{p.n}</h3>
                      <p className={`mt-1 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${i === 1 ? "text-zlato" : "text-terracotta"}`}>
                        <Users size={13} /> {p.cap}
                      </p>
                    </div>
                    {i === 1 && (
                      <span className="rounded-full bg-terracotta px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#14110E]">
                        Najobľúbenejšie
                      </span>
                    )}
                  </div>
                  <p className={`mt-5 font-serif text-2xl italic ${i === 1 ? "text-zlato" : "text-terracotta"}`}>{p.price}</p>
                  <ul className={`mt-6 flex-1 space-y-3 text-sm ${i === 1 ? "text-cream/75" : "text-leska-ink/65"}`}>
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${i === 1 ? "bg-zlato" : "bg-terracotta"}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOPYTOVÝ FORMULÁR */}
      <section className="bg-leska-deep py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-zlato">Nezáväzný dopyt</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Porozprávajte nám <span className="italic text-zlato">o svojom sviatku</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/70">
              Vyplňte dopyt a do 48 hodín sa vám ozveme s návrhom menu a termínom. Alebo rovno zavolajte, pec vždy
              radi ukážeme.
            </p>
            <div className="relative mt-10 hidden lg:block">
              <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl ring-1 ring-cream/15">
                <img src={IMG.weddingLong} alt="Slávnostne prestretý stôl" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <a
                href={PHONE_HREF}
                data-testid="event-call-button"
                className="absolute -bottom-5 right-6 inline-flex h-12 items-center gap-2 rounded-full bg-terracotta px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#14110E] transition-colors hover:bg-terracotta-dark"
              >
                {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-smotana p-7 text-leska-ink sm:p-9">
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="ok"
                    data-testid="event-form-success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 ring-2 ring-terracotta/40">
                      <Check size={30} className="text-terracotta" />
                    </div>
                    <h3 className="font-serif text-3xl">Dopyt letí k peci</h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-leska-ink/65">
                      Ďakujeme! Dopyt máme zapísaný a do 48 hodín sa vám ozveme s návrhom oslavy.
                    </p>
                    <p className="mt-5 inline-block rounded-full bg-cream/5 px-5 py-2 font-mono text-sm text-leska-ink/70">
                      Číslo dopytu: {refCode}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    data-testid="event-form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <label className="label" htmlFor="ev-meno">Meno a priezvisko</label>
                      <input id="ev-meno" name="meno" data-testid="event-input-name" required placeholder="Peter a Jana" className="field" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="label" htmlFor="ev-typ">Typ podujatia</label>
                      <select id="ev-typ" name="typ" data-testid="event-input-type" className="field">
                        {TYPES.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label" htmlFor="ev-email">E-mail</label>
                      <input id="ev-email" name="email" data-testid="event-input-email" required type="email" placeholder="peter@priklad.sk" className="field" />
                    </div>
                    <div>
                      <label className="label" htmlFor="ev-tel">Telefón</label>
                      <input id="ev-tel" name="telefon" data-testid="event-input-phone" required type="tel" placeholder="0905 123 456" className="field" />
                    </div>
                    <div>
                      <label className="label" htmlFor="ev-datum">Približný dátum</label>
                      <input id="ev-datum" name="datum" data-testid="event-input-date" required type="date" className="field" />
                    </div>
                    <div>
                      <label className="label" htmlFor="ev-hostia">Počet hostí (max. 40)</label>
                      <input id="ev-hostia" name="hostia" data-testid="event-input-guests" required type="number" min="6" max="40" defaultValue="30" className="field" />
                    </div>
                    <div className="col-span-2">
                      <label className="label" htmlFor="ev-sprava">O oslave v skratke</label>
                      <textarea id="ev-sprava" name="sprava" data-testid="event-input-message" rows="4" placeholder="Čo oslavujete, čo máte radi a čo vôbec nie…" className="field h-auto py-3" />
                    </div>
                    {status === "error" && (
                      <p data-testid="event-form-error" className="col-span-2 rounded-xl bg-terracotta/10 px-4 py-3 text-center text-sm text-terracotta">
                        Niečo sa nepodarilo. Skúste to znova alebo nám zavolajte.
                      </p>
                    )}
                    <button
                      type="submit"
                      data-testid="event-form-submit"
                      disabled={status === "sending"}
                      className="col-span-2 mt-1 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-terracotta text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#14110E] transition-all duration-300 hover:bg-terracotta-dark active:scale-[0.98] disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Odosielame…
                        </>
                      ) : (
                        <>
                          <CalendarCheck size={16} /> Odoslať nezáväzný dopyt
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
