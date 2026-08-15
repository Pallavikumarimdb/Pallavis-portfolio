import React from "react";
import { NavLinks, Socials } from "@/constants";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub className="h-[15px] w-[15px]" />,
  linkedin: <FiLinkedin className="h-[15px] w-[15px]" />,
  twitter: <FiTwitter className="h-[15px] w-[15px]" />,
};

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-5 py-9 sm:flex-row">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} Pallavi Kumari
        </p>
        <div className="flex items-center gap-6">
          {NavLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden font-mono text-[11px] text-zinc-500 transition-colors hover:text-zinc-100 sm:inline"
            >
              {l.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
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
    </footer>
  );
};

export default Footer;
