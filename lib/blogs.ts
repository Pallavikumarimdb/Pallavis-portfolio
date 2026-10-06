import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOGS_DIR);

  const posts = fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(BLOGS_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const readStats = readingTime(content);

      return {
        slug,
        title: (data.title as string) || slug,
        date: (data.date as string) || "2026-01-01",
        summary: (data.summary as string) || "",
        tags: (data.tags as string[]) || ["Engineering"],
        readingTime: (data.readTime as string) || readStats.text,
        featured: Boolean(data.featured),
      };
    });

  // Sort descending by date
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOGS_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOGS_DIR, `${slug}.md`);

  const fullPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const readStats = readingTime(content);

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || "2026-01-01",
    summary: (data.summary as string) || "",
    tags: (data.tags as string[]) || ["Engineering"],
    readingTime: (data.readTime as string) || readStats.text,
    featured: Boolean(data.featured),
    content,
  };
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const counts: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
