import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects as ProjectsData } from "@/constants";

const Projects = () => {
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

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
