"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ShareBar({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://pallavikumar.dev/blog/${slug}`;
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(getUrl())}&via=pallavimdb`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    getUrl()
  )}`;

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs text-zinc-500 mr-2">Share:</span>
      <button
        onClick={onCopy}
        aria-label="Copy article link"
        className="flex items-center gap-1.5 rounded border border-line bg-panel px-2.5 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
      >
        {copied ? (
          <>
            <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-emerald-400">Copied</span>
          </>
        ) : (
          <>
            <FiCopy className="h-3.5 w-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center gap-1.5 rounded border border-line bg-panel p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
      >
        <FiTwitter className="h-3.5 w-3.5" />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center gap-1.5 rounded border border-line bg-panel p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
      >
        <FiLinkedin className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
