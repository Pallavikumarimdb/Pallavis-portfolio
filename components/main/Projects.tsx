import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10" id="projects">
      <h1 className="text-[32px] sm:text-[40px] font-semibold py-10 z-[20] text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:max-w-[60%] px-4 mx-auto">

          <ProjectCard
            src="/shiftlink.png"
            title="ShiftLink"
            ActileLink="https://shift-link.vercel.app/"
            GithubLink="https://github.com/Pallavikumarimdb/ShiftLink"
            description="Job board for international students to find part-time or odd jobs."
            techstack="NextJS, PostgreSQL, Prisma, Typescript, Tailwind, Gemini flash"
          />
          <ProjectCard
            src="/vexinai.png"
            title="VexonAI"
            ActileLink="https://vexon-ai.vercel.app/"
            GithubLink="https://github.com/Pallavikumarimdb/VexonAI"
            description="AI-powered developer tool that helps engineers understand, summarize, and navigate large codebases effortlessly."
            techstack="NextJS, Typescript, Octokit, LangChain, VectorEmbeddings, Gemini API, PostgreSQL, Prisma"
          />
          <ProjectCard
            src="/invocraft.png"
            title="InvoCraft"
            ActileLink="https://invocraft-ashy.vercel.app/"
            GithubLink="https://github.com/Pallavikumarimdb/invocraft"
            description="Streamlining business operations with Invoice & Customer Management Portal."
            techstack="NextJS, NestJs, Typescript, Tailwind, pdfKit"
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
            description="A Bolt-like application where users can prompt and generate websites."
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
            description="Landing Page for next-generation decentralized digital currency."
            techstack="reactJs, NodeJs, JavaScript, Tailwind"
          />
        </div>
      </div>

  );
};

export default Projects;
