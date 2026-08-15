import React from "react";
import { Contact } from "@/constants";

const facts = [
  {
    label: "Currently",
    value: "AI-powered developer tooling",
  },
  {
    label: "Location",
    value: "India",
  },
  {
    label: "Stack",
    value: "TypeScript · React · Next.js · Node",
  },
  {
    label: "Email",
    value: Contact.email,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-x">
        <p className="label">01 · About</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          A short background
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I started out automating 4G/5G test-release pipelines at Nokia
              and building enterprise UIs at HCL, then moved into fast-moving
              product engineering with a focus on AI-powered development.
            </p>
            <p>
              Since then I&apos;ve shipped production tools like{" "}
              <span className="text-zinc-200">VexonAI</span>,{" "}
              <span className="text-zinc-200">ShiftLink</span> and{" "}
              <span className="text-zinc-200">EquiGen</span>, and had{" "}
              <span className="text-zinc-200">80+ accepted pull requests</span>{" "}
              across a dozen open-source projects - from reverse-proxy
              infrastructure to low-code platforms.
            </p>
            <p>
              I care about ownership, clean TypeScript and shippable things.
              When I&apos;m not building, I&apos;m reading production code or
              contributing upstream.
            </p>
          </div>

          <ul className="h-max divide-y divide-line border-y border-line">
            {facts.map((f) => (
              <li
                key={f.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {f.label}
                </span>
                <span className="font-mono text-xs text-zinc-300 sm:text-right">
                  {f.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
