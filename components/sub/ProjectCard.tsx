import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  techstack: string;
  ActileLink: string;
  GithubLink: string;
}

const ProjectCard = ({ src, title, ActileLink, GithubLink, description, techstack}: Props) => {
  return (
    <>
        <div className="relative w-1/3 rounded-lg shadow-lg border border-[#2A0E61] z-[20]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain rounded-lg"
      />

      <div className="mt-auto relative p-4">
        <h1 className="text-1xl font-semibold text-white">{title}<a className="ml-5 float-right"href={ActileLink} target="_blank">🔗</a>  <a className="ml-8  float-right" href={GithubLink} target="_blank"><Image
             style={{display:"inline-block"}}
              src="/gitwhite.png"
              alt="githubLink"
              key="Github"
              width={24}
              height={24}
            /></a> </h1> 
        <p className="text-sm/[17px] mt-2 text-gray-300">{description}</p>
        <p className="text-sm/[25px] mt-2 text-zinc-500 font-bold">💡 {techstack}</p>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
