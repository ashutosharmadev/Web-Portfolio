import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { CursorGlow, MotionMarquee, ScrollProgress } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <MotionMarquee />
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
