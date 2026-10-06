"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks, Socials, Contact } from "@/constants";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub className="h-[16px] w-[16px]" />,
  linkedin: <FiLinkedin className="h-[16px] w-[16px]" />,
  twitter: <FiTwitter className="h-[16px] w-[16px]" />,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-serif text-[16px] text-zinc-100 whitespace-nowrap tracking-tight hover:text-white transition-colors shrink-0"
        >
          Pallavi Kumari
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {NavLinks.map((link) => {
            const resolvedHref = getHref(link.href);
            const isRouteActive =
              link.href.startsWith("/") && pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={resolvedHref}
                  className={`font-mono text-xs whitespace-nowrap transition-colors hover:text-zinc-100 ${
                    isRouteActive
                      ? "text-zinc-100 font-semibold"
                      : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: Socials + Resume */}
        <div className="hidden items-center gap-3.5 md:flex shrink-0">
          <div className="flex items-center gap-3">
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

          <span className="h-3.5 w-px bg-line" aria-hidden="true" />

          <a
            href={Contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-line bg-panel/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
          >
            resume/
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="text-zinc-400 md:hidden p-1.5 hover:text-zinc-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-5xl px-6 py-3 flex flex-col">
            {NavLinks.map((link) => {
              const resolvedHref = getHref(link.href);
              const isRouteActive =
                link.href.startsWith("/") && pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={resolvedHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2.5 font-mono text-xs transition-colors hover:text-zinc-100 ${
                    isRouteActive
                      ? "text-zinc-100 bg-panel/70 font-medium"
                      : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
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
                className="ml-auto rounded border border-line bg-panel/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
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
