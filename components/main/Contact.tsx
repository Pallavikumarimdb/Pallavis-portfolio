import React from "react";
import { Contact, Socials } from "@/constants";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FiGithub className="h-[16px] w-[16px]" />,
  linkedin: <FiLinkedin className="h-[16px] w-[16px]" />,
  twitter: <FiTwitter className="h-[16px] w-[16px]" />,
};

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-line py-20">
      <div className="container-x">
        <p className="label">06 · Contact</p>
        <h2 className="mt-5 font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-zinc-400">
          Interested in working together, or just want to talk shop? Feel free
          to reach out - my inbox is open.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${Contact.email}`}
            className="border-b border-zinc-600 pb-0.5 font-mono text-sm text-zinc-200 transition-colors hover:border-zinc-300 hover:text-zinc-100"
          >
            {Contact.email}
          </a>
          <div className="flex items-center gap-5">
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
      </div>
    </section>
  );
};

export default ContactSection;
