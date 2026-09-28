import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Headphones, Sparkles } from "lucide-react";
import { POSTS, type PostMeta } from "../content/posts";

export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Blog
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Short reflections on the intersection of software, security, and
            the people who use what we build.
          </p>
        </header>

        <div className="mt-10 space-y-4">
          {POSTS.map((post, i) => (
            <FeaturedPostCard key={post.slug} post={post} isLatest={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPostCard({
  post,
  isLatest,
}: {
  post: PostMeta;
  isLatest: boolean;
}) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label={`Read: ${post.title}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.7fr_2fr]">
        <div className="relative flex min-h-[120px] items-center justify-center bg-[#4b0082] p-4 text-white md:min-h-full">
          <div className="relative flex flex-col items-center gap-2 text-center">
            {isLatest && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider ring-1 ring-white/30">
                <Sparkles className="h-2.5 w-2.5" />
                Latest
              </span>
            )}
            <Headphones className="h-9 w-9 text-white/90" />
          </div>
        </div>

        <div className="flex flex-col p-5">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full bg-accent-50 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-700 ring-1 ring-accent-100">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900 group-hover:text-brand-700 sm:text-lg">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
            Read post
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
