export const topics = [
  {
    slug: "tech",
    title: "Tech",
    description: "Linux, programming, and self-hosting.",
  },
  {
    slug: "research",
    title: "Research",
    description: "Machine learning, statistics, and research notes.",
  },
  {
    slug: "reading",
    title: "Reading",
    description: "Books, ideas, and learning.",
  },
  {
    slug: "life",
    title: "Life",
    description: "Personal stories, travel, and everyday life.",
  },
] as const;

export type Topic = (typeof topics)[number];
