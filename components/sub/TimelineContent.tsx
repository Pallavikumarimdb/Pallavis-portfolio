import React from "react";
import { Timeline } from "@/components/main/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "07/2024 - Present",
      content: (
        <div>
          <h3 className="font-serif text-lg text-zinc-100">
            Contract / Freelancing
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Full Stack Developer - (Remote)
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
            <li>
              Developing and deploying scalable end-to-end web applications
              using Next.js, NestJS, and MongoDB, ensuring robust and efficient
              backend and frontend solutions.
            </li>
            <li>
              One of the top and most active OSS contributors to various
              startups, including Y Combinator-backed startups.
            </li>
            <li>
              Collaborating with cross-functional teams to design and implement
              RESTful APIs, enhancing system performance and user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "09/2025 - 11/2025",
      content: (
        <div>
          <h3 className="font-serif text-lg text-zinc-100">
            Pangolin <span className="text-zinc-500">(YCS25)</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Contract Software Developer - USA (Remote)
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
            <li>
              Contributing to the development of Pangolin, a high-performance
              networking and traffic management platform.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "06/2022 - 05/2023",
      content: (
        <div>
          <h3 className="font-serif text-lg text-zinc-100">
            Nokia Solutions and Networks
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Software Engineer - Student Trainee
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
            <li>
              Automated functional and integration test cases with a
              Python-based framework, improving accuracy and throughput of
              release testing.
            </li>
            <li>
              Worked on ORAN (4G/5G) projects across security operations,
              productization and stabilization of next-generation networks.
            </li>
            <li>
              Owned Customer Release Testing (CRT) for ORAN and RNC, ensuring
              quality bars were met before every release.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "01/2022 - 05/2022",
      content: (
        <div>
          <h3 className="font-serif text-lg text-zinc-100">
            HCL Technologies
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Full-Stack Developer Intern
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
            <li>
              Built dynamic front-end components with React.js for an
              enterprise UI.
            </li>
            <li>
              Engineered server-side logic with Node.js and Express.js,
              integrating RESTful APIs with MongoDB Atlas.
            </li>
            <li>
              Wired RESTful endpoints end-to-end for smooth data flow across
              the stack.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
