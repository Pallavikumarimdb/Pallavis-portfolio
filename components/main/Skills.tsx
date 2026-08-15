import React from "react";
import { skillGroups } from "@/constants";

const Skills = () => {
  return (
    <section id="skills" className="border-t border-line py-20">
      <div className="container-x">
        <p className="label">05 · Toolbox</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          Technologies
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {group.title}
              </h3>
              <p className="mt-3 leading-loose text-zinc-300">
                {group.items.map((item, i) => (
                  <span key={item}>
                    <span className="text-[13.5px]">{item}</span>
                    {i < group.items.length - 1 && (
                      <span className="mx-2 text-zinc-600">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
