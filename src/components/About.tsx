import { GraduationCap, Users, Shield, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Role = {
  title: string;
  period: string;
  description: string;
  icon: LucideIcon;
};

const ROLES: Role[] = [
  {
    title: "Computer Science Student",
    period: "2022 - Present",
    description:
      "University of Washington Bothell — Software Engineering Focus",
    icon: GraduationCap,
  },
  {
    title: "VP IxDA UW Bothell",
    period: "2024",
    description: "Leading the Interaction Design Association chapter",
    icon: Users,
  },
  {
    title: "President WiCyS UW Bothell",
    period: "2023 - 2024",
    description: "Women in Cybersecurity chapter leadership",
    icon: Shield,
  },
  {
    title: "Hackathon Coordinator",
    period: "2023",
    description: "Organizing coding competitions and tech events",
    icon: Code2,
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
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Driven by curiosity and a passion for technology, I'm dedicated to
            creating solutions that make a difference.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              I'm a Computer Science student at the University of Washington
              Bothell with a focus on Software Engineering. My journey in tech
              is driven by a deep curiosity about how we can use technology to
              solve real-world problems and create more secure, accessible
              digital experiences.
            </p>
            <p>
              Beyond coding, I'm passionate about leadership and community
              building. As VP of IxDA UW Bothell and former President of WiCyS
              UW Bothell, I work to create inclusive spaces where diverse
              voices can thrive in technology.
            </p>
            <p>
              When I'm not debugging code or organizing events, you'll find me
              exploring new frameworks, contributing to open source projects,
              or mentoring fellow students in their tech journey.
            </p>
          </div>

          <ul className="space-y-4">
            {ROLES.map((role) => (
              <RoleCard key={role.title} {...role} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RoleCard({ title, period, description, icon: Icon }: Role) {
  return (
    <li className="group flex items-start gap-4 rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm shadow-slate-200/40 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 group-hover:bg-brand-100">
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <span className="text-xs font-medium text-slate-500">{period}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </li>
  );
}
