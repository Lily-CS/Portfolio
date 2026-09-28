export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const POSTS: PostMeta[] = [
  {
    slug: "personal-project-management",
    title: "How I Manage Projects and Deliverables in My Personal Projects",
    excerpt:
      "Personal projects don't have deadlines, standups, or a boss — which is exactly why so many die halfway. Here's the lightweight system I use to actually ship the ones that matter to me.",
    category: "Workflow",
    date: "Aug 27, 2026",
    readTime: "7 min read",
  },
  {
    slug: "customer-service-lessons",
    title:
      "What Customer Service Taught Me About Designing Better Technology Solutions",
    excerpt:
      "Before I ever shipped code, I worked a customer service counter. Five habits I picked up there still shape how I approach every technical problem — from requirements gathering to error messages.",
    category: "Reflections",
    date: "Aug 4, 2026",
    readTime: "6 min read",
  },
];

export const getPost = (slug: string): PostMeta | undefined =>
  POSTS.find((p) => p.slug === slug);
