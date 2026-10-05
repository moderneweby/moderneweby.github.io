import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 32, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLines({ lines, className = "", lineClass = "", delay = 0, stagger = 0.13, animate = true }) {
  return (
    <span className={`block ${className}`}>
      {lines.map((l, i) => {
        const text = typeof l === "string" ? l : l.t;
        const extra = typeof l === "string" ? "" : l.c || "";
        return (
          <span key={i} className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
            <motion.span
              className={`block will-change-transform ${lineClass} ${extra}`}
              initial={{ y: animate ? "112%" : "0%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
