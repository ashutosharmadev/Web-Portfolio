import { Bot, Braces, Code, Database, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const skillGroups = [
  { title: "Languages", icon: Code, skills: ["Java", "Python", "JavaScript", "SQL"] },
  { title: "Frontend", icon: Braces, skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", icon: Database, skills: ["FastAPI", "REST APIs"] },
  { title: "AI", icon: Bot, skills: ["OpenCV", "MediaPipe"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="A focused toolkit for modern product engineering."
            description="Core technologies I use to build interfaces, APIs, and AI-powered workflows."
          />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.07}>
              <Card className="group h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                  <group.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
