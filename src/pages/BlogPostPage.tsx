import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPost } from "../content/posts";
import CustomerServiceLessonsBody from "../components/blog/CustomerServiceLessonsBody";
import PersonalProjectManagementBody from "../components/blog/PersonalProjectManagementBody";

const POST_BODIES: Record<string, () => JSX.Element> = {
  "customer-service-lessons": CustomerServiceLessonsBody,
  "personal-project-management": PersonalProjectManagementBody,
};

export default function BlogPostPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = getPost(slug);
  const Body = POST_BODIES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!post || !Body) {
    return <Navigate to="/#blog" replace />;
  }

  return (
    <div className="bg-white">
      <header className="relative overflow-hidden bg-[#4b0082] pb-16 pt-32 text-white">
        <div className="relative mx-auto max-w-3xl px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-accent-500/20 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-100 ring-1 ring-accent-200/30">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-purple-100/90">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <Body />

        <div className="mt-14 border-t border-slate-200 pt-8">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
