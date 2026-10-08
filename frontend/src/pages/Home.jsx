import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Flame, Users } from "lucide-react";
import { BtnButton, BtnLink } from "../components/Btn";
import Marquee from "../components/Marquee";
import { MaskLines, Reveal } from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { useUI } from "../context/ui";
import { IMG, PHONE, PHONE_HREF } from "../data/content";

const DISHES = [
  { img: IMG.meatPan, n: "Polovičné rebrá z pece na dreve", p: "18,90", tag: "Z pece" },
  { img: IMG.plateDark, n: "Hovädzí tatarák na kváskovom chlebe", p: "12,50", tag: "Predjedlo" },
  { img: IMG.dessertDark, n: "Čokoládový fondant, slaný karamel", p: "7,20", tag: "Dezert" },
];

const VALUES = [
  { img: IMG.embers, n: "Oheň", t: "Žiadny plyn, žiadna elektrina. Len dub a buk, ktoré horia od rána, a dym, ktorý robí polovicu chuti." },
  { img: IMG.salt, n: "Soľ", t: "Soľ, maslo a poctivá surovina. Ochucujeme s mierou a nikdy nepridávame viac, než treba." },
  { img: IMG.hourglass, n: "Čas", t: "Kvas trvá 48 hodín, rebrá celých šesť. Nemáme rýchle jedlo. Máme jedlo, ktoré si berie čas." },
];

export default function Home() {
  const { openReservation } = useUI();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-leska-deep text-cream">
        <span className="pointer-events-none absolute -bottom-10 -right-6 select-none font-serif italic text-[38vw] leading-none text-cream/[0.04]">
          &amp;
        </span>
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
          <div className="lg:col-span-7">
            <MaskLines
              lines={["Reštaurácia v Bratislave s pecou na drevo"]}
              delay={0.15}
              lineClass="eyebrow text-zlato"
            />
            <h1 className="mt-6 font-serif text-[clamp(3rem,9vw,6.4rem)] leading-[0.98] tracking-tight">
              <MaskLines
                lines={[{ t: "Chuť" }, { t: "z pece" }, { t: "na drevo.", c: "italic text-zlato" }]}
                delay={0.3}
              />
            </h1>
            <MaskLines
              lines={["A dym, ktorý vonia celou ulicou."]}
              delay={0.85}
              className="mt-4 block font-serif text-[clamp(1.2rem,3vw,1.8rem)] italic text-zlato"
            />
            <MaskLines
              lines={["Rodinná reštaurácia, kde sa chlieb miesi rukami, rebrá celý deň dusia na dreve a víno tečie z Malých Karpát."]}
              delay={1.0}
              className="mt-6 block max-w-md text-base leading-relaxed text-cream/70"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <BtnButton data-testid="hero-cta-reserve" onClick={openReservation}>
                Rezervovať stôl <ArrowRight size={16} />
              </BtnButton>
              <BtnLink to="/menu" variant="outline" data-testid="hero-cta-menu">
                Pozrieť menu
              </BtnLink>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream/55"
            >
              <li className="flex items-center gap-2"><Flame size={14} className="text-terracotta-light" /> Dub &amp; buk</li>
              <li className="flex items-center gap-2"><Users size={14} className="text-terracotta-light" /> Oslavy do 40 hostí</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-terracotta-light" /> Denné menu Po–Pi</li>
            </motion.ul>
          </div>
          <motion.div style={{ y }} className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-terracotta/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-3xl ring-1 ring-cream/15">
                <img
                  src={IMG.heroFlame}
                  alt="Oheň v peci na drevo"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="absolute -left-4 bottom-10 rounded-2xl bg-smotana px-5 py-4 text-leska-ink shadow-2xl sm:-left-10">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-terracotta">Dnes v peci</p>
                <p className="mt-1 font-serif text-lg leading-tight">Dubové drevo · 312 °C</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[0.62rem] uppercase tracking-[0.3em] text-cream/50">Posuňte</span>
          <span className="h-10 w-px overflow-hidden bg-cream/15">
            <motion.span
              className="block h-1/2 w-full bg-terracotta"
              animate={{ y: ["-100%", "220%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </section>

      <Marquee />

      {/* FILOZOFIA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-terracotta">Naša filozofia</span>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-leska-ink sm:text-4xl lg:text-5xl">
                Tri prísady, ktoré <span className="italic text-terracotta">menia chuť</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-leska-ink/65">
                Veríme, že skvelé jedlo nevzniká v rukách šéfkuchára, ale v ohni, v soli a v čase. Presne v
                tomto poradí.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.12} className="h-full">
                <div
                  data-testid={`home-value-card-${i}`}
                  className="card-light group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.n}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-leska-deep/80 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-cream">{v.n}</h3>
                  </div>
                  <p className="p-6 text-sm leading-relaxed text-leska-ink/65">{v.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Z PECE DNES */}
      <section className="bg-leska-deep py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow text-zlato">Z pece dnes</span>
              <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Čo z ohňa práve <span className="italic text-zlato">vyzrelo</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/menu"
                data-testid="home-dishes-all-link"
                className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-cream/80 transition-colors hover:text-zlato"
              >
                Celý lístok <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.12} className="h-full">
                <Link
                  to="/menu"
                  data-testid={`home-dish-card-${i}`}
                  className="group block h-full"
                >
                  <div className="overflow-hidden rounded-3xl ring-1 ring-cream/10">
                    <img
                      src={d.img}
                      alt={d.n}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-terracotta-light">{d.tag}</p>
                      <h3 className="mt-1.5 font-serif text-xl leading-snug">{d.n}</h3>
                    </div>
                    <span className="font-serif text-xl italic text-zlato">{d.p} €</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTY TEASER */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow text-terracotta">Eventy &amp; svadby</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-leska-ink sm:text-4xl lg:text-5xl">
              Malé svadby do 40 hostí. <span className="italic text-terracotta">Veľké v detailoch.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-leska-ink/65">
              Klenbový sál pri žiacej peci, dlhé stoly, sviečky a menu, ktoré upečieme presne pre vašu oslavu.
              Kapacita do 40 hostí je práve toľko, aby ste sa stihli pozdraviť so všetkými.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-leska-ink/75">
              {["Sál pri peci pre 40 hostí", "Menu z dreva, nie z katalógu"].map((li) => (
                <li key={li} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" /> {li}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <BtnLink to="/eventy-a-svadby" variant="dark" data-testid="home-events-cta">
                Nezáväzný dopyt <ArrowRight size={16} />
              </BtnLink>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl ring-1 ring-leska-ink/10">
                <img src={IMG.weddingGarden} alt="Svadobné stoly v záhrade" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-terracotta px-6 py-5 text-[#14110E] shadow-xl sm:-left-8">
                <p className="font-serif text-3xl leading-none">40</p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em]">hostí maximálne</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee dark />

      <Testimonials />

      {/* CTA */}
      <section className="bg-terracotta py-20 text-[#14110E] sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Máte miesto pri našom stole?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#14110E]/80">
              Rezervujte online alebo nám zavolajte. Stôl pri peci sa nájde vždy.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <BtnButton variant="light" data-testid="home-footer-reserve-cta" onClick={openReservation}>
                Rezervovať stôl
              </BtnButton>
              <a
                href={PHONE_HREF}
                data-testid="home-footer-call-cta"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[#14110E]/40 px-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#14110E] hover:text-terracotta"
              >
                {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
