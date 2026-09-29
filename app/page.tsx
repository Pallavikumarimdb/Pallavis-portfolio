import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import OpenSource from "@/components/main/OpenSource";
import LatestBlogs from "@/components/main/LatestBlogs";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <LatestBlogs />
      <Skills />
      <Contact />
    </main>
  );
}
