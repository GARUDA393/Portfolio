import { profile } from "@/data/profile";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
        <a href="#top" className="mono text-xs tracking-[.22em]">{profile.shortName}</a>
        <div className="hidden gap-6 text-xs text-white/60 md:flex">
          <a href="#evolution" className="transition hover:text-white">Evolution</a>
          <a href="#the-lab" className="transition hover:text-white">Lab</a>
          <a href="#precision" className="transition hover:text-white">Precision</a>
          <a href="#proof" className="transition hover:text-white">Proof</a>
          <a href="#next-mission" className="transition hover:text-white">Contact</a>
        </div>
        <a href="#next-mission" className="rounded-full border border-white/15 px-3 py-1.5 text-xs transition hover:bg-white hover:text-black">
          Let's talk ↗
        </a>
      </nav>
    </header>
  );
}
