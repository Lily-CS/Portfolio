import { GraduationCap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Role = {
  title: string;
  period: string;
  description: string;
  icon: LucideIcon;
  logoSrc?: string;
  logoAlt?: string;
};

const ROLES: Role[] = [
  {
    title: "M.S. Cybersecurity Engineering",
    period: "2024 – Present",
    description: "Graduate studies at the University of Washington.",
    icon: GraduationCap,
    logoSrc: "/edu/uwb.png",
    logoAlt: "University of Washington logo",
  },
  {
    title: "B.S. Computer Science & Software Engineering",
    period: "2022 – June 2024",
    description: "Software engineering focus at the University of Washington.",
    icon: GraduationCap,
    logoSrc: "/edu/uwb.png",
    logoAlt: "University of Washington logo",
  },
  {
    title: "SafeZone Ratings Platform",
    period: "2024",
    description:
      "Best Technical Implementation award for a capstone safety rating platform focused on data integration and user experience.",
    icon: Trophy,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-brand-100/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Software engineer, cybersecurity grad student, and community
            builder, working at the intersection of building software and
            keeping it secure.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              As a proud Husky, I'm a software engineer based in the Pacific
              Northwest, most interested in the space between building
              software and understanding how it breaks. I earned my B.S. in
              Computer Science &amp; Software Engineering at UW Bothell in
              June 2024 and stayed on for my M.S. in Cybersecurity
              Engineering, where I now focus on how systems fail and how to
              make them harder to break.
            </p>
            <p>
              My favorite problems live at the intersection of engineering
              and security, the messy places where tradeoffs actually matter.
              Outside of code, I put a lot of energy into the tech
              communities around me, mentoring at hackathons and helping run
              student events.
            </p>
          </div>

          <ul className="space-y-4">
            {ROLES.map((role) => (
              <RoleCard key={role.title} {...role} />
            ))}
          </ul>
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="/edu/81SNkjdl0AL._AC_SX679_.jpg"
            alt="UW Huskies"
            className="h-40 w-auto sm:h-48"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  title,
  period,
  description,
  icon: Icon,
  logoSrc,
  logoAlt,
}: Role) {
  return (
    <li className="group flex items-start gap-4 rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm shadow-slate-200/40 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      {logoSrc ? (
        <span className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200 group-hover:ring-brand-200">
          <img
            src={logoSrc}
            alt={logoAlt ?? ""}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </span>
      ) : (
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 group-hover:bg-brand-100">
          <Icon className="h-5 w-5" />
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-500">
            {period}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </li>
  );
}
