import { Calendar, Phone } from "lucide-react";
import { useUI } from "../context/ui";
import { PHONE_HREF } from "../data/content";

export default function MobileBar() {
  const { openReservation } = useUI();
  return (
    <div
      data-testid="mobile-bottom-bar"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.4)]">
        <a
          href={PHONE_HREF}
          data-testid="mobile-bottom-bar-call-button"
          className="flex h-14 items-center justify-center gap-2 bg-leska-deep text-sm font-semibold tracking-wide text-cream"
        >
          <Phone size={17} /> Zavolať
        </a>
        <button
          type="button"
          data-testid="mobile-bottom-bar-reserve-button"
          onClick={openReservation}
          className="flex h-14 cursor-pointer items-center justify-center gap-2 bg-terracotta text-sm font-semibold tracking-wide text-[#FDF6ED] active:bg-terracotta-dark"
        >
          <Calendar size={17} /> Rezervovať
        </button>
      </div>
    </div>
  );
}
