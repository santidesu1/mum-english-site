export function OwlLogo({ className = "h-9 w-9" }: { className?: string }) {
  // Original, simple owl mark (not copied from MU:M assets).
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#FFD400" />
          <stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <path d="M16 20c0-6 5-10 11-10 2 0 4 .4 5 1 1-.6 3-1 5-1 6 0 11 4 11 10v18c0 10-8 18-16 18S16 48 16 38V20z" fill="url(#g)" stroke="#111" strokeWidth="3" />
      <path d="M22 22c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4zm20 0c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="#fff" stroke="#111" strokeWidth="2"/>
      <circle cx="26" cy="22" r="2" fill="#111"/>
      <circle cx="46" cy="22" r="2" fill="#111"/>
      <path d="M32 30l-4 5 4 5 4-5-4-5z" fill="#111"/>
      <path d="M20 20l-6-6" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
      <path d="M44 20l6-6" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
