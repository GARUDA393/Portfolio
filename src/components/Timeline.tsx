export function Timeline({ items }: { items: readonly { year: string; title: string; detail: string }[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-5">
      {items.map((item) => (
        <article key={item.year} className="group border-t border-white/10 pt-5">
          <div className="mono text-sm text-white/35">{item.year}</div>
          <h3 className="mt-10 text-xl font-medium">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/45">{item.detail}</p>
          <div className="mt-10 h-2 w-2 rounded-full bg-[var(--accent)] opacity-60 transition group-hover:scale-150" />
        </article>
      ))}
    </div>
  );
}
