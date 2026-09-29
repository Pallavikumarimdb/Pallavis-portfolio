"use client";

import React, { useState, useMemo } from "react";
import { BlogPostMeta } from "@/lib/blogs";
import BlogCard from "./BlogCard";
import { FiSearch, FiSliders } from "react-icons/fi";

export default function BlogFilterList({
  posts,
  allTags,
}: {
  posts: BlogPostMeta[];
  allTags: { tag: string; count: number }[];
}) {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);

      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles on System Design, AI/ML, Architecture..."
            className="w-full rounded-lg border border-line bg-panel py-2.5 pl-10 pr-4 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-zinc-500 mr-1 flex items-center gap-1.5">
          <FiSliders className="h-3 w-3" />
          Filter:
        </span>
        <button
          onClick={() => setSelectedTag("All")}
          className={`rounded border px-2.5 py-1 font-mono text-xs transition-all ${
            selectedTag === "All"
              ? "border-zinc-300 bg-zinc-200 text-zinc-900 font-medium"
              : "border-line bg-panel/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
          }`}
        >
          All ({posts.length})
        </button>

        {allTags.map(({ tag, count }) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded border px-2.5 py-1 font-mono text-xs transition-all ${
                isActive
                  ? "border-zinc-300 bg-zinc-200 text-zinc-900 font-medium"
                  : "border-line bg-panel/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
              }`}
            >
              {tag} ({count})
            </button>
          );
        })}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-line bg-panel/40 p-12 text-center">
          <p className="font-mono text-xs text-zinc-500">
            No articles found matching &quot;{searchQuery || selectedTag}&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedTag("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-mono text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
