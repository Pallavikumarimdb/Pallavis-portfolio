import React from "react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blogs";
import { FiArrowUpRight } from "react-icons/fi";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col justify-between rounded-lg border border-line bg-panel/70 px-4 py-3.5 sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-zinc-500 hover:bg-[#18181c]"
    >
      <div className="flex flex-col gap-1.5">
        {/* Top: Title & Date / Read Time */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
          <h3 className="text-[15px] font-medium text-zinc-100 transition-colors group-hover:text-white flex items-center gap-1.5 leading-snug">
            <span>{post.title}</span>
            <FiArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-100" />
          </h3>

          <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-zinc-500">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Middle: 1-line clean summary */}
        <p className="text-xs text-zinc-400 line-clamp-1 leading-relaxed">
          {post.summary}
        </p>

        {/* Bottom: Compact Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
          {post.featured && (
            <span className="rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.2 text-[9px] font-mono uppercase tracking-wider text-amber-300">
              Featured
            </span>
          )}
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded border border-line bg-panel/60 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="font-mono text-[10px] text-zinc-600">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
