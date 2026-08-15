import React from "react";
import type { OSSProject } from "@/constants";

const ContributionCard = ({ project }: { project: OSSProject }) => {
  const { owner, repo, description, prs, url } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-lg border border-line bg-panel/40 p-5 transition-colors hover:border-zinc-600 hover:bg-panel"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-xs text-zinc-500">{owner}</p>
        <span className="font-mono text-[11px] text-zinc-500">
          {prs} PRs
        </span>
      </div>
      <h3 className="mt-1.5 truncate font-serif text-base text-zinc-100 group-hover:text-zinc-200">
        {repo}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">
        {description}
      </p>
    </a>
  );
};

export default ContributionCard;
