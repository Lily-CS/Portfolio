export const SITE = {
  name: "Lily Aguirre",
  email: "lily.aguirre@example.com",
  linkedinUrl: "https://www.linkedin.com/",
  githubUrl: "https://github.com/",
} as const;

export const mailto = (
  address: string = SITE.email,
  options: { subject?: string; body?: string } = {}
): string => {
  const params: string[] = [];
  if (options.subject) params.push(`subject=${encodeURIComponent(options.subject)}`);
  if (options.body) params.push(`body=${encodeURIComponent(options.body)}`);
  return `mailto:${address}${params.length ? `?${params.join("&")}` : ""}`;
};
