import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BtnButton } from "../components/Btn";
import { ADDRESS, DAILY_NOTE, EMAIL, HOURS, IMG, PHONE, PHONE_HREF } from "../data/content";
import { useUI } from "../context/ui";

export default function Kontakt() {
  const { openReservation } = useUI();
  return (
    <div>
      <PageHero
        eyebrow="Kontakt"
        title={["Nájdite nás", "pri peci."]}
        sub="Zavítajte, zavolajte alebo napíšte. Radi vám stôl pri peci prichystáme."
        img={IMG.interiorCandle}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="card-light p-7">
                <h2 className="font-serif text-2xl text-leska-ink">Kde nás nájdete</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3.5" data-testid="contact-address">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/5 text-terracotta">
                      <MapPin size={17} />
                    </span>
                    <span className="pt-1.5 leading-relaxed text-leska-ink/75">{ADDRESS}</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/5 text-terracotta">
                      <Phone size={17} />
                    </span>
                    <a href={PHONE_HREF} data-testid="contact-phone-link" className="pt-1.5 text-leska-ink/75 transition-colors hover:text-terracotta">
                      {PHONE}
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/5 text-terracotta">
                      <Mail size={17} />
                    </span>
                    <a href={`mailto:${EMAIL}`} data-testid="contact-email-link" className="pt-1.5 text-leska-ink/75 transition-colors hover:text-terracotta">
                      {EMAIL}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-leska-deep p-7 text-cream" data-testid="opening-hours-card">
                <h2 className="font-serif text-2xl">Otváracie hodiny</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {HOURS.map((h) => (
                    <li key={h.d} className="flex items-baseline justify-between gap-3">
                      <span className="text-cream/70">{h.d}</span>
                      <span className="dotted-leader !border-cream/25" />
                      <span className="font-medium text-zlato">{h.t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-cream/10 pt-4 text-xs leading-relaxed text-cream/50">{DAILY_NOTE}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl ring-1 ring-leska-ink/10">
              <iframe
                title="Mapa Soľ & Pec"
                data-testid="contact-map-embed"
                src="https://maps.google.com/maps?q=Hlavn%C3%A9%20n%C3%A1mestie,%20Bratislava&z=16&output=embed"
                className="h-full min-h-[380px] w-full grayscale-[35%] sepia-[18%]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-leska-ink/45">
              Soľ &amp; Pec je fiktívna reštaurácia, mapa je len ukážková.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-terracotta p-8 text-[#14110E] sm:p-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">Stôl pri peci? Radi vám ho necháme.</h2>
              <p className="mt-2 text-sm text-[#14110E]/80">Rezervujte online alebo nám rovno zavolajte.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <BtnButton variant="light" data-testid="contact-reserve-cta" onClick={openReservation}>
                Rezervovať stôl
              </BtnButton>
              <a
                href={PHONE_HREF}
                data-testid="contact-call-cta"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[#14110E]/40 px-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#14110E] hover:text-terracotta"
              >
                <Phone size={15} /> Zavolať
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
