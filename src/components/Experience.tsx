import { Users, Shield, Calendar, Trophy, Radar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  badge: string;
  icon: LucideIcon;
};

type Stat = {
  value: string;
  label: string;
};

const EXPERIENCES: Experience[] = [
  {
    role: "President, ThinkCyber",
    org: "Cybersecurity Awareness Program",
    period: "2025 - Present",
    description:
      "Developing a repeatable quarterly program and a flagship cybersecurity awareness initiative — turning past lessons in event ops and community building into a durable operating model.",
    badge: "Leadership",
    icon: Radar,
  },
  {
    role: "VP IxDA UW Bothell",
    org: "Interaction Design Association",
    period: "2024 - Present",
    description:
      "Leading design thinking workshops, coordinating industry speaker events, and fostering collaboration between design and engineering students.",
    badge: "Leadership",
    icon: Users,
  },
  {
    role: "President WiCyS UW Bothell",
    org: "Women in Cybersecurity",
    period: "2023 - 2024",
    description:
      "Transformed the WiCyS chapter into an active, inclusive community for students pursuing cybersecurity careers — with a focus on supporting women and underrepresented groups.",
    badge: "Leadership",
    icon: Shield,
  },
  {
    role: "Hackathon Coordinator",
    org: "UW Bothell Computing & Software Systems",
    period: "2023 - Present",
    description:
      "Coordinated multiple hackathons including SubHacks and local coding competitions, managing logistics for 200+ participants and industry mentors.",
    badge: "Event Management",
    icon: Calendar,
  },
  {
    role: "Award-winning Capstone Project",
    org: "SafeZone Ratings Platform",
    period: "2024",
    description:
      "Led development of innovative safety rating platform, winning Best Technical Implementation award for advanced data integration and user experience design.",
    badge: "Achievement",
    icon: Trophy,
  },
];

const STATS: Stat[] = [
  { value: "150%", label: "Membership Growth" },
  { value: "200+", label: "Event Participants" },
  { value: "5+", label: "Major Events Organized" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#1c2f74] py-24 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(96,138,255,0.25), transparent 40%), radial-gradient(circle at 15% 85%, rgba(59,100,245,0.18), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Experience &amp; Leadership
          </h2>
          <p className="mt-4 text-base text-blue-100/80">
            Combining technical expertise with leadership experience to drive
            innovation and build inclusive tech communities.
          </p>
        </header>

        <ul className="mt-14 space-y-5">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  org,
  period,
  description,
  badge,
  icon: Icon,
}: Experience) {
  return (
    <li className="rounded-xl bg-white p-6 text-slate-800 shadow-sm ring-1 ring-white/10 transition-transform hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
          <Icon className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-slate-900">{role}</h3>
              <p className="text-sm font-medium text-brand-600">{org}</p>
            </div>
            <span className="text-xs font-medium text-slate-500">{period}</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          <span className="mt-3 inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {badge}
          </span>
        </div>
      </div>
    </li>
  );
}

function StatCard({ value, label }: Stat) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
      <div className="text-3xl font-extrabold text-brand-300">{value}</div>
      <div className="mt-1 text-sm text-blue-100/80">{label}</div>
    </div>
  );
}
