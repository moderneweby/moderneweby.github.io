import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-terracotta text-[#FDF6ED] hover:bg-terracotta-dark hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(181,83,47,0.65)]",
  outline: "border border-cream/40 text-cream hover:bg-cream hover:text-leska-deep hover:-translate-y-0.5",
  dark: "bg-leska text-cream hover:bg-leska-deep hover:-translate-y-0.5",
  light: "bg-cream text-leska-ink hover:bg-white hover:-translate-y-0.5",
};

function classes(variant, extra) {
  return `inline-flex cursor-pointer select-none items-center justify-center gap-2.5 rounded-full px-7 h-12 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 active:scale-[0.97] ${VARIANTS[variant]} ${extra || ""}`;
}

export function BtnLink({ to, variant = "primary", className = "", children, ...props }) {
  return (
    <Link to={to} className={classes(variant, className)} {...props}>
      {children}
    </Link>
  );
}

export function BtnButton({ variant = "primary", className = "", children, ...props }) {
  return (
    <button type="button" className={classes(variant, className)} {...props}>
      {children}
    </button>
  );
}
