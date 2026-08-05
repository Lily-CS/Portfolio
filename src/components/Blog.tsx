import { ArrowRight, Calendar, Clock, ShieldCheck, Database, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
  cover: {
    icon: LucideIcon;
    gradient: string;
    iconClass: string;
  };
};

const POSTS: Post[] = [
  {
    title: "Building Secure Web Apps: Lessons from the OWASP Top 10",
    excerpt:
      "A practical walkthrough of the most common web vulnerabilities and the patterns I use to defend against them in day-to-day development.",
    category: "Security",
    date: "May 12, 2025",
    readTime: "8 min read",
    href: "#",
    cover: {
      icon: ShieldCheck,
      gradient: "from-slate-900 via-slate-800 to-brand-800",
      iconClass: "text-emerald-300",
    },
  },
  {
    title: "From Raw Data to Insights: My Data Engineering Workflow",
    excerpt:
      "How I move messy datasets through ingestion, cleaning, and modeling using Python, Spark, and PostgreSQL — without losing my mind.",
    category: "Data Engineering",
    date: "Apr 3, 2025",
    readTime: "6 min read",
    href: "#",
    cover: {
      icon: Database,
      gradient: "from-brand-600 via-brand-500 to-brand-300",
      iconClass: "text-white",
    },
  },
  {
    title: "Why I Switched My Side Projects to TypeScript",
    excerpt:
      "Type safety, better tooling, and fewer 3am bugs. A candid look at the trade-offs after migrating a full React codebase from JavaScript.",
    category: "Engineering",
    date: "Feb 21, 2025",
    readTime: "5 min read",
    href: "#",
    cover: {
      icon: Code2,
      gradient: "from-indigo-600 via-brand-500 to-sky-400",
      iconClass: "text-white",
    },
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Blog
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Notes on software engineering, security, and data — lessons I pick
            up along the way and want to share.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-outline">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  const CoverIcon = post.cover.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${post.cover.gradient}`}
      >
        <CoverIcon className={`h-12 w-12 opacity-90 ${post.cover.iconClass}`} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <a
          href={post.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
