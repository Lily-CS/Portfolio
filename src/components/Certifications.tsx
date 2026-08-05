import { Award, Trophy, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: LucideIcon;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    description:
      "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    icon: Award,
  },
  {
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2023",
    description:
      "Expert-level certification for designing and managing cloud architecture solutions.",
    icon: Trophy,
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    description:
      "Validates skills in deploying, managing, and troubleshooting Kubernetes clusters.",
    icon: Award,
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
    description:
      "Certification in Scrum framework and agile project management principles.",
    icon: Trophy,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Professional certifications validating my technical expertise and
            commitment to continuous learning.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CertificationCard({
  title,
  issuer,
  year,
  description,
  icon: Icon,
}: Certification) {
  return (
    <li className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Icon className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{issuer}</p>
          </div>
        </div>

        <span className="inline-flex flex-none items-center gap-1 text-xs font-medium text-slate-500">
          <Calendar className="h-3.5 w-3.5" />
          {year}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </li>
  );
}
