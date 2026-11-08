import fs from "node:fs";
import path from "node:path";

const categories = ["tech", "research", "reading", "life"];
const [category, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(" ").trim();

if (!categories.includes(category) || !title) {
  console.error(
    'Usage: pnpm new:post <category> "Post Title"'
  );
  console.error(`Categories: ${categories.join(", ")}`);
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  || `post-${Date.now()}`;

const directory = path.join(
  "src", "content", "posts", category
);

fs.mkdirSync(directory, { recursive: true });

const filename = path.join(directory, `${slug}.md`);

const content = [
  "---",
  `title: ${JSON.stringify(title)}`,
  'description: "A new article."',
  `pubDatetime: ${new Date().toISOString()}`,
  "draft: true",
  "featured: false",
  `tags: [${JSON.stringify(category)}]`,
  "---",
  "",
  "Write your article here.",
  "",
].join("\n");

fs.writeFileSync(filename, content, { flag: "wx" });

console.log(`Created: ${filename}`);
console.log("Set draft: false when ready to publish.");
