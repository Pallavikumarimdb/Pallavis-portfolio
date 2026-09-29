import React from "react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blogs";
import { FiArrowUpRight, FiClock, FiCalendar } from "react-icons/fi";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between rounded-lg border border-line bg-panel p-6 transition-all duration-200 hover:border-zinc-600 hover:bg-[#18181c]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
          <span className="flex items-center gap-1.5">
            <FiCalendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <FiClock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
          {post.featured && (
            <span className="ml-auto rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-medium text-zinc-100 transition-colors group-hover:text-white flex items-center justify-between gap-2">
          <span>{post.title}</span>
          <FiArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-100" />
        </h3>

        <p className="mt-2.5 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-line/60">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
