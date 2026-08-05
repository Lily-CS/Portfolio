type FocusArea = {
  title: string;
  description: string;
};

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Secure engineering",
    description:
      "Combining software engineering, user-centered design, and cybersecurity to build systems that are useful, maintainable, and resilient.",
  },
  {
    title: "Operational leadership",
    description:
      "Turning goals into clear ownership, dependencies, deliverables, and repeatable processes that help teams execute.",
  },
  {
    title: "Evidence-driven growth",
    description:
      "Documenting decisions, measuring outcomes, and using what I learn to improve the next project, program, or system.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-brand-100/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            My work sits at the intersection of software engineering,
            cybersecurity, and people-centered leadership.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              I completed my bachelor's degree in Computer Science &amp;
              Software Engineering at the University of Washington Bothell and
              am continuing my graduate studies in cybersecurity. That
              combination shapes how I approach technical work: understand the
              people a system serves, examine its risks, and build solutions
              that can be tested and improved.
            </p>

            <p>
              My interests include secure software engineering, application
              security, DevSecOps, and the technical evidence behind sound
              decisions. I value clear requirements, documented tradeoffs,
              measurable results, and systems that remain maintainable after
              delivery.
            </p>

            <p>
              Leadership has been an important part of my growth. I progressed
              from collaborating as IxDA vice president to managing a
              five-officer team, dependencies, and event delivery as WiCyS
              president. I now apply those lessons as ThinkCyber president,
              developing a repeatable quarterly program and a flagship
              cybersecurity awareness initiative.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a href="#projects" className="btn-primary">
                View technical work
              </a>
              <a href="#leadership" className="btn-outline">
                Explore leadership impact
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="about-focus-title"
            className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/40 sm:p-7"
          >
            <h3
              id="about-focus-title"
              className="text-lg font-semibold text-slate-900"
            >
              How I work
            </h3>

            <ul className="mt-5 space-y-4">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area.title}
                  className="rounded-xl bg-brand-50/70 p-4 ring-1 ring-brand-100"
                >
                  <h4 className="text-sm font-semibold text-brand-800">
                    {area.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
