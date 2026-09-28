export default function PersonalProjectManagementBody() {
  return (
    <article className="prose-slate text-slate-700">
      <p className="text-base leading-relaxed">
        Personal projects don't come with a manager, a deadline, or a
        standup. That freedom is the whole point — and also why so many of
        them die halfway. The idea gets exciting, the codebase gets messy,
        life gets busy, and six weeks later a graveyard folder called{" "}
        <em>side-projects/</em> is quietly growing on disk.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Over time I've built a lightweight system that helps me actually
        ship the personal projects I care about. It's not sophisticated and
        it's not a productivity brand — it's five habits, in order, that I
        return to every time I start something new.
      </p>

      <Step
        n={1}
        heading="Start with the outcome, not the tools"
        body={
          <>
            The first mistake I used to make: picking a framework before
            picking a goal. "Let me learn Next.js" is not a project. It's a
            reason to open a tutorial and lose an afternoon.
            <br />
            <br />
            Now I force myself to describe the finish line first, in one
            sentence a non-technical friend could understand.{" "}
            <em>
              "A web app I can share with three friends that lets them log
              their weekly reading."
            </em>{" "}
            The tools come later, and they come from the outcome — not the
            other way around.
          </>
        }
      />

      <Step
        n={2}
        heading="Write a one-page project brief"
        body={
          <>
            Before I write any code, I open a doc and answer four questions:
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                <strong>What is it?</strong> One-sentence description.
              </li>
              <li>
                <strong>Who's it for?</strong> Me, three friends, my resume,
                a real audience?
              </li>
              <li>
                <strong>What does "done" look like?</strong> The concrete,
                observable state I'll call the finish line.
              </li>
              <li>
                <strong>What's out of scope?</strong> Every tempting feature
                I'm explicitly saying no to today.
              </li>
            </ul>
            <br />
            The constraint is that the brief has to fit on a single page. It
            forces me to be honest about what I'm actually building, and
            it's the document I re-read whenever I'm tempted to add "just
            one more thing."
          </>
        }
      />

      <Step
        n={3}
        heading="Break the work into weekly deliverables"
        body={
          <>
            "Start the auth flow" is not a deliverable. "A user can sign up,
            log in, and see their name in the header" is. Every week, I
            write down one shippable outcome — a feature working end-to-end,
            a decision written down, a page deployed.
            <br />
            <br />
            I keep those in a GitHub Project board with three columns —{" "}
            <strong>This week</strong>, <strong>In progress</strong>,{" "}
            <strong>Done</strong>. It looks embarrassingly simple. That's
            the point: if my system is heavier than the project itself, I
            won't use it.
          </>
        }
      />

      <Step
        n={4}
        heading="Timebox scope, never extend deadlines"
        body={
          <>
            When I fall behind — and I always do — my default is to cut
            scope, not push the deadline. A half-shipped project that ends
            on the date I set teaches me more than the same project would
            teach me if it dragged for another three months and then
            quietly stopped.
            <br />
            <br />
            Practically, that means the "out of scope" list from the brief
            grows over time, and features I planned for later get quietly
            demoted or deleted. That's fine. The project is allowed to be
            smaller than the fantasy. It's not allowed to be endless.
          </>
        }
      />

      <Step
        n={5}
        heading="Retro at the end of every project"
        body={
          <>
            The step almost everyone skips. When a project ends — shipped
            or shelved — I spend 20 minutes answering three questions:
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>What worked?</li>
              <li>What didn't?</li>
              <li>What would I do differently next time?</li>
            </ul>
            <br />
            The notes go in a single file I've been growing for years. Half
            the entries are variations on the same lesson (
            <em>"I overscoped again"</em>), which is exactly why writing
            them helps — the pattern is easier to see when I've stated it
            five times in my own words.
          </>
        }
      />

      <div className="mt-10 rounded-xl border-l-4 border-accent-500 bg-accent-50/70 p-5">
        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-700">
          Bonus rule: one project at a time
        </h4>
        <p className="mt-2 text-base leading-relaxed text-slate-700">
          Nothing has killed more of my side projects than starting a
          second one. Concurrent personal projects almost never both
          finish. So I hold one active slot: either I ship the current
          project, or I explicitly kill it and write down why — and then I
          can start the next thing with a clean conscience.
        </p>
      </div>

      <h4 className="mt-10 text-xl font-semibold text-slate-900">
        Wrapping up
      </h4>
      <p className="mt-3 text-base leading-relaxed">
        This system isn't about productivity for its own sake. It's about
        respecting the handful of hours a week I actually have for
        personal work, and pointing those hours at something that will
        exist when I'm done. Outcome first, brief on one page, weekly
        deliverables, cut scope not deadlines, retro at the end — five
        habits I lean on every time, and every time they earn their keep.
      </p>
    </article>
  );
}

function Step({
  n,
  heading,
  body,
}: {
  n: number;
  heading: string;
  body: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h4 className="flex items-baseline gap-3 font-display text-xl font-semibold text-slate-900">
        <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 font-mono text-sm font-bold text-white">
          {n}
        </span>
        <span>{heading}</span>
      </h4>
      <div className="mt-3 text-base leading-relaxed text-slate-700">
        {body}
      </div>
    </section>
  );
}
