import React from "react";
import ProjectCard from "../sub/ProjectCard";
import note from "../../public/home.png"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 z-[20]">
        Projects
      </h1>
      <div className="flex flex-wrap md:flex-row gap-16 ml-[20%]">
      <ProjectCard
          src="/invocraft.png"
          title="InvoCraft"
          ActileLink="https://invocraft-ashy.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/invocraft"
          description="Streamlining business operations with Invoice & Customer Management Portal."
          techstack="NextJS, NestJs, Typescript, Tailwind, pdfKit"
        />
        <ProjectCard
          src="/embedded.png"
          title="SimulateCircuit"
          ActileLink="https://github.com/Pallavikumarimdb/Simulate-Circuit"
          GithubLink="https://github.com/Pallavikumarimdb/Simulate-Circuit"
          description="Embedded development platform that generates, optimizes, and simulates microcontroller Code."
          techstack="NextJS, NodeJs, Typescript, Tailwind, GeminiAPI"
        />
      <ProjectCard
          src="/home.png"
          title="@Note"
          ActileLink="https://mind-map-nine-sandy.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/MindMap"
          description="@note👨‍💻 a modern, user-friendly note-taking application that allows users to create, manage, and organize their notes effortlessly."
          techstack="reactJs, NodeJs, Typescript, Tailwind"
        />
        <ProjectCard
          src="/codewave.png"
          title="CodeWaveAI"
          ActileLink="https://code-wave-ai.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/CodeWaveAI"
          description="A Bolt-like application where users can prompt and generate websites. "
          techstack="reactJs, NodeJs, Typescript, Tailwind, GeminiAPI/ClaudeAPI"
        />
        <ProjectCard
          src="/ochiLanding.png"
          title="MoterCar"
          ActileLink="https://motor-car-ochre.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/Landing-Pages/tree/main/apps/motor-car"
          description="Landing Page for Car agency inspired by ochi Designs."
          techstack="NextJs, Typesctipt, Tailwind, Framer-motion"
        />
        <ProjectCard
          src="/Thirtysixstudio.png"
          title="Thirtysixstudio"
          ActileLink="https://lightning-fast.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/Landing-Pages/tree/main/apps/lightning-fast"
          description="Landing Page Clone of Thirtysixstudio Designs."
          techstack="NextJs, Typesctipt, Tailwind, Framer-motion"
        />
        <ProjectCard
          src="/Cryptivo.png"
          title="Cryptivo"
          ActileLink="https://cryptivo.vercel.app/"
          GithubLink="https://github.com/Pallavikumarimdb/Cryptivo"
          description="Landing Page for next-generation, decentralized digital currency designed to provide fast, secure, and efficient transactions on the blockchain. With a focus on transparency, low transaction fees, and interoperability."
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
      {/* <div
        className="mt-10 px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-[20]"
      >
        <a href="https://github.com/Pallavikumarimdb/AI_and_ML--MiniProjects">Mini Projects</a>
      </div> */}
    </div>  
  );
};

export default Projects;
