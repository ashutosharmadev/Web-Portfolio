import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const links = [
  { label: "GitHub", href: "https://github.com/ashutosharmadev", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashutoshsharma-dev", icon: Linkedin },
  { label: "Email", href: "mailto:9sharmaa@gmail.com", icon: Mail },
  { label: "Resume", href: "/resume.pdf", icon: Download },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something useful."
            description="Open to internship opportunities, project collaborations, and thoughtful engineering conversations."
          />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => (
            <FadeIn key={link.label} delay={index * 0.07}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Open ${link.label}`}
                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Card className="h-full p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:bg-card">
                  <link.icon
                    className="mb-8 text-accent transition-transform duration-300 group-hover:scale-110"
                    size={28}
                    aria-hidden="true"
                  />
                  <p className="font-semibold">{link.label}</p>
                  <p className="mt-2 text-sm text-muted">Connect</p>
                </Card>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
