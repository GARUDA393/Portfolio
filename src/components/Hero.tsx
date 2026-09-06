"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/data/profile";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-meta", { opacity: 0, y: 18, stagger: .08, duration: .7 })
        .from(".hero-title span", { opacity: 0, yPercent: 110, stagger: .1, duration: 1 }, "-=.35")
        .from(".hero-copy", { opacity: 0, y: 18, duration: .7 }, "-=.5")
        .from(".hero-cta", { opacity: 0, y: 15, duration: .6 }, "-=.35")
        .from(".hero-node", { opacity: 0, scale: .6, stagger: .06, duration: .5 }, "-=.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-32 md:px-12 lg:px-20">
      <div className="grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>
          <div className="hero-meta eyebrow mb-6">System initialization · Bengaluru · Building</div>
          <h1 className="display max-w-5xl overflow-hidden text-[clamp(4rem,10vw,9.5rem)] font-semibold">
            <span className="block overflow-hidden">I ENGINEER</span>
            <span className="block overflow-hidden text-white/35">WHAT SEEMS</span>
            <span className="block overflow-hidden">COMPLEX.</span>
          </h1>
          <p className="hero-copy mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
            {profile.subheadline}
          </p>
          <a href="#the-lab" className="hero-cta mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white hover:text-black">
            Explore the lab ↓
          </a>
        </div>

        <div className="relative hidden aspect-square lg:block">
          {profile.domains.map((domain, i) => {
            const positions = [
              "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "right-4 top-16",
              "left-5 bottom-20",
              "right-10 bottom-8"
            ];
            return (
              <div key={domain} className={`hero-node absolute ${positions[i]} rounded-full border border-white/10 bg-white/[.035] px-4 py-2 backdrop-blur`}>
                <span className="mono text-[10px] tracking-[.14em] text-white/60">{domain}</span>
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10 rotate-[18deg]" />
          <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10 -rotate-[32deg]" />
        </div>
      </div>
    </section>
  );
}
