import React from "react";
import { TimelineDemo } from "@/components/sub/TimelineContent";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-x">
        <p className="label">02 · Experience</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          Where I&apos;ve worked
        </h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-zinc-400">
          Full-stack freelancing since 2024, with an engineering background
          spanning telecom release pipelines and production web applications.
        </p>

        <div className="mt-12">
          <TimelineDemo />
        </div>
      </div>
    </section>
  );
};

export default Experience;
