"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export function ProjectCard({
  project
}: {
  project: {
    number: string;
    category: string;
    title: string;
    statement: string;
    stack: readonly string[];
    accent: string;
    image: string;
    imageAlt: string;
    href: string;
  };
}) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (
      !imageRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.8,
      ease: "power3.out",
      overwrite: true
    });
  };

  const handleLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
      overwrite: true
    });
  };

  return (
    <article
      className="group relative min-h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-[#08090B]/75 transition duration-500 hover:-translate-y-1 hover:border-white/20"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-55 transition-opacity duration-700 group-hover:opacity-70"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-[#08090B]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(143,184,255,.12),transparent_35%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative z-10 flex min-h-[480px] flex-col p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="mono text-xs text-white/45">
            {project.number}
          </span>

          <span className="eyebrow text-white/55">
            {project.category}
          </span>
        </div>

        <div className="mt-auto">
          <div className="mb-5 mono text-[10px] tracking-[.2em] text-[var(--accent)]">
            {project.accent}
          </div>

          <h3 className="display text-4xl font-semibold md:text-5xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
            {project.statement}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] text-white/60 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href={project.href}
        className="absolute inset-0 z-20"
        aria-label={`Explore ${project.title}`}
      />
    </article>
  );
}