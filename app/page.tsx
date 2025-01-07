import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import {TimelineDemo} from "@/components/sub/TimelineContent";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <TimelineDemo />
        <Skills />
        <Encryption />
        {/* <TimelineDemo /> */}
      </div>
    </main>
  );
}
