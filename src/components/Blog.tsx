import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GitBranch,
  ListChecks,
  RefreshCcw,
  ShieldCheck,
  Target,
} from "lucide-react";

const PRINCIPLES = [
  {
    icon: Target,
    title: "Start with the outcome",
    text: "I define the purpose, user value, completion evidence, and constraints before I create tasks. This keeps the project connected to a real problem instead of becoming a collection of disconnected features.",
  },
  {
    icon: ListChecks,
    title: "Plan milestones, not just activity",
    text: "I break the outcome into reviewable phases such as scope, requirements, architecture, implementation, testing, security review, deployment, and reflection. Each milestone must produce something that can be inspected.",
  },
  {
    icon: GitBranch,
    title: "Make dependencies visible",
    text: "I identify what must be decided or completed before another item can begin. For example, roles and permissions must be defined before I can implement and test role-based access control.",
  },
  {
    icon: ShieldCheck,
    title: "Manage risk with the work",
    text: "Security, testing, and documentation are part of the plan from the beginning. I record assumptions, boundaries, and risks so they influence design decisions instead of becoming a final checklist.",
  },
  {
    icon: ClipboardCheck,
    title: "Use evidence to measure progress",
    text: "Time spent is useful for planning, but it is not the same as progress. I update progress when I produce evidence such as a decision record, diagram, test result, screenshot, report, commit, or working feature.",
  },
  {
    icon: RefreshCcw,
    title: "Review and adapt",
    text: "At the end of each week, I record what I demonstrated, what blocked me, and what needs to change. This turns the plan into a feedback loop and helps me reduce scope before quality is affected.",
  },
];

const TRACEABILITY = [
  {
    management: "Outcome",
    practice: "Define the user problem and completion criteria",
    evidence: "Project brief and definition of done",
  },
  {
    management: "Scope",
    practice: "Separate MVP requirements from later improvements",
    evidence: "Prioritized backlog and explicit non-goals",
  },
  {
    management: "Dependencies",
    practice: "Order work by technical and decision prerequisites",
    evidence: "Milestone roadmap and dependency notes",
  },
  {
    management: "Quality and risk",
    practice: "Plan testing, security, and review with implementation",
    evidence: "Threat model, test plan, and security report",
  },
  {
    management: "Change",
    practice: "Record why an important decision changed",
    evidence: "Architecture decision records and weekly reflections",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Engineering Journal
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Learning Through the Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Reflections on how I plan, build, secure, and improve software
            projects—and how I turn that process into evidence of growth.
          </p>
        </header>

        <article className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900 px-6 py-10 text-white sm:px-10 lg:px-14">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100 ring-1 ring-white/20">
              Software Project Management
            </span>
            <h3 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
              How I Manage Personal Software Projects
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              A personal project still needs clear outcomes, controlled scope,
              visible dependencies, quality practices, and honest progress
              reporting. I built a lightweight management system to apply those
              software-development principles to my own career projects.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                September 7, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />8 min read
              </span>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-4xl">
              <p className="text-lg leading-8 text-slate-700">
                When I first managed personal projects, I focused mostly on
                task lists. A long list made the project look organized, but it
                did not always tell me whether I was solving the right problem,
                building in the right order, or producing work another person
                could evaluate. I needed a process that connected planning,
                engineering decisions, security, and career development.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                My Career Growth system became that process. It gives each
                learning path or project a purpose, priority, weekly capacity,
                milestone outcomes, dependencies, completion evidence, and a
                next action. The system is intentionally lightweight, but the
                principles come directly from software development management.
              </p>

              <section className="mt-12" aria-labelledby="tracking-systems">
                <h4
                  id="tracking-systems"
                  className="text-2xl font-bold text-slate-900"
                >
                  The tracking systems behind the process
                </h4>
                <p className="mt-4 leading-7 text-slate-700">
                  These dashboards help me see capacity, progress, deadlines,
                  and evidence in one place. They also make problems visible:
                  an overdue item is a signal to review scope and rebaseline
                  intentionally—not to hide or silently move the date.
                </p>

                <div className="mt-6 space-y-8">
                  <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                    <img
                      src="/tracking/career-growth-dashboard.jpg"
                      alt="Career Growth dashboard showing active learning paths, weekly capacity, progress, milestones, and evidence-based accountability rules"
                      className="h-auto w-full"
                      loading="lazy"
                    />
                    <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">
                      My Career Growth dashboard connects learning, technical
                      projects, leadership work, and career development to
                      weekly capacity and evidence-based progress.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                    <img
                      src="/tracking/ticket-project-dashboard.jpg"
                      alt="Secure Support Ticket System dashboard showing deliverables, task progress, deadlines, schedule health, and traceability quality"
                      className="h-auto w-full"
                      loading="lazy"
                    />
                    <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">
                      The project-level tracker connects deliverables to source
                      tasks, requirements, target dates, schedule health, and
                      portfolio evidence.
                    </figcaption>
                  </figure>
                </div>
              </section>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                The principles I apply
              </h4>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {PRINCIPLES.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <section
                      key={principle.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h5 className="mt-4 font-semibold text-slate-900">
                        {principle.title}
                      </h5>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {principle.text}
                      </p>
                    </section>
                  );
                })}
              </div>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                Applying the process to secure software
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                I use the Secure Support Ticket System as a practical example.
                Its goal is not simply to create CRUD screens. The project must
                demonstrate a secure workflow for submitting, triaging,
                assigning, resolving, and auditing support tickets. That outcome
                changes how I manage the work.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Define the organization, users, roles, permissions, and workflow before selecting implementation details.",
                  "Translate the scope into user stories, acceptance criteria, an API contract, and a role-permission matrix.",
                  "Make architecture and security decisions visible through an ERD, system design, threat model, and decision records.",
                  "Implement a small vertical slice, then add automated tests, secure validation, audit logging, and CI/CD checks.",
                  "Collect screenshots, test results, reports, and commits so the final case study can show both the product and the engineering process.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                Traceability keeps the plan honest
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                I want to be able to trace a management decision to an
                engineering practice and then to visible evidence. This prevents
                documentation from becoming separate from development.
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Management focus</th>
                      <th className="px-4 py-3 font-semibold">Development practice</th>
                      <th className="px-4 py-3 font-semibold">Evidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRACEABILITY.map((row, index) => (
                      <tr
                        key={row.management}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-3 font-medium text-slate-900">
                          {row.management}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{row.practice}</td>
                        <td className="px-4 py-3 text-slate-600">{row.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                What this changed for me
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                The biggest change is that I no longer treat a personal project
                as successful only when the entire application is finished.
                Every phase must create a useful, reviewable artifact. A clear
                role matrix, a justified architecture decision, or a security
                test report is evidence of engineering judgment—not merely
                preparation for coding.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                This process also makes trade-offs visible. My time is limited,
                so I choose only a few priority paths each week. When capacity
                changes, I adjust scope or dates and document the reason. That
                is more honest and sustainable than keeping every task active
                and allowing quality to decline.
              </p>

              <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <h4 className="text-lg font-bold text-brand-900">
                  My working definition of progress
                </h4>
                <p className="mt-2 leading-7 text-brand-900/80">
                  Progress is a completed outcome supported by evidence and
                  connected to the project goal. Activity tells me where my time
                  went; evidence tells me what the project gained.
                </p>
              </div>

              <p className="mt-10 leading-7 text-slate-700">
                I am still refining this system as I learn. That is part of the
                management process: plan with the information available, make
                decisions visible, evaluate the result, and improve the next
                iteration.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <a href="#projects" className="btn-outline">
            See the projects behind the process
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
