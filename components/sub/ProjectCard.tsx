import Image from "next/image";
import React from "react";
import type { Project } from "@/constants";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, src, description, tech, live, repo } = project;

  return (
    <li className="group flex gap-5 py-7">
      <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md border border-line bg-panel md:h-16 md:w-32">
        <Image
          src={src}
          alt={title}
          fill
          sizes="128px"
          className="object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="truncate font-serif text-base text-zinc-100 md:text-lg">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-4 font-mono text-[11px]">
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              code
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                live <span className="align-super">↗</span>
              </a>
            )}
          </div>
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-x-3.5 gap-y-1">
          {tech.map((t) => (
            <span key={t} className="font-mono text-[11px] text-zinc-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
