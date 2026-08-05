import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Palette,
  Code2,
  Megaphone,
  Award,
  Sparkles,
  ExternalLink,
  X,
  Users,
  FileCode2,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Initiative = {
  title: string;
  org: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: string;
};

const INITIATIVES: Initiative[] = [
  {
    title: "WiCyS Chapter Revival",
    org: "Women in Cybersecurity — UW Bothell",
    description:
      "Rebuilt an inactive chapter into a thriving community: launched weekly meetings, industry speaker series, CTF study nights, and a mentor-matching program.",
    tags: ["Community Building", "Cybersecurity", "Mentorship"],
    icon: ShieldCheck,
    accent: "from-brand-500 to-indigo-500",
  },
  {
    title: "IxDA Design Thinking Workshops",
    org: "Interaction Design Association — UW Bothell",
    description:
      "Co-designed and led hands-on workshops connecting CS and design students, teaching accessibility-first UX and rapid prototyping.",
    tags: ["Design Thinking", "Accessibility", "Cross-Discipline"],
    icon: Palette,
    accent: "from-pink-500 to-orange-400",
  },
  {
    title: "SubHacks & Local Hackathons",
    org: "UW Bothell Computing & Software Systems",
    description:
      "Coordinated logistics, sponsorships, and mentorship for 200+ student participants, with a focus on beginner-friendly onboarding and inclusive team formation.",
    tags: ["Event Ops", "Sponsorship", "Beginner-Friendly"],
    icon: Code2,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Speaker & Advocate",
    org: "Campus panels & tech meetups",
    description:
      "Spoke on panels about breaking into cybersecurity, balancing leadership with academics, and building community as an underrepresented student in STEM.",
    tags: ["Public Speaking", "Advocacy", "STEM Outreach"],
    icon: Megaphone,
    accent: "from-brand-500 to-sky-400",
  },
];

export default function Leadership() {
  const [featureOpen, setFeatureOpen] = useState(false);

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/50 to-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Leadership &amp; Community Impact
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Beyond the code, I invest in the people around me — building
            programs that make tech more welcoming, more inclusive, and more
            fun to be part of.
          </p>
        </header>

        <FeatureCard onOpen={() => setFeatureOpen(true)} />

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Initiatives &amp; Programs
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {INITIATIVES.map((i) => (
              <InitiativeCard key={i.title} {...i} />
            ))}
          </div>
        </div>
      </div>

      <FeatureModal
        open={featureOpen}
        onClose={() => setFeatureOpen(false)}
      />
    </section>
  );
}

function FeatureCard({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group mt-14 block w-full overflow-hidden rounded-2xl bg-[#1c2f74] p-0 text-left text-white shadow-lg ring-1 ring-white/10 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(96,138,255,0.4), transparent 40%), radial-gradient(circle at 90% 90%, rgba(59,100,245,0.3), transparent 45%)",
        }}
      />
      <div className="relative grid gap-6 p-8 sm:p-10 md:grid-cols-[auto,1fr,auto] md:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <Award className="h-7 w-7 text-brand-300" />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-300/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-200">
              <Sparkles className="h-3 w-3" />
              Featured Accomplishment
            </span>
            <span className="text-xs text-blue-200/80">April 2024</span>
          </div>

          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
            UWB Hacks AI 2024 — Largest Hackathon in Campus History
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-100/80 md:max-w-xl">
            Co-led a three-club collaboration between WiCyS, ACM, and IxDA
            that grew the annual hackathon to 350+ participants and 65
            projects — one of the biggest student-led events in UW Bothell
            history.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Stat value="350+" label="Participants" />
            <Stat value="65" label="Projects Built" />
            <Stat value="3" label="Student Orgs" />
          </div>
        </div>

        <span className="inline-flex items-center gap-2 self-start rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm transition-colors group-hover:bg-brand-50 md:self-auto">
          View story
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-lg font-bold text-brand-200">{value}</span>
      <span className="text-xs uppercase tracking-wide text-blue-100/70">
        {label}
      </span>
    </div>
  );
}

function FeatureModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1c2f74] via-brand-700 to-brand-500 p-8 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 85% 90%, rgba(96,138,255,0.35), transparent 45%)",
            }}
          />

          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-md bg-white/10 p-1.5 text-white/90 ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
              <Award className="h-3 w-3" />
              Featured Accomplishment · April 2024
            </span>

            <h3
              id="feature-modal-title"
              className="mt-3 text-2xl font-bold leading-snug sm:text-3xl"
            >
              UWB Hacks AI 2024
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-100/90">
              Largest hackathon in UW Bothell campus history
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-slate-200 text-center">
          <ModalStat icon={Users} value="350+" label="Participants" />
          <ModalStat icon={FileCode2} value="65" label="Projects" />
          <ModalStat icon={Handshake} value="3" label="Student Orgs" />
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <Block title="The Vision">
            After attending the WiCyS conference in Denver in March 2023, I
            came back energized by what a great tech community-building event
            could feel like. At the annual Club Fair, my co-lead Tammy Le and
            I approached ACM with a proposal: turn the annual hackathon into
            a <strong>three-club collaboration</strong> between WiCyS, ACM,
            and IxDA.
          </Block>

          <Block title="My Role">
            As <strong>WiCyS President</strong> and{" "}
            <strong>IxDA Vice President</strong>, I helped bridge three student
            organizations, shape the event's theme around AI, and push hard on
            making participation accessible to students outside of CS.
          </Block>

          <Block title="What We Delivered">
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                Largest attendance in the hackathon's 8-year history with{" "}
                <strong className="text-slate-900">350+ participants</strong>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                Launched a <strong className="text-slate-900">"no code" track</strong> to open participation to
                business, design, and non-CS majors
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <strong className="text-slate-900">65 AI-themed projects</strong> submitted across
                accessibility, health, education, and career tooling
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                Partnered with <strong className="text-slate-900">Avanade</strong> for sponsorship,
                workshops, mentors, and judges
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                Recognized in UW Bothell News as one of the{" "}
                <strong className="text-slate-900">
                  biggest student-led events in campus history
                </strong>
              </li>
            </ul>
          </Block>

          <blockquote className="mt-6 rounded-xl border-l-4 border-brand-500 bg-brand-50/60 p-4 text-sm italic text-slate-700">
            "It was a very community-building event, and I thought about how
            maybe there was something more that we could do together with
            ACM."
            <footer className="mt-2 text-xs not-italic font-medium text-slate-500">
              — Lily Aguirre, UW Bothell News
            </footer>
          </blockquote>
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100"
          >
            Close
          </button>
          <a
            href="https://www.uwb.edu/news/2024/05/24/success-a-product-of-growth-and-collaboration"
            target="_blank"
            rel="noreferrer"
            className="btn-primary justify-center"
          >
            Read Full Article on UWB News
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ModalStat({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white px-4 py-4">
      <Icon className="mx-auto h-4 w-4 text-brand-500" />
      <div className="mt-1 text-lg font-bold text-slate-900">{value}</div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-600">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
  );
}

function InitiativeCard({
  title,
  org,
  description,
  tags,
  icon: Icon,
  accent,
}: Initiative) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg">
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
      />
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-slate-900">{title}</h4>
          <p className="mt-0.5 text-sm font-medium text-brand-600">{org}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
