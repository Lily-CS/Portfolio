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
    slug: "customer-experience-crowdcue",
    title:
      "What Working in Downtown Seattle Taught Me About Customer Experience",
    excerpt:
      "A predictable lunch rush showed me what a prepared team can do. Unexpected crowds and system failures showed me what happens when people have to make up for missing information and unreliable tools. Those experiences inspired CrowdCue.",
    category: "Customer Experience",
    date: "Sep 27, 2026",
    readTime: "7 min read",
  },
  {
    slug: "personal-project-management",
    title: "How I Manage Projects and Deliverables in My Personal Projects",
    excerpt:
      "Personal projects don't have deadlines, standups, or a boss — which is exactly why so many die halfway. Here's the lightweight system I use to actually ship the ones that matter to me.",
    category: "Workflow",
    date: "Aug 27, 2026",
    readTime: "7 min read",
  },
];

export const getPost = (slug: string): PostMeta | undefined =>
  POSTS.find((p) => p.slug === slug);
