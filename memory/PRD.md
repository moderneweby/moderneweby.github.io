# PRD — Soľ & Pec (fiktívna slovenská reštaurácia)

## Pôvodné zadanie
Moderný web pre fiktívnu slovenskú reštauráciu "Soľ & Pec" (kuchyňa z pece na drevo, rodinné oslavy a malé svadby do 40 ľudí). Jazyk: slovenčina. Štýl: teplý, remeselný; farby tmavozelená #2F4A3A, krémová #F5EFE6, akcent terakota #B5532F; nadpisy Playfair Display, text Inter. 7 stránok (úvod, denné menu, celé menu, eventy a svadby s formulárom, o nás, galéria, kontakt s mapou a otváracími hodinami). Mobilné zobrazenie prioritné s pevnými tlačidlami "Zavolať" a "Rezervovať". Formuláre ukážkové. Kvalitné obrázky z voľných zdrojov.

## Používateľské voľby (potvrdené)
- Formuláre: IBA ukážkové — potvrdenie na obrazovke, nič sa neukláda
- Štruktúra: viacstránkový web (React Router)
- Fiktívna firma pre portfólio — žiadna reálna adresa (mapa = ukážková, Hlavné námestie, Bratislava)

## Architektúra
- Frontend: React 19 (CRA/craco) + Tailwind + framer-motion + lenis (smooth scroll) + lucide-react, react-router-dom v7
- Rozšírený tailwind.config.js: farby leska/leska-deep/leska-ink, smotana, cream, terracotta, zlato; fonty serif (Playfair Display) / sans (Inter)
- Vlastné SVG logo (oblúk pece + plameň) ako komponent aj favicon.svg
- Dáta o menu/hodinách/galérii v src/data/content.js
- Backend (FastAPI + Mongo) zostal v template štáte — web je čisto frontendový (ukážkové formuláre)

## Stránky
1. / — úvod: kinetická hero (maskovaný reveal riadkov, parallax oblúkový obraz plameňa), marquee, filozofia (Oheň/Soľ/Čas), výber z pece, teaser eventov, citácia, CTA
2. /denne-menu — Po–Pi karty s výberom dňa (auto-dnes), polievka + 2 hlavné + dezert, badge "z pece", lunch set info
3. /menu — predjedlá, hlavné jedlá z pece, dezerty, nápoje & víno s cenami, lepkavá kategorová navigácia
4. /eventy-a-svadby — štatistiky, 3 balíčky, nezáväzný dopyt (demo) s referenčným číslom
5. /o-nas — príbeh, proces (Drevo/Kvas/Oheň/Stôl), dodávatelia, mozaika
6. /galeria — filtre (Všetko/Z pece/Interiér/Oslavy), masonry, lightbox s klávesovou obsluhou
7. /kontakt — adresa/telefón/email, otváracie hodiny, vložená Google mapa (ukážková)

## Mobilné priority
- Pevná spodná lišta: Zavolať (tel:) + Rezervovať (modal), safe-area padding
- Fullscreen mobilné menu s animovanými odkazmi
- Rezervačný modal (demo): meno, telefón, dátum, čas, počet osôb, poznámka → úspešná obrazovka s číslom rezervácie

## Stav (2026-02)
- Hotové: všetkých 7 stránok, rezervačný modal, dopytový formulár, lightbox, marquee, parallax, lenis, SVG logo/favicon
- Verifikácia: curl /api/ OK; screenshoty desktop 1440 + mobil 390; prekliky modal, denné menu taby, menu kotvy, event formulár, galéria lightbox, mapa — všetko funkčné, žiadny horizontal overflow
- Poznámka: formuláre sú UKÁŽKOVÉ (nič sa neukladá), mapa aj adresa sú fiktívne/placeholdery

## Backlog
- P2: reálne ukladanie formulárov do Mongo + admin výpis dopytov
- P2: fotogaléria s vlastnými fotkami klienta
- P2: SEO (Open Graph, JSON-LD Restaurant) + sitemap
