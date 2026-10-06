import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-28 pb-20">
      <div className="container-x text-center">
        <p className="label mb-3">404 Error</p>
        <h1 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md mx-auto text-sm text-zinc-400 leading-relaxed">
          The page or article you are looking for doesn&apos;t exist or has moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded border border-line bg-panel px-4 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <FiHome className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded border border-line bg-panel/60 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Explore Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
