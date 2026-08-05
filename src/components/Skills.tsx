import { Code, Layers, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code,
    items: ["Java", "Python", "JavaScript", "SQL", "TypeScript", "C++"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: [
      "React",
      "Spring Boot",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Flask",
    ],
  },
  {
    title: "Cloud & Data",
    icon: Cloud,
    items: ["Azure", "AWS", "PostgreSQL", "MongoDB", "Redis", "Apache Spark"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    items: ["GitHub", "Docker", "Postman", "Jenkins", "Kubernetes", "Terraform"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#1c2f74] py-24 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(96,138,255,0.25), transparent 40%), radial-gradient(circle at 85% 90%, rgba(59,100,245,0.18), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Skills &amp; Tools
          </h2>
          <p className="mt-4 text-base text-blue-100/80">
            A comprehensive toolkit for building modern, scalable, and secure
            applications from frontend to cloud infrastructure.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <SkillColumn key={group.title} {...group} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <h3 className="text-lg font-semibold">Continuous Learning</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
            Always exploring new technologies and methodologies. Currently
            diving deep into advanced security practices, machine learning
            frameworks, and cloud-native architectures.
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ title, icon: Icon, items }: SkillGroup) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-blue-100">
        <Icon className="h-5 w-5 text-brand-300" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-white/10 transition-transform hover:-translate-y-0.5 hover:ring-brand-300/50"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
