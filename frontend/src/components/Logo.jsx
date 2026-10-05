import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="11" fill="#2F4A3A" />
      <path d="M13 37V26a11 11 0 0 1 22 0v11" fill="none" stroke="#F5EFE6" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 18.5c3.7 4.4 5.7 7 5.7 10.2a5.7 5.7 0 0 1-11.4 0c0-3.2 2-5.8 5.7-10.2z" fill="#B5532F" />
      <path d="M24 25c1.8 2.1 2.7 3.4 2.7 4.9a2.7 2.7 0 0 1-5.4 0c0-1.5.9-2.8 2.7-4.9z" fill="#D4A359" />
    </svg>
  );
}

export default function Logo({ light = true, className = "" }) {
  return (
    <Link to="/" data-testid="logo-home-link" className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className={`font-serif text-xl sm:text-2xl leading-none ${light ? "text-cream" : "text-leska-ink"}`}>
        Soľ <span className="italic text-terracotta-light">&amp;</span> Pec
      </span>
    </Link>
  );
}
