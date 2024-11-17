import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-[20]">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Cryptivo.png"
          title="Cryptivo"
          ActileLink="https://cryptivo.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/Cryptivo"
          description="A next-generation, decentralized digital currency designed to provide fast, secure, and efficient transactions on the blockchain. With a focus on transparency, low transaction fees, and interoperability."
          techstack="reactJs, NodeJs, JavaScript, Tailwind"
        />
        <ProjectCard
          src="/DevScrypt.png"
          title="DevScrypt"
          ActileLink=""
          GithubLink="https://github.com/Pallavikumarimdb/DevScrypt"
          description="An innovative platform tailored specifically for freelance crypto developers. It provides a unique space where blockchain and cryptocurrency developers can connect with clients who need their specialized skills."
          techstack="reactJs, NodeJs, JavaScript, Tailwind"
        />
        <ProjectCard
          src="/crms.png"
          title="CRMS"
          ActileLink="https://hcl-crms-vki1.vercel.app/FIRForm"
          GithubLink="https://github.com/Pallavikumarimdb/HCL-CRMS"
          description="Crime record management system aims at creating a comprehensive and integrated system for enhancing the efficiency and effective policing especially at the Police Station level through adoption of technology."
          techstack="reactJs, NodeJs, MongoDB, ExpressJS"
        />
        <ProjectCard
          src="/chromeExt.png"
          title="AiDrop"
          ActileLink=""
          GithubLink="https://github.com/Pallavikumarimdb/AiDrops--Chrome-Extension"
          description="Chrome extension, allows users to generate AI-generated images/text using the Pollinations API. With AiDrop, you can simply input your desired prompt, generate a unique image, and text, all from the comfort of your browser."
          techstack="JavaScript, HTML, CSS, json"
        />
      </div>
      <div
        className="mt-10 px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-[20]"
      >
        <a href="#">Mini Projects</a>
      </div>
    </div>  
  );
};

export default Projects;
