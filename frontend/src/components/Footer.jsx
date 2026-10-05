import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { ADDRESS, EMAIL, HOURS, NAV, PHONE, PHONE_HREF } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-leska-deep text-cream/75">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            Rodinná reštaurácia s pecou na drevo. Varíme na dubovom a bukovom dreve,
            chlieb miesime ručne a oslavy držíme v malom a peknom.
          </p>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/40">Navigácia</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} data-testid={`footer-link-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="transition-colors hover:text-zlato">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/40">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-terracotta-light" /> {ADDRESS}
            </li>
            <li>
              <a href={PHONE_HREF} data-testid="footer-phone-link" className="flex items-center gap-2.5 transition-colors hover:text-zlato">
                <Phone size={15} className="shrink-0 text-terracotta-light" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} data-testid="footer-email-link" className="flex items-center gap-2.5 transition-colors hover:text-zlato">
                <Mail size={15} className="shrink-0 text-terracotta-light" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/40">Otváracie hodiny</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {HOURS.map((h) => (
              <li key={h.d} className="flex justify-between gap-4">
                <span>{h.d}</span>
                <span className="text-cream">{h.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/40 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} Soľ &amp; Pec. Všetky práva vyhradené.</span>
          <span data-testid="footer-fictional-note">Soľ &amp; Pec je fiktívna reštaurácia, web vznikol pre portfólio.</span>
        </div>
      </div>
    </footer>
  );
}
