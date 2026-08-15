"use client";

import React, { useState } from "react";
import { NavLinks, Socials, Contact } from "@/constants";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub className="h-[16px] w-[16px]" />,
  linkedin: <FiLinkedin className="h-[16px] w-[16px]" />,
  twitter: <FiTwitter className="h-[16px] w-[16px]" />,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="container-x flex h-14 items-center justify-between">
        <a href="#top" className="font-serif text-[17px] text-zinc-100">
          Pallavi Kumari
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-100"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
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
          <a
            href={Contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-zinc-200 transition-colors hover:text-zinc-100"
          >
            resume/
          </a>
        </div>

        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col py-3">
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-5 border-t border-line px-2 pt-4">
              {Socials.map((s) => (
                <a
                  key={s.key}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="text-zinc-500 hover:text-zinc-100"
                >
                  {socialIcons[s.key]}
                </a>
              ))}
              <a
                href={Contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-auto font-mono text-xs text-zinc-200"
              >
                resume/
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
