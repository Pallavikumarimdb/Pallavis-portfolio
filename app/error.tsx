"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FiRefreshCw, FiHome } from "react-icons/fi";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for observability
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-28 pb-20">
      <div className="container-x text-center">
        <p className="label mb-3">Error Encountered</p>
        <h1 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md mx-auto text-sm text-zinc-400 leading-relaxed">
          An unexpected error occurred while rendering this page.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded border border-line bg-panel px-4 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <FiRefreshCw className="h-3.5 w-3.5" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded border border-line bg-panel/60 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            <FiHome className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
