import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blogs";
import BlogCard from "@/components/blog/BlogCard";
import { FiArrowRight } from "react-icons/fi";

export default function LatestBlogs() {
  const posts = getAllPosts().slice(0, 2);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 border-t border-line/60">
      <div className="container-x">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="label mb-2">Writing & Architecture</p>
            <h2 className="font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
              Latest Notes & Deep Dives
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Essays on system design, distributed pipelines, and production AI/ML.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
          >
            <span>All articles ({getAllPosts().length})</span>
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
