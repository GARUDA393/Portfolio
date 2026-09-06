import { profile } from "@/data/profile";

export function CapabilityMap() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
      {Object.entries(profile.skills).map(([domain, skills]) => (
        <div key={domain} className="bg-[var(--bg)] p-6 md:p-8">
          <div className="eyebrow mb-8">{domain}</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/55 transition hover:border-white/25 hover:text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
