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


        <article
          id="customer-service-crowdcue"
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
        >
          <div className="bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900 px-6 py-10 text-white sm:px-10 lg:px-14">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100 ring-1 ring-white/20">
              Customer Experience · CrowdCue
            </span>
            <h3 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
              What Working in Downtown Seattle Taught Me About Customer Experience
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              A predictable lunch rush showed me what a prepared team can do.
              Unexpected crowds and system failures showed me what happens when
              people have to make up for missing information and unreliable tools.
              Those experiences inspired CrowdCue.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                September 27, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />7 min read
              </span>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 sm:grid-cols-[1.7fr_1fr]">
                <figure className="overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="/blog/food-service/chipotle-bowl.png"
                    alt="Chipotle bowl served at a counter-service restaurant"
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 text-sm text-slate-600">
                    Counter and kitchen work gave me a view of service from order to handoff.
                  </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center rounded-2xl bg-orange-50 p-6 text-center">
                  <img
                    src="/blog/food-service/chipotle-logo.png"
                    alt="Chipotle Mexican Grill logo"
                    className="h-32 w-32 object-contain"
                    loading="lazy"
                  />
                  <figcaption className="mt-4 text-sm leading-6 text-slate-600">
                    Early downtown experience across the line, register, and kitchen.
                  </figcaption>
                </figure>
              </div>

              <p className="mt-10 text-lg leading-8 text-slate-700">
                I learned about customer experience from both sides of a service
                counter. While attending college and preparing for a career in
                technology, I worked in food service around downtown Seattle and
                SoDo. I worked as a cashier, line worker, kitchen staff member,
                cook, barista, and drive-through employee. At one point, I worked
                the lunch shift at a small gyro shop near Third and Pike, then
                went to Buffalo Wild Wings near Fourth and Pine for another shift.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                Those jobs taught me that a customer's experience depends on
                decisions made long before they place an order. Staffing,
                preparation, information, and working tools all affect whether a
                team can serve people well when demand rises.
              </p>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                When we knew the rush was coming
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                The gyro shop mainly served office workers during their lunch
                breaks. The rush was intense, but its timing and flow were
                consistent. Three of us—a cook, a front line worker, and a
                cashier—could prepare for it. We handled approximately $1,000 in
                sales in a single hour because we knew what to expect and were
                ready to work together.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                That preparation mattered to our customers. Many had limited
                time before they needed to return to work. A fast, reliable
                lunch service respected their time and earned their business.
              </p>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                When demand changed without warning
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                Elsewhere, demand was harder to anticipate. Downtown brought
                office workers and tourists alongside people attending concerts,
                games, festivals, and other events. Summer and the holiday
                season added more traffic. Buffalo Wild Wings also had a 5:00
                p.m. happy hour. At Krispy Kreme, a promotion could bring in more
                customers on top of an already busy period.
              </p>

              <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-sky-50">
                <img
                  src="/blog/food-service/krispy-kreme.png"
                  alt="Krispy Kreme doughnut box surrounded by doughnuts"
                  className="h-56 w-full object-cover object-center sm:h-72"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3 text-sm leading-6 text-slate-600">
                  At Krispy Kreme, promotions could add demand to an already busy day.
                </figcaption>
              </figure>

              <p className="mt-7 leading-7 text-slate-700">
                Managers sometimes received a corporate email about a major
                event, but they did not always know what was happening nearby or
                how several sources of demand might overlap. When a schedule did
                not match the rush, the immediate solution was often to ask
                employees already working to stay longer. I sometimes worked a
                13-hour shift and had to return at 8:00 a.m. the next day.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                Customers felt the strain too. They waited longer to order or
                be seated, while an overworked team tried to keep service
                moving. I saw how a gap in planning could affect workers,
                customers, and a restaurant's ability to serve the people
                coming through its doors.
              </p>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                When the tools slowed us down
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                Staffing was only part of the experience. At Buffalo Wild Wings,
                our handheld order-taking devices sometimes failed. During a
                busy dinner service, six servers then had to share three POS
                terminals to enter orders. Waiting for a terminal delayed the
                point when an order reached the kitchen. At times, POS failures
                also meant taking manual credit-card impressions and entering
                the transactions later when the system was available.
              </p>

              <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/blog/food-service/buffalo-wild-wings.png"
                  alt="Buffalo Wild Wings food and logo"
                  className="h-56 w-full object-cover object-center sm:h-72"
                  loading="lazy"
                />
                <figcaption className="px-5 py-3 text-sm leading-6 text-slate-600">
                  When order-taking tools failed during a rush, servers had to
                  wait to use shared terminals before orders could reach the kitchen.
                </figcaption>
              </figure>

              <p className="mt-7 leading-7 text-slate-700">
                Those moments changed how I think about system failure. A tool
                can fail at exactly the time people need it most. Even when the
                team finds a workaround, that workaround takes time and adds
                pressure to an already busy shift. Reliable technology needs
                to support the real pace of work, including the difficult days.
              </p>

              <h4 className="mt-12 text-2xl font-bold text-slate-900">
                The question that led to CrowdCue
              </h4>
              <p className="mt-4 leading-7 text-slate-700">
                The contrast between those workplaces stayed with me. At the
                gyro shop, a predictable rush allowed a small team to prepare
                and serve customers efficiently. At other locations, a manager
                might have had little warning that an event, promotion, seasonal
                increase, and regular dinner rush would converge.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                That experience became the starting point for CrowdCue, my
                project exploring how businesses could make better staffing
                decisions. The idea is to bring relevant demand signals into
                one view, alert managers to upcoming changes, recommend
                staffing based on expected demand and employee availability,
                and help them adjust when a rush develops differently than
                planned. Restaurants and retail are useful starting points,
                but the problem applies to other businesses that serve
                changing crowds.
              </p>
              <div className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <h5 className="text-lg font-bold text-brand-900">
                  The proposed CrowdCue workflow
                </h5>
                <ol className="mt-3 list-inside list-decimal space-y-2 text-brand-900/80">
                  <li>See upcoming local demand and receive an early alert.</li>
                  <li>Review a staffing recommendation before publishing a schedule.</li>
                  <li>Adjust when actual demand changes during a shift.</li>
                </ol>
              </div>
              <p className="mt-7 leading-7 text-slate-700">
                CrowdCue is a proposed solution, not a claim that I have
                already solved demand forecasting. The goal is to investigate
                whether better information, presented in time to act, can help
                managers prepare without relying so often on employees staying
                late. It would not repair a failed POS device, but my
                experience with those failures reinforces the need to design
                for the full service workflow and the people using it.
              </p>
              <p className="mt-5 leading-7 text-slate-700">
                I want to build technology with that reality in mind: the
                worker asked to stay, the manager making a decision with
                incomplete information, and the customer who has only a
                short lunch break. For me, a better customer experience begins
                with helping the people delivering it succeed.
              </p>
            </div>
          </div>
        </article>

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
