import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout, Pre, ArchitectureBox } from "@/components/blog/MDXComponents";
import ShareBar from "@/components/blog/ShareBar";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - Pallavi Kumari",
    };
  }

  return {
    title: `${post.title} - Pallavi Kumari`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: ["Pallavi Kumari"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: "@pallavimdb",
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen pt-28 pb-24">
      <article className="container-x">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-200"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Back to all notes
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-10 border-b border-line pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500 mb-3">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {post.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <ShareBar title={post.title} slug={post.slug} />
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 prose-headings:font-serif prose-headings:text-zinc-100 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-zinc-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-ul:my-4 prose-li:my-1 prose-blockquote:border-l-2 prose-blockquote:border-zinc-500 prose-blockquote:bg-panel/40 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-zinc-300 prose-blockquote:not-italic">
          <MDXRemote
            source={post.content}
            components={{
              Callout,
              ArchitectureBox,
              pre: Pre,
            }}
          />
        </div>

        {/* Post Footer */}
        <footer className="mt-16 border-t border-line pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Written by
              </p>
              <p className="font-medium text-zinc-200">Pallavi Kumari</p>
              <p className="text-xs text-zinc-400">
                Full-Stack & AI Engineer • 80+ OSS PRs Merged
              </p>
            </div>

            <ShareBar title={post.title} slug={post.slug} />
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded border border-line bg-panel px-4 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <FiArrowLeft className="h-3.5 w-3.5" />
              Explore more articles
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
