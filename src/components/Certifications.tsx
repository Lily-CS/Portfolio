import { Calendar, Clock } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  inProgress?: boolean;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "Linux Foundation Certified SysAdmin (LFCS)",
    issuer: "The Linux Foundation",
    year: "Expected 2026",
    description:
      "Hands-on certification covering Linux system administration: user and process management, networking, storage, and shell scripting.",
    image: "/certs/lfcs.png",
    imageAlt: "The Linux Foundation Certified SysAdmin badge",
    inProgress: true,
  },
  {
    title: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation — Education",
    year: "In progress · 2026",
    description:
      "Foundational course covering Linux fundamentals: system architecture, file systems, the command line, users and permissions, and everyday sysadmin tasks.",
    image: "/certs/lfs101.png",
    imageAlt: "Linux Foundation Introduction to Linux LFS101 course badge",
    inProgress: true,
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
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Certifications and courses I'm actively working toward as part of
            my ongoing growth in security and systems.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
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
  image,
  imageAlt,
  inProgress,
}: Certification) {
  return (
    <li
      className={`group relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
        inProgress
          ? "border-brand-300/70 ring-1 ring-brand-100"
          : "border-slate-200 hover:border-brand-200"
      }`}
    >
      {inProgress && (
        <span className="absolute -top-2 right-4 inline-flex items-center gap-1 rounded-full bg-brand-600 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm ring-2 ring-white">
          <Clock className="h-3 w-3" />
          In Progress
        </span>
      )}

      <div className="flex justify-center rounded-lg bg-slate-50/60 py-5">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-32 w-auto object-contain"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{issuer}</p>
        </div>

        <span className="inline-flex flex-none items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-500">
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
