"use client";

import React from "react";
import { Contact, Socials } from "@/constants";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub className="h-[16px] w-[16px]" />,
  linkedin: <FiLinkedin className="h-[16px] w-[16px]" />,
  twitter: <FiTwitter className="h-[16px] w-[16px]" />,
};

const HeroContent = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="container-x flex min-h-[72vh] flex-col justify-center py-28">
        <p className="label animate-fade-up">Pallavi Kumari - Portfolio</p>

        <h1
          className="mt-5 max-w-2xl animate-fade-up font-serif text-4xl font-medium leading-tight tracking-tight text-zinc-100 sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Full-stack engineer building web and AI products.
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-[15px] leading-relaxed text-zinc-400"
          style={{ animationDelay: "0.2s" }}
        >
          I&apos;m Pallavi - I design, build and ship production-grade
          applications end-to-end, and I contribute upstream to open source.
          Currently exploring LLM-powered developer tooling.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={Contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-zinc-600 pb-0.5 font-mono text-sm text-zinc-200 transition-colors hover:border-zinc-300 hover:text-zinc-100"
          >
            resume
          </a>
          <a
            href={`mailto:${Contact.email}`}
            className="font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-200"
          >
            {Contact.email}
          </a>
        </div>

        <div
          className="mt-9 flex items-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {Socials.map((s) => (
            <a
              key={s.key}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              {socialIcons[s.key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
