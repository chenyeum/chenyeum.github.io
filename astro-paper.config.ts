import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://chenyeum.github.io/",
    title: "Notes & Systems",
    description: "Research, technology, books, and everyday life.",
    author: "chenyeum",
    profile: "https://github.com/chenyeum",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/New_York",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/chenyeum/chenyeum.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/chenyeum",
    },
  ],
  shareLinks: [],
});
