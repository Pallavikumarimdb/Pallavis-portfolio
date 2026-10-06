"use client";

import React, { useState, useMemo } from "react";
import { FiCopy, FiCheck, FiInfo, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";

export const Callout = ({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "success" | "tip";
  title?: string;
  children?: React.ReactNode;
}) => {
  if (!children && !title) return null;

  return (
    <aside className="my-6 border-l-2 border-zinc-600 bg-panel/50 px-4 py-3 text-[13px] leading-relaxed text-zinc-300">
      {title && (
        <span className="font-mono text-xs font-medium text-zinc-200 block mb-1">
          {title}
        </span>
      )}
      {children && <div className="text-zinc-400 [&>p]:m-0">{children}</div>}
    </aside>
  );
};

export const Pre = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const [copied, setCopied] = useState(false);

  // Extract text from children
  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (node && node.props && node.props.children) return extractText(node.props.children);
    return "";
  };

  const rawCode = extractText(children).trim();

  // Detect language from code element child
  let language = "code";
  if (React.isValidElement(children) && (children.props as any)?.className) {
    const match = /language-(\w+)/.exec((children.props as any).className);
    if (match) {
      language = match[1];
    }
  }

  const normalizedLang = useMemo(() => {
    const l = language.toLowerCase();
    if (l === "ts" || l === "typescript") return "typescript";
    if (l === "js" || l === "javascript") return "javascript";
    if (l === "py" || l === "python") return "python";
    if (l === "sql") return "sql";
    if (l === "bash" || l === "sh" || l === "shell") return "bash";
    if (l === "json") return "json";
    return l;
  }, [language]);

  const highlightedHtml = useMemo(() => {
    if (normalizedLang && Prism.languages[normalizedLang]) {
      try {
        return Prism.highlight(rawCode, Prism.languages[normalizedLang], normalizedLang);
      } catch {
        return null;
      }
    }
    return null;
  }, [rawCode, normalizedLang]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="group relative my-7 rounded-xl border border-line bg-[#0d0d10] overflow-hidden shadow-2xl">
      {/* Codeblock Header */}
      <div className="flex items-center justify-between border-b border-line/70 bg-[#131317] px-5 py-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70 inline-block" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
            {language !== "code" ? language : "Code"}
          </span>
        </div>
        <button
          onClick={onCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1.5 rounded-md border border-line/60 bg-panel/70 px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors"
        >
          {copied ? (
            <>
              <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <FiCopy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container with generous X and Y padding */}
      <div className="overflow-x-auto px-6 py-5 sm:px-8">
        <pre
          {...props}
          className="font-mono text-[13.5px] leading-[1.7] text-zinc-200 !bg-transparent !p-0 !m-0 !border-none"
        >
          {highlightedHtml ? (
            <code
              className={`block font-mono language-${normalizedLang}`}
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          ) : (
            <code className="block font-mono text-zinc-200">{rawCode}</code>
          )}
        </pre>
      </div>
    </div>
  );
};

export const ArchitectureBox = ({
  title,
  steps,
}: {
  title?: string;
  steps?: { label?: string; desc?: string; latency?: string }[] | string;
}) => {
  let rawSteps: any = steps;
  if (typeof rawSteps === "string") {
    try {
      rawSteps = JSON.parse(rawSteps);
    } catch {
      rawSteps = [];
    }
  }

  const safeSteps = Array.isArray(rawSteps)
    ? rawSteps.filter((s) => Boolean(s && (s.label || s.desc)))
    : [];

  // Do not render anything if title is missing or there are no architecture steps
  if (!title || safeSteps.length === 0) {
    return null;
  }

  return (
    <div className="my-8 rounded-lg border border-line bg-panel p-5">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-300">
          Architecture Flow: {title}
        </h4>
        <span className="chip">System Flow</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {safeSteps.map((s, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-between rounded border border-line/70 bg-[#0e0e11] p-3"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-1">
                <span>Step {idx + 1}</span>
                {s.latency && (
                  <span className="text-amber-400/90 font-mono text-[10px]">
                    ~{s.latency}
                  </span>
                )}
              </div>
              {s.label && (
                <p className="font-semibold text-zinc-200 text-sm mb-1">{s.label}</p>
              )}
              {s.desc && (
                <p className="text-xs text-zinc-400 leading-snug">{s.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

