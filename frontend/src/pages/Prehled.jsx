import { useEffect, useState } from "react";
import { CalendarCheck, Inbox, Loader2, RefreshCw, UtensilsCrossed } from "lucide-react";
import { Reveal } from "../components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TABS = [
  { k: "rezervacie", l: "Rezervácie" },
  { k: "dopyty", l: "Dopyty na eventy" },
];

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("sk-SK", { day: "numeric", month: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
};

function RezRow({ r }) {
  return (
    <div data-testid="prehled-item" className="card-light flex flex-wrap items-baseline gap-x-6 gap-y-1 p-5">
      <p className="font-serif text-lg text-leska-ink">{r.meno}</p>
      <span className="text-sm text-leska-ink/60">{r.telefon}</span>
      <span className="ml-auto text-sm font-medium text-terracotta">{fmtDate(r.datum)} · {r.cas}</span>
      <span className="rounded-full bg-leska/10 px-3 py-0.5 text-xs font-semibold text-leska">{r.hostia} os.</span>
      {r.poznamka && <p className="w-full text-sm text-leska-ink/55">„{r.poznamka}“</p>}
    </div>
  );
}

function DopRow({ d }) {
  return (
    <div data-testid="prehled-item" className="card-light flex flex-wrap items-baseline gap-x-6 gap-y-1 p-5">
      <p className="font-serif text-lg text-leska-ink">{d.meno}</p>
      <span className="rounded-full bg-terracotta/10 px-3 py-0.5 text-xs font-semibold text-terracotta">{d.typ}</span>
      <span className="ml-auto text-sm font-medium text-terracotta">{fmtDate(d.datum)}</span>
      <span className="rounded-full bg-leska/10 px-3 py-0.5 text-xs font-semibold text-leska">{d.hostia} os.</span>
      <p className="w-full text-sm text-leska-ink/60">{d.email} · {d.telefon}</p>
      {d.sprava && <p className="w-full text-sm text-leska-ink/55">„{d.sprava}“</p>}
    </div>
  );
}

export default function Prehled() {
  const [tab, setTab] = useState("rezervacie");
  const [rez, setRez] = useState(null);
  const [dop, setDop] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setErr(false);
    try {
      const [r, d] = await Promise.all([
        fetch(`${API}/rezervacie`).then((x) => (x.ok ? x.json() : Promise.reject(new Error()))),
        fetch(`${API}/dopyty`).then((x) => (x.ok ? x.json() : Promise.reject(new Error()))),
      ]);
      setRez(r);
      setDop(d);
    } catch {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const items = tab === "rezervacie" ? rez : dop;

  return (
    <div className="min-h-screen bg-smotana">
      <section className="bg-leska-deep py-24 text-cream">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal delay={0.1}>
            <span className="eyebrow text-zlato">
              <span className="h-px w-8 bg-zlato/70" /> Interný prehľad
            </span>
            <h1 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">Rezervačná kniha</h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70">
              Všetky rezervácie stolov a dopyty na eventy z webu. Stránka nie je v navigácii — nájdete ju na
              adrese /prehled.
            </p>
            <button
              type="button"
              data-testid="prehled-refresh-button"
              onClick={load}
              className="mt-6 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cream/30 px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-cream hover:text-leska-deep"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />} Načítať znova
            </button>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap gap-2" data-testid="prehled-tabs">
          {TABS.map((t) => {
            const count = t.k === "rezervacie" ? (rez || []).length : (dop || []).length;
            return (
              <button
                key={t.k}
                type="button"
                data-testid={`prehled-tab-${t.k}`}
                onClick={() => setTab(t.k)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  tab === t.k ? "bg-leska text-cream" : "text-leska-ink/65 ring-1 ring-leska-ink/15 hover:text-leska-ink"
                }`}
              >
                {t.l} <span className="ml-1 text-xs opacity-70">({loading ? "…" : count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-3" data-testid="prehled-list">
          {err ? (
            <div className="card-light p-8 text-center">
              <p className="font-serif text-xl text-leska-ink">Server neodpovedá</p>
              <p className="mt-2 text-sm text-leska-ink/60">Skúste načítať znova o chvíľu.</p>
            </div>
          ) : loading ? (
            <div className="card-light flex items-center justify-center gap-3 p-10 text-leska-ink/60">
              <Loader2 size={18} className="animate-spin" /> Načítavam…
            </div>
          ) : !items || items.length === 0 ? (
            <div className="card-light p-10 text-center" data-testid="prehled-empty">
              {tab === "rezervacie" ? (
                <CalendarCheck size={28} className="mx-auto text-terracotta" />
              ) : (
                <Inbox size={28} className="mx-auto text-terracotta" />
              )}
              <p className="mt-4 font-serif text-xl text-leska-ink">
                {tab === "rezervacie" ? "Zatiaľ žiadne rezervácie" : "Zatiaľ žiadne dopyty"}
              </p>
              <p className="mt-2 text-sm text-leska-ink/60">
                {tab === "rezervacie"
                  ? "Akonále niekto rezervuje cez web, zobrazí sa tu."
                  : "Akonále príde dopyt zEventy & svadby, zobrazí sa tu."}
              </p>
            </div>
          ) : tab === "rezervacie" ? (
            items.map((r) => <RezRow key={r.id} r={r} />)
          ) : (
            items.map((d) => <DopRow key={d.id} d={d} />)
          )}
        </div>

        <p className="mt-10 flex items-center gap-2 text-xs text-leska-ink/40">
          <UtensilsCrossed size={13} /> Soľ &amp; Pec — interný prehľad, fiktívna reštaurácia pre portfólio.
        </p>
      </section>
    </div>
  );
}
