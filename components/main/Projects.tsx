"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects as ProjectsData } from "@/constants";

type Filter = "active" | "previous";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "active", label: "Actively building" },
  { key: "previous", label: "Past Projects" },
];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("active");

  const visible = ProjectsData.filter(
    (project) => (project.status ?? "previous") === filter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container-x">
        <p className="label">03 · Selected work</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          Projects
        </h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-zinc-400">
          A selection of things I&apos;ve designed and shipped. More on{" "}
          <a
            href="https://github.com/Pallavikumarimdb?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-zinc-100"
          >
            GitHub
          </a>
          .
        </p>

        <div
          role="tablist"
          aria-label="Project priority"
          className="mt-10 flex flex-wrap gap-2 border-b border-line"
        >
          {FILTERS.map(({ key, label }) => {
            const isActive = filter === key;
            const count = ProjectsData.filter(
              (project) => (project.status ?? "previous") === key
            ).length;

            return (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setFilter(key)}
                className={`-mb-px flex items-center gap-2 border-b-2 px-1 pb-3 pt-1 font-mono text-xs uppercase tracking-wider transition-colors ${isActive
                  ? "border-zinc-100 text-zinc-100"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                {label}
                <span className="text-[10px] text-zinc-600">{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="divide-y divide-line border-b border-line">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
