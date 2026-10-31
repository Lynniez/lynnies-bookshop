export function Heart({ filled = false, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
      fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M12 21C5 15.5 2.5 12 2.5 8.5A5 5 0 0 1 12 6.2a5 5 0 0 1 9.5 2.3C21.5 12 19 15.5 12 21Z" />
    </svg>
  );
}

export function Star({ className = "", style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="50,6 62,36 94,38 69,58 78,90 50,72 22,90 31,58 6,38 38,36"
        fill="currentColor" stroke="#fff" strokeWidth="7" strokeLinejoin="round" />
    </svg>
  );
}

export function Wave({ className = "" }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 38C220 90 440 -10 720 34S1190 84 1440 28V80H0Z" fill="currentColor" />
    </svg>
  );
}
