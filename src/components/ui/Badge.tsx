export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sun px-3 py-1 text-xs font-extrabold text-ink">
      {children}
    </span>
  );
}
