import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectCard />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
