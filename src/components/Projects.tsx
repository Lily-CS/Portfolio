import { ExternalLink, Github, ShieldCheck, Cloud, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  cover: {
    icon: LucideIcon;
    label: string;
    gradient: string;
    iconClass: string;
  };
  repoUrl?: string;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Password Guardian",
    description:
      "Enterprise-grade password generator that creates unbreakable passwords in seconds. Zero data collection, client-side only, 100% private and secure.",
    tags: ["React", "TypeScript", "Cryptography", "Web Security"],
    cover: {
      icon: ShieldCheck,
      label: "Password Guardian",
      gradient: "from-slate-900 via-slate-800 to-emerald-900",
      iconClass: "text-emerald-300",
    },
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "SWUT - Static Website Uploader & Tracker",
    description:
      "Comprehensive cloud platform for deploying and monitoring static websites with real time analytics, automated deployments, and time spent tracking.",
    tags: ["React", "Node.js", "AWS S3", "Analytics API"],
    cover: {
      icon: Cloud,
      label: "SWUT",
      gradient: "from-brand-200 via-brand-100 to-white",
      iconClass: "text-brand-600",
    },
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "EcoTracker Mobile",
    description:
      "Mobile application for tracking personal carbon footprint with gamification elements and community challenges.",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
    cover: {
      icon: Leaf,
      label: "EcoTracker",
      gradient: "from-emerald-700 via-emerald-600 to-lime-500",
      iconClass: "text-white",
    },
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            My Work
          </h2>
          <p className="mt-4 text-base text-slate-600">
            A selection of projects showcasing my expertise in full-stack
            development, data engineering, and cybersecurity applications.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, cover, repoUrl, liveUrl } = project;
  const CoverIcon = cover.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${cover.gradient}`}
      >
        <CoverIcon className={`h-14 w-14 opacity-80 ${cover.iconClass}`} />
        <span className="absolute bottom-3 left-4 text-sm font-semibold text-white/90 drop-shadow">
          {cover.label}
        </span>
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} source code`}
              className="rounded-md bg-white/90 p-1.5 text-slate-700 hover:bg-white"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
              className="rounded-md bg-white/90 p-1.5 text-slate-700 hover:bg-white"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
