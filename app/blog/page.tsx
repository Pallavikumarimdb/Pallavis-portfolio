import React from "react";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blogs";
import BlogFilterList from "@/components/blog/BlogFilterList";

export const metadata: Metadata = {
  title: "Blog & System Design Notes - Pallavi Kumari",
  description:
    "Deep-dives into System Design, Distributed Systems, AI/ML architectures, and production engineering practices.",
  openGraph: {
    title: "Blog & System Design Notes - Pallavi Kumari",
    description:
      "Deep-dives into System Design, Distributed Systems, AI/ML architectures, and production engineering practices.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="container-x">
        {/* Page Header */}
        <header className="mb-12">
          <p className="label mb-3">Writing & Deep Dives</p>
          <h1 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
            System Design & AI/ML
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            Field notes, production postmortems, and architectural deep-dives
            focusing on distributed pipelines, LLM engineering, and fault-tolerant
            systems.
          </p>
        </header>

        {/* Filter and Post Listing */}
        <BlogFilterList posts={posts} allTags={allTags} />
      </div>
    </main>
  );
}
