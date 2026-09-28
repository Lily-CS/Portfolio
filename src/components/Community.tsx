import { Cpu, HeartHandshake, Rocket, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const HACKATHON_ARTICLE_URL =
  "https://www.uwb.edu/news/2024/05/24/success-a-product-of-growth-and-collaboration";

type Involvement = {
  org: string;
  role: string;
  period: string;
  description: string;
  icon: LucideIcon;
  accent: string; // tailwind bg + text classes for the icon chip
};

const INVOLVEMENTS: Involvement[] = [
  {
    org: "UWB Hacks AI Hackathon",
    role: "Organizer",
    period: "2024",
    description:
      "Helped organize UW Bothell's AI-themed hackathon — coordinating logistics, mentors, and student teams building AI-driven projects in a single weekend.",
    icon: Cpu,
    accent: "bg-brand-50 text-brand-700 ring-brand-100",
  },
  {
    org: "UWB Hacks: Save the World",
    role: "Mentor",
    period: "2025",
    description:
      "Returned as a mentor for UW Bothell's Save the World hackathon, guiding student teams building projects that tackle real-world social and environmental challenges.",
    icon: HeartHandshake,
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    org: "UWB Hacks: The Future",
    role: "Participant",
    period: "2026",
    description:
      "Joined UW Bothell's future-themed hackathon as a participant, teaming up with fellow students to design and prototype a project around emerging technology and what's next.",
    icon: Rocket,
    accent: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-brand-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Community Involvement
          </h2>
          <p className="mt-4 text-base text-brand-100">
            Communities I've been part of — where I've learned, mentored, and
            built alongside people who care about the same things.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Left: photo linking to the UWB article */}
          <figure className="lg:sticky lg:top-24">
            <a
              href={HACKATHON_ARTICLE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Read the UW Bothell article about UWB Hacks AI 2024"
              className="group relative block aspect-[4/3] overflow-hidden border border-white/10 shadow-lg ring-1 ring-white/5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              <img
                src="/community/hackathon.png"
                alt="Organizers of UWB Hacks AI 2024, including WiCyS, IxDA, and ACM student chapters"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Hover overlay with CTA */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                    UW Bothell News · May 2024
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Read the story
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </div>
            </a>

            <figcaption className="mt-3 text-center font-mono text-[11px] font-medium uppercase tracking-wider text-brand-200">
              UWB Hacks AI 2024 ·{" "}
              <a
                href={HACKATHON_ARTICLE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-white hover:text-brand-100"
              >
                Read the story
                <ExternalLink className="h-3 w-3" />
              </a>
            </figcaption>
          </figure>

          {/* Right: compact involvement cards */}
          <ul className="space-y-4">
            {INVOLVEMENTS.map((item) => (
              <InvolvementCard key={item.org} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function InvolvementCard({
  org,
  role,
  period,
  description,
  icon: Icon,
  accent,
}: Involvement) {
  return (
    <li className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      <div
        className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-md ring-1 ${accent}`}
        aria-hidden
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
          <h3 className="text-sm font-semibold text-slate-900">{org}</h3>
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500">
            {period}
          </span>
        </div>
        <p className="mt-0.5 text-xs font-medium text-brand-600">{role}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </li>
  );
}
