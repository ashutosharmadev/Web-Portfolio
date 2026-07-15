"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const milestones = [
  {
    year: "2024",
    text: "Started B.Tech in Information Technology at NSUT",
  },
  {
    year: "2025",
    text: "Explored Full Stack Development and AI",
  },
  {
    year: "2026",
    text: "Building LiftLens while strengthening DSA and software engineering skills",
  },
  {
    year: "2027",
    text: "Seeking Software Engineering Internship",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="section-padding px-4">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Journey"
            title="A clear path toward software engineering."
          />
        </FadeIn>
        <div className="relative mx-auto max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-white/20 to-transparent sm:left-1/2"
          />
          <div className="space-y-10">
            {milestones.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.08}>
                <article className="relative grid gap-4 pl-12 sm:grid-cols-2 sm:gap-10 sm:pl-0">
                  <div className={index % 2 === 0 ? "sm:text-right" : "sm:col-start-2"}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 280, damping: 18, delay: index * 0.08 }}
                      className="absolute left-[9px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background shadow-glow sm:left-[calc(50%-6px)]"
                    />
                    <span className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                      {item.year}
                    </span>
                    <p className="mt-3 rounded-2xl border border-white/10 bg-card/70 p-5 text-sm leading-6 text-muted backdrop-blur">
                      {item.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
