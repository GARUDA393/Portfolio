import type { ReactNode } from "react";

export function Chapter({
  number,
  name,
  children,
  className = ""
}: {
  number: string;
  name: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={name.toLowerCase().replaceAll(" ", "-")} className={`relative px-6 py-28 md:px-12 lg:px-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4">
          <span className="mono text-xs text-[var(--muted)]">{number}</span>
          <span className="h-px w-12 bg-[var(--line)]" />
          <span className="eyebrow">{name}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
