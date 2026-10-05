import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BtnLink } from "../components/Btn";
import { IMG } from "../data/content";

const STEPS = [
  { n: "01", t: "Drevo", d: "Dub a buk z okolitých lesov. Topíme ráno, aby bola pec do obeda poriadne rozohriata." },
  { n: "02", t: "Kvas", d: "Náš kvások sa volá František a má viac ako desať rokov. Chlieb z neho rastie 48 hodín." },
  { n: "03", t: "Oheň", d: "Pec z roku 1928 drží 312 °C. Peče sa v nej chlieb, mäso aj dezerty, každé pri svojom teple." },
  { n: "04", t: "Stôl", d: "Z pece priamo na stôl. Bez výhrievania a bez čakania. Presne takto to chutí najlepšie." },
];

const SUPPLIERS = [
  { n: "Mlyn Kvetoslavov", d: "múka na kváskový chlieb" },
  { n: "Farma u Hrúzov", d: "zelenina a vajcia zo Záhoria" },
  { n: "Vinárstvo Karpatská veža", d: "rizlingy a svätovavrinecké" },
];

export default function ONas() {
  return (
    <div>
      <PageHero
        eyebrow="O nás"
        title={["Rodina, ktorá", "topí pec."]}
        sub="Soľ & Pec je malá reštaurácia s veľkou pecou z roku 1928. Varíme v nej sami: rodičia, deti a jeden večný kvások."
        img={IMG.breadHands}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl ring-1 ring-leska-ink/10">
              <img src={IMG.flourDust} alt="Múka medzi prstami" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow text-terracotta">Náš príbeh</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-leska-ink sm:text-4xl lg:text-5xl">
              Vrátili sme jedlo <span className="italic text-terracotta">k ohňu</span>
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-leska-ink/70">
              <p>
                Kým sme otvorili Soľ &amp; Pec, roky sme si hovorili, že najlepšie jedlo sme jedli u babičky, v
                tehlovej peci, ktorá voňala drevom aj celou kuchyňou. Keď sme po necelom desaťročí hľadania našli
                opustený dom s pecou z roku 1928, vedeli sme, že to má byť naše.
              </p>
              <p>
                Pec sme nenechali schátrať. Chlieb miesime rukami, rebrá celý deň dusíme v dreve a víno berieme z
                Malých Karpát. Nie sme moderní. Sme presní.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl bg-leska-deep p-7 text-cream transition-transform duration-500 hover:-translate-y-1.5">
                <span className="font-serif text-5xl italic text-cream/15 transition-colors duration-500 group-hover:text-terracotta-light/40">
                  {s.n}
                </span>
                <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow text-terracotta">Lokálni dodávatelia</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-leska-ink sm:text-4xl">
              Známe všetkých <span className="italic text-terracotta">menom</span>
            </h2>
            <ul className="mt-8 divide-y divide-leska-ink/10">
              {SUPPLIERS.map((s) => (
                <li key={s.n} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-serif text-lg text-leska-ink">{s.n}</p>
                    <p className="text-sm text-leska-ink/55">{s.d}</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl ring-1 ring-leska-ink/10">
                <img src={IMG.breadFlour} alt="Chlieb posypaný múkou" loading="lazy" className="aspect-[3/4] w-full object-cover" />
              </div>
              <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-leska-ink/10">
                <img src={IMG.cheesecake} alt="Syrník s lieskovcami" loading="lazy" className="aspect-[3/4] w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-terracotta p-8 text-[#14110E] sm:p-12">
            <div>
              <h2 className="max-w-lg font-serif text-2xl sm:text-3xl">Pozrite sa, ako to varíme.</h2>
              <p className="mt-2 text-sm text-[#14110E]/80">Oheň, múka a klenby. Fotky, po ktorých sa vrátite ochutnať.</p>
            </div>
            <BtnLink to="/galeria" variant="light" data-testid="about-gallery-cta">
              Do galérie
            </BtnLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
