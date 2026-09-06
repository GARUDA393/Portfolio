import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Chapter } from "@/components/Chapter";
import { Timeline } from "@/components/Timeline";
import { ProjectCard } from "@/components/ProjectCard";
import { CapabilityMap } from "@/components/CapabilityMap";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Chapter number="02" name="Curiosity">
        <div className="grid gap-10 lg:grid-cols-2">
          <h2 className="display text-5xl font-semibold md:text-7xl">
            I&apos;VE ALWAYS BEEN CURIOUS ABOUT HOW THINGS WORK.
          </h2>
          <div className="self-end text-lg leading-8 text-white/55">
            <p>From solving problems to building systems.</p>
            <p>From algorithms to intelligent machines.</p>
            <p>From data to decisions.</p>
            <p>From software to systems where failure isn&apos;t an option.</p>
          </div>
        </div>
      </Chapter>

      <Chapter number="03" name="Evolution" className="border-t border-white/5">
        <h2 className="display mb-14 max-w-4xl text-5xl font-semibold md:text-7xl">
          A JOURNEY ACROSS <span className="text-white/35">SYSTEMS.</span>
        </h2>
        <Timeline items={profile.timeline} />
      </Chapter>

      <Chapter number="04" name="The Lab" className="border-t border-white/5">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-4">Experiments · Projects · Case studies</div>
            <h2 className="display text-5xl font-semibold md:text-7xl">WHERE IDEAS BECOME SYSTEMS.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">Every project should explain the problem, architecture, implementation, result and lesson—not just list technologies.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {profile.projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </Chapter>

      <Chapter number="05" name="Intelligence" className="border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-4">AI / Data</div>
            <h2 className="display text-5xl font-semibold md:text-7xl">FROM DATA TO DECISIONS.</h2>
          </div>
          <div className="rounded-3xl border border-white/10 p-7 md:p-10">
            <div className="space-y-5">
              {["RAW DATA", "QUESTION", "ANALYSIS", "INSIGHT", "DECISION"].map((x, i) => (
                <div key={x} className="flex items-center gap-5">
                  <span className="mono w-6 text-xs text-white/25">0{i + 1}</span>
                  <span className="text-xl md:text-3xl">{x}</span>
                  {i < 4 && <span className="text-white/20">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter number="06" name="Precision" className="border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="eyebrow mb-4">Aerospace · V&V</div>
            <h2 className="display text-5xl font-semibold md:text-8xl">WHEN SOFTWARE HAS TO BE RIGHT.</h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-white/55">
              Software verification and embedded systems work changed the emphasis from simply building things to building with discipline, traceability and confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["DO-178C", "Software V&V", "Python Automation", "Embedded Control Systems", "SCADE"].map((x) => (
                <span key={x} className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">{x}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-5">
          {["REQUIREMENTS", "IMPLEMENTATION", "VERIFICATION", "VALIDATION", "CONFIDENCE"].map((x, i) => (
            <div key={x} className="bg-[var(--bg)] p-6">
              <div className="mono text-[10px] text-white/25">0{i + 1}</div>
              <div className="mt-12 text-sm">{x}</div>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter number="07" name="Proof" className="border-t border-white/5">
        <div className="mb-12">
          <div className="eyebrow mb-4">Evidence, not adjectives</div>
          <h2 className="display text-5xl font-semibold md:text-7xl">PROOF OF DISCIPLINE.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="bg-[var(--bg)] p-7 md:p-9">
              <div className="display text-5xl font-semibold md:text-6xl">{metric.value}<span className="text-white/35">{metric.suffix}</span></div>
              <div className="mt-4 eyebrow">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 p-7 md:p-9">
          <div className="eyebrow mb-6">Current role</div>
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h3 className="text-2xl">{profile.role}</h3>
              <p className="mt-1 text-white/45">{profile.company} · {profile.location}</p>
            </div>
            <span className="mono text-xs text-white/35">AUG 2026 — PRESENT</span>
          </div>
        </div>
      </Chapter>

      <Chapter number="08" name="Next Mission" className="border-t border-white/5">
        <div className="min-h-[60vh] flex flex-col justify-center">
          <div className="eyebrow mb-8">The next system is waiting.</div>
          <h2 className="display max-w-6xl text-6xl font-semibold md:text-9xl">
            WHAT SHOULD WE BUILD NEXT?
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
            Software. AI. Data. Systems. Research. Let&apos;s create something worth engineering.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profile.links.email} className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-[1.02]">
              Start a conversation ↗
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white hover:text-black">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <footer className="border-t border-white/10 pt-7 text-xs text-white/30">
          GARUDA · Anurag Prabhuling Swami · {new Date().getFullYear()}
        </footer>
      </Chapter>
    </main>
  );
}
