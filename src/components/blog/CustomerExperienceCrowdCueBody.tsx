export default function CustomerExperienceCrowdCueBody() {
  return (
    <article className="prose-slate text-slate-700">
      <div className="grid gap-4 sm:grid-cols-[1.7fr_1fr]">
        <figure className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="/blog/food-service/chipotle-bowl.png"
            alt="Chipotle bowl served at a counter-service restaurant"
            className="h-64 w-full object-cover sm:h-72"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm text-slate-600">
            Counter and kitchen work gave me a view of service from order to
            handoff.
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
        technology, I worked in food service around downtown Seattle and SoDo
        — cashier, line worker, cook, barista, drive-through. At one point I
        worked the lunch shift at a small gyro shop near Third and Pike, then
        went straight to Buffalo Wild Wings near Fourth and Pine for another
        shift.
      </p>
      <p className="mt-5 leading-7 text-slate-700">
        Those jobs taught me that a customer's experience depends on decisions
        made long before they place an order. Staffing, preparation,
        information, and working tools all affect whether a team can serve
        people well when demand rises.
      </p>

      <h4 className="mt-12 text-2xl font-bold text-slate-900">
        When we knew the rush was coming
      </h4>
      <p className="mt-4 leading-7 text-slate-700">
        The gyro shop mainly served office workers during their lunch breaks.
        The rush was intense, but its timing and flow were consistent. Three
        of us&mdash;a cook, a front line worker, and a cashier&mdash;could
        prepare for it. We handled approximately $1,000 in sales in a single
        hour because we knew what to expect and were ready to work together.
      </p>
      <p className="mt-5 leading-7 text-slate-700">
        That preparation mattered to our customers. Many had limited time
        before they needed to return to work. A fast, reliable lunch service
        respected their time and earned their business.
      </p>

      <h4 className="mt-12 text-2xl font-bold text-slate-900">
        When demand changed without warning
      </h4>
      <p className="mt-4 leading-7 text-slate-700">
        Elsewhere, demand was harder to anticipate. Downtown brought office
        workers and tourists alongside people attending concerts, games,
        festivals, and other events. Summer and the holiday season added more
        traffic. Buffalo Wild Wings also had a 5:00 p.m. happy hour. At
        Krispy Kreme, a promotion could bring in more customers on top of an
        already busy period.
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
        Managers sometimes received a corporate email about a major event, but
        they did not always know what was happening nearby or how several
        sources of demand might overlap. When a schedule did not match the
        rush, the immediate solution was often to ask employees already
        working to stay longer. I sometimes worked a 13-hour shift and had to
        return at 8:00 a.m. the next day.
      </p>
      <p className="mt-5 leading-7 text-slate-700">
        Customers felt the strain too. They waited longer to order or be
        seated while an overworked team tried to keep service moving. When
        staffing is guesswork, the workers absorb the cost — and the
        customers feel it, even when nobody says it out loud.
      </p>

      <h4 className="mt-12 text-2xl font-bold text-slate-900">
        When the tools slowed us down
      </h4>
      <p className="mt-4 leading-7 text-slate-700">
        Staffing was only part of the experience. At Buffalo Wild Wings, our
        handheld order-taking devices sometimes failed. During a busy dinner
        service, six servers then had to share three POS terminals to enter
        orders. Waiting for a terminal delayed the point when an order
        reached the kitchen. When the POS went down completely, we took
        manual credit-card impressions and entered the transactions later,
        once the system was back.
      </p>

      <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <img
          src="/blog/food-service/buffalo-wild-wings.png"
          alt="Buffalo Wild Wings food and logo"
          className="h-56 w-full object-cover object-center sm:h-72"
          loading="lazy"
        />
        <figcaption className="px-5 py-3 text-sm leading-6 text-slate-600">
          When order-taking tools failed during a rush, servers had to wait to
          use shared terminals before orders could reach the kitchen.
        </figcaption>
      </figure>

      <p className="mt-7 leading-7 text-slate-700">
        Those moments changed how I think about system failure. A tool can
        fail at exactly the time people need it most. Even when the team
        finds a workaround, that workaround takes time and adds pressure to
        an already busy shift. Reliable technology needs to support the real
        pace of work, including the difficult days.
      </p>

      <h4 className="mt-12 text-2xl font-bold text-slate-900">
        The question that led to CrowdCue
      </h4>
      <p className="mt-4 leading-7 text-slate-700">
        The contrast between those workplaces stayed with me. At the gyro
        shop, a predictable rush allowed a small team to prepare and serve
        customers efficiently. At other locations, a manager might have had
        little warning that an event, promotion, seasonal increase, and
        regular dinner rush would converge.
      </p>
      <p className="mt-5 leading-7 text-slate-700">
        That experience became the starting point for CrowdCue, my project
        exploring how businesses could make better staffing decisions. The
        idea is to give managers the demand signals they don't currently
        have — early, in one place, and specific enough to act on.
        Restaurants and retail are useful starting points, but the problem
        applies to any business serving changing crowds.
      </p>

      <div className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 p-6">
        <h5 className="text-lg font-bold text-brand-900">
          The proposed CrowdCue workflow
        </h5>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-brand-900/80">
          <li>See upcoming local demand and receive an early alert.</li>
          <li>
            Review a staffing recommendation before publishing a schedule.
          </li>
          <li>Adjust when actual demand changes during a shift.</li>
        </ol>
      </div>

      <p className="mt-7 leading-7 text-slate-700">
        CrowdCue is a proposed solution, not a claim that I have already
        solved demand forecasting. The goal is to investigate whether better
        information, presented in time to act, can help managers prepare
        without relying so often on employees staying late. It would not
        repair a failed POS device, but my experience with those failures
        reinforces the need to design for the full service workflow and the
        people using it.
      </p>
      <p className="mt-5 leading-7 text-slate-700">
        I want to build technology with that reality in mind: the worker
        asked to stay, the manager making a decision with incomplete
        information, and the customer who has only a short lunch break. For
        me, a better customer experience begins with helping the people
        delivering it succeed.
      </p>
    </article>
  );
}
