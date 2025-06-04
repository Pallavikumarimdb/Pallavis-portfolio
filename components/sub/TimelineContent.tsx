import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/main/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "06/2022 – 05/2023",
      content: (
        <div className="relative select-text z-[20]">
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl">Nokia Solutions and Networks - (Student Trainee) <a href="https://icons8.com/icon/57GgOxl1VjRW/external-link" target="_blank"><span>🔗</span></a></h1><br></br>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Led the automation of functional and integration test cases using a
            Python-based framework, ensuring accuracy and efficiency in testing
            processes
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Engaged in ORAN (4G and 5G) projects, performing security operations,
            productization, and stabilization tasks to support next-generation network
            technologies.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Executed Customer Release Testing (CRT) for ORAN and RNC, final product met
            customer requirements and quality standards before release
          </li>
          <div className="grid grid-cols-2 gap-3">
          </div>
        </div>
      ),
    },
    {
      title: "01/2022 – 5/2022",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl">HCL Technologies - (Full-stack Intern) <a href="#">🔗</a></h1><br></br>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Utilized the MERN stack, specifically React.js, to develop dynamic and
            responsive front-end components, ensuring a smooth and interactive user
            interface.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Developed and managed server-side logic using Node.js and Express.js,
            ensuring efficient handling of client requests and smooth integration with
            front-end elements.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Created MongoDB Database using Atlus and Integrated RESTful APIs to enable communication between
            the front-end and back-end, ensuring smooth data flow and functionality.
          </li>
          <div className="grid grid-cols-2 gap-3">
          </div>
        </div>
      ),
    },
    {
      title: "Learning in progress",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-3xl">
          Ongoing Projects👨🏻‍💻 I’m Working On
          </h1><br></br>

          <div className="mb-8">
            <li className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ⏳ CodeWaveAI : Chat and AI Code Generation platform
            </li>
            <li className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🚧 @Note : A modern, user-friendly note-taking application
            </li>
            <li className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ⏳ Learning new Tech Stacks : Cohort 3.0
            </li>
          </div>
          <div className="grid grid-cols-2 gap-3">
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
