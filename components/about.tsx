import { Brain, Code2, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  { icon: GraduationCap, label: "Information Technology at NSUT" },
  { icon: Code2, label: "Software Engineering and Full Stack Development" },
  { icon: Brain, label: "Artificial Intelligence and real-world problem solving" },
];

export function About() {
  return (
    <section id="about" className="section-padding px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Engineering useful software with a learning-first mindset."
            description="I am an Information Technology student at NSUT interested in software engineering, artificial intelligence, and full stack development."
          />
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <Card className="glass h-full p-7">
              <p className="text-lg leading-8 text-muted">
                Currently, I am building LiftLens, an AI-powered fitness
                progress tracker that uses computer vision to make physique
                analysis more visual and meaningful. I enjoy turning practical
                problems into polished products while strengthening scalable
                engineering habits.
              </p>
            </Card>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.08}>
                <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-card">
                  <item.icon
                    className="mb-8 text-accent transition-transform duration-300 group-hover:scale-110"
                    size={28}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-foreground/90">
                    {item.label}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
