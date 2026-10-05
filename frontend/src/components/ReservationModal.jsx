import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Check, Loader2, X } from "lucide-react";
import { useUI } from "../context/ui";
import { EASE } from "./Reveal";

const TIMES = ["11:00", "12:00", "13:00", "14:00", "15:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ReservationModal() {
  const { open, closeReservation } = useUI();
  const [status, setStatus] = useState("idle");
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    if (open) {
      setStatus("idle");
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeReservation();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeReservation]);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const fd = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch(`${API}/rezervacie`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meno: fd.meno,
          telefon: fd.telefon,
          datum: fd.datum,
          cas: fd.cas,
          hostia: Number(fd.hostia),
          poznamka: fd.poznamka || "",
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRefCode("SP-" + (data._id || data.id || "").slice(-6).toUpperCase());
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            data-testid="reservation-modal-backdrop"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeReservation}
          />
          <motion.div
            data-testid="reservation-modal"
            className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-smotana p-7 sm:p-9 shadow-2xl"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button
              type="button"
              data-testid="reservation-modal-close"
              aria-label="Zavrieť rezerváciu"
              onClick={closeReservation}
              className="absolute right-4 top-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-leska-ink/60 transition-colors hover:bg-leska-ink/5 hover:text-leska-ink"
            >
              <X size={19} />
            </button>

            {status === "done" ? (
              <div data-testid="reservation-success" className="py-6 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 ring-2 ring-terracotta/40"
                >
                  <Check size={30} className="text-terracotta" />
                </motion.div>
                <h3 className="font-serif text-3xl text-leska-ink">Miesto je vaše</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-leska-ink/65">
                  Rezerváciu sme zapísali do našej rezervačnej knihy. Potvrdenie vám príde SMS-kou ešte dnes.
                </p>
                <p className="mt-5 inline-block rounded-full bg-cream/5 px-5 py-2 font-mono text-sm text-leska-ink/70">
                  Číslo rezervácie: {refCode}
                </p>
                <button
                  type="button"
                  data-testid="reservation-success-close"
                  onClick={closeReservation}
                  className="mt-6 cursor-pointer text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-terracotta underline-offset-4 hover:underline"
                >
                  Späť na web
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                    <Calendar size={18} />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-leska-ink">Rezervácia stola</h3>
                    <p className="text-xs text-leska-ink/55">Ozveme sa, ak by sa niečo klopýtalo.</p>
                  </div>
                </div>
                <form data-testid="reservation-form" onSubmit={submit} className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="label" htmlFor="res-meno">Meno a priezvisko</label>
                    <input id="res-meno" name="meno" data-testid="reservation-input-name" required placeholder="Anna Kováčová" className="field" />
                  </div>
                  <div>
                    <label className="label" htmlFor="res-tel">Telefón</label>
                    <input id="res-tel" name="telefon" data-testid="reservation-input-phone" required type="tel" placeholder="0905 123 456" className="field" />
                  </div>
                  <div>
                    <label className="label" htmlFor="res-hostia">Počet osôb</label>
                    <input id="res-hostia" name="hostia" data-testid="reservation-input-guests" required type="number" min="1" max="8" defaultValue="2" className="field" />
                  </div>
                  <div>
                    <label className="label" htmlFor="res-datum">Dátum</label>
                    <input id="res-datum" name="datum" data-testid="reservation-input-date" required type="date" className="field" />
                  </div>
                  <div>
                    <label className="label" htmlFor="res-cas">Čas</label>
                    <select id="res-cas" name="cas" data-testid="reservation-input-time" className="field" defaultValue="18:00">
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="label" htmlFor="res-poznamka">Poznámka (oslava, detská stolička…)</label>
                    <input id="res-poznamka" name="poznamka" data-testid="reservation-input-note" placeholder="Napíšte nám, čo potrebujete" className="field" />
                  </div>
                  {status === "error" && (
                    <p data-testid="reservation-error" className="col-span-2 rounded-xl bg-terracotta/10 px-4 py-3 text-center text-sm text-terracotta">
                      Niečo sa nepodarilo. Skúste to znova alebo nám zavolajte.
                    </p>
                  )}
                  <button
                    type="submit"
                    data-testid="reservation-submit-button"
                    disabled={status === "sending"}
                    className="col-span-2 mt-1 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-terracotta text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#14110E] transition-all duration-300 hover:bg-terracotta-dark active:scale-[0.98] disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Rezervujeme…
                      </>
                    ) : (
                      "Potvrdiť rezerváciu"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
