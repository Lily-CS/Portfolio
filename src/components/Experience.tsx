import { Users, Shield, ShieldCheck, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  badge: string;
  icon: LucideIcon;
};

const EXPERIENCES: Experience[] = [
  {
    role: "Founder and President of ThinkCyber UWBothell",
    org: "Student Cybersecurity Community",
    period: "2025 - Present",
    description:
      "Founded and lead ThinkCyber — a student cybersecurity community at UW Bothell running workshops, CTF practice, and speaker events.",
    badge: "Leadership",
    icon: ShieldCheck,
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
];

// Cascading vertical offsets for each card in the row.
// Cycled by index — the pattern reads as a gentle wave.
const CASCADE_OFFSETS = ["md:mt-0", "md:mt-10", "md:mt-4", "md:mt-14"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#4b0082] py-24 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(196,161,255,0.25), transparent 40%), radial-gradient(circle at 15% 85%, rgba(120,80,200,0.25), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Experience &amp; Leadership
          </h2>
          <p className="mt-4 text-base text-purple-100/80">
            Combining technical expertise with leadership experience to drive
            innovation and build inclusive tech communities.
          </p>
        </header>

        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:items-start md:gap-x-8">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={exp.role}
              {...exp}
              offsetClass={CASCADE_OFFSETS[i % CASCADE_OFFSETS.length]}
            />
          ))}
        </ul>
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
  offsetClass,
}: Experience & { offsetClass: string }) {
  return (
    <li className={`flex flex-col items-center text-center ${offsetClass}`}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/30 via-purple-200/20 to-transparent blur-md"
        />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/25 backdrop-blur-sm sm:h-28 sm:w-28">
          <Icon className="h-10 w-10 text-white sm:h-12 sm:w-12" />
        </div>
      </div>

      <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-white sm:text-base">
        {role}
      </h3>
      <p className="mt-1 text-xs font-medium text-purple-200/90">{org}</p>
      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-200/70">
        {period}
      </p>

      <p className="mt-3 max-w-[18ch] text-xs leading-relaxed text-purple-100/85 sm:max-w-[22ch]">
        {description}
      </p>

      <span className="mt-3 inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
        {badge}
      </span>
    </li>
  );
}
