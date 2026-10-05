import { createContext, useCallback, useContext, useState } from "react";

const Ctx = createContext({ openReservation: () => {} });

export function UIProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openReservation = useCallback(() => setOpen(true), []);
  const closeReservation = useCallback(() => setOpen(false), []);
  return (
    <Ctx.Provider value={{ open, openReservation, closeReservation }}>
      {children}
    </Ctx.Provider>
  );
}

export const useUI = () => useContext(Ctx);
