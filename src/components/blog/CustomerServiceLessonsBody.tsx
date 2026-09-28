export default function CustomerServiceLessonsBody() {
  return (
    <article className="prose-slate text-slate-700">
      <p className="text-base leading-relaxed">
        Before I ever shipped a line of production code, I spent time behind a
        customer service counter. It doesn't show up on my resume, but it
        quietly shaped how I approach every technical problem — with people
        first, empathy second, and shipping third. Here are five habits from
        that work that show up in the software I build today.
      </p>

      <Numbered
        n={1}
        heading="Listen before you solve"
        body={
          <>
            The most common mistake at the service desk is to hear the first
            sentence and jump straight to a solution. The customer says "I
            want to return this" and you hand them a return form — missing
            that they actually needed a different size, or that they thought
            the product broke when it just needed setup.
            <br />
            <br />
            In engineering, this is requirements gathering. Users describe
            symptoms; my job is to find the underlying problem. Before I open
            an editor, I ask what the person is really trying to accomplish.
            That question saves more code than any framework choice.
          </>
        }
      />

      <Numbered
        n={2}
        heading="The stated problem isn't always the real one"
        body={
          <>
            A customer arrives frustrated because "the app won't let me log
            in." Five minutes later, you learn they've been trying to log in
            as a different user because they can't find their real email. The
            bug isn't in login — it's in account recovery.
            <br />
            <br />
            I keep a rule for triage: keep asking <em>"and then what?"</em>{" "}
            until the actual blocker surfaces. Bug reports, stakeholder
            requests, and even my own hunches deserve the same skepticism.
          </>
        }
      />

      <Numbered
        n={3}
        heading="Empathy is the specification"
        body={
          <>
            Behind every unusual request — the customer who wants six
            receipts, the one who won't use email, the one who needs
            everything explained twice — is a legitimate reason. My job wasn't
            to judge it. It was to serve it.
            <br />
            <br />
            The same instinct is what makes accessibility more than checkbox
            compliance. Designing for a screen reader user, a low-bandwidth
            mobile user, or a stressed user resetting a password at 2 AM is
            what it looks like to take empathy seriously in code.
          </>
        }
      />

      <Numbered
        n={4}
        heading="Clear beats clever"
        body={
          <>
            On the floor, the fastest way to lose a customer's trust is to use
            jargon they can't parse. "Sorry, we can't process that return
            without a UPC scan matched to the SKU record" is a sentence
            designed to end the conversation.
            <br />
            <br />
            Software has its own version: cryptic error messages,
            over-abstracted APIs, README files written for the person who
            already understood. When I write copy, comments, docs, or errors,
            I imagine the tired stakeholder reading them at the end of a long
            day. <strong>Clear is a service. Clever is an ego.</strong>
          </>
        }
      />

      <Numbered
        n={5}
        heading="Follow-through is the product"
        body={
          <>
            The customers I remember most weren't the ones with easy problems
            — they were the ones I called back to confirm the fix worked.
            Follow-through is how you turn a transaction into a relationship.
            <br />
            <br />
            In engineering, that maps to feedback loops: closing tickets with
            the reporter, checking metrics after a deploy, revisiting a design
            decision six months later to see if it aged well. A feature isn't
            finished when it ships — it's finished when someone else uses it
            and it works.
          </>
        }
      />

      <div className="mt-10 rounded-xl border-l-4 border-accent-500 bg-accent-50/70 p-5">
        <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-700">
          Bonus reflection
        </h4>
        <p className="mt-2 text-base leading-relaxed text-slate-700">
          The through-line is that customer service is really systems design
          under time pressure, with a live human sitting across from you.
          Software gets the same treatment — the human just isn't in the room.
        </p>
      </div>

      <h4 className="mt-10 text-xl font-semibold text-slate-900">
        Wrapping up
      </h4>
      <p className="mt-3 text-base leading-relaxed">
        The best engineers I've worked with treat every issue as a customer
        interaction: listen, verify, empathize, communicate clearly, follow
        up. Most of what I've ever needed to know about building good
        software, I learned first by standing at a counter.
      </p>
    </article>
  );
}

function Numbered({
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
