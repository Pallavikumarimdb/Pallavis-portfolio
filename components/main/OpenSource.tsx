import React from "react";
import ContributionCard from "../sub/ContributionCard";
import {
  OpenSource as OpenSourceData,
  OpenSourceMore,
  OpenSourceStats,
} from "@/constants";

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20">
      <div className="container-x">
        <p className="label">04 · Open source</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          Open-source contributions
        </h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-zinc-400">
          Actively contributing to production codebases - mostly TypeScript
          infrastructure, AI tooling and developer platforms. Every PR was
          reviewed and merged by a maintainer.
        </p>

        <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <div>
            <p className="label">Beyond code</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
              <li>
                <span className="text-zinc-200">Issue reporting.</span> Open
                bugs, enhancements and security issues found while using - and
                poking at - upstream projects, so maintainers can fix real
                problems others hit too.
              </li>
              <li>
                <span className="text-zinc-200">Issue triage.</span> On hand in
                open issues to test and reproduce reported bugs, write clear
                repro steps, and help issue openers and maintainers move things
                forward.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 divide-x divide-line border border-line bg-panel/40 sm:grid-cols-4">
          {OpenSourceStats.map((s) => (
            <div key={s.label} className="p-5 text-center">
              <div className="font-mono text-xl text-zinc-100 sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {OpenSourceData.map((project) => (
            <ContributionCard key={project.url} project={project} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-t border-line pt-6">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            Also in:
          </span>
          {OpenSourceMore.map((r, i) => (
            <span key={r.name}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {r.name}
              </a>
              {i < OpenSourceMore.length - 1 && (
                <span className="mx-1.5 text-zinc-600">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
