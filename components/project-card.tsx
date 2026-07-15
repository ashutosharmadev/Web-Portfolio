"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const tech = ["React", "FastAPI", "OpenCV", "MediaPipe", "Python"];

export function ProjectCard() {
  return (
    <section id="project" className="section-padding px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Project"
            title="LiftLens"
            description="AI-Powered Physique Analysis & Fitness Progress Tracker"
          />
        </FadeIn>

        <FadeIn>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
          <Card className="glass overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  Primary Build
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  LiftLens
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                  LiftLens helps users track their fitness journey through
                  AI-powered physique analysis. Using computer vision, it
                  compares progress images over time, estimates body
                  proportions, and provides meaningful visual insights into
                  physique development.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-blue-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="secondary">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      <Github size={18} aria-hidden="true" /> GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="#" aria-label="Open LiftLens live demo">
                      Live Demo <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[360px] border-t border-white/10 bg-gradient-to-br from-accent/20 via-white/[0.05] to-transparent p-6 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.35),transparent_32rem)]" />
                <div className="relative h-full min-h-[310px] rounded-2xl border border-white/10 bg-background/70 p-5 shadow-2xl backdrop-blur">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="grid h-[250px] grid-cols-2 gap-4">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="h-full rounded-xl bg-gradient-to-b from-accent/30 to-white/[0.03]" />
                    </motion.div>
                    <div className="space-y-4">
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="mb-3 h-2 w-16 rounded-full bg-accent/70" />
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="mt-3 h-2 w-3/4 rounded-full bg-white/10" />
                      </motion.div>
                      <motion.div
                        animate={{ x: [0, -8, 0] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-xl bg-accent/20" />
                          <div className="h-16 rounded-xl bg-white/10" />
                          <div className="h-16 rounded-xl bg-cyan-300/15" />
                        </div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.75, 1, 0.75] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-blue-100"
                      >
                        Progress insight generated
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
