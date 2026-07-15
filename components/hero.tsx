"use client";

import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 88]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -46]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-28 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] top-44 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted backdrop-blur"
          >
            <Sparkles size={16} className="text-accent" />
            Building intelligent products with care
          </motion.div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            <RevealText text="Ashutosh Sharma" delay={0.12} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            Software Engineering Student at NSUT
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            Building AI-powered software and learning scalable engineering one
            project at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild>
              <a href="#project">
                View Project <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/resume.pdf" aria-label="Download resume PDF">
                Download Resume <Download size={18} aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: -1.5, scale: 1.015 }}
          className="relative mx-auto aspect-square w-full max-w-[430px] will-change-transform"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotate: [0, 2.5, 0], scale: [1, 1.025, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl shadow-black/40 backdrop-blur"
          />
          <div className="absolute inset-6 overflow-hidden rounded-[1.65rem] border border-accent/30 bg-[linear-gradient(135deg,rgba(59,130,246,0.28),rgba(24,24,27,0.25))] shadow-glow">
            <Image
              src="/ashutosh-profile.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 430px, 90vw"
              className="object-cover object-[50%_34%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            <motion.div
              animate={{ x: ["-130%", "130%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              className="absolute inset-y-0 w-24 rotate-12 bg-white/10 blur-xl"
            />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 top-12 rounded-2xl border border-white/10 bg-background/70 px-5 py-4 shadow-2xl backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Focus
            </p>
            <p className="mt-1 text-lg font-semibold">AI + Full Stack</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-8 rounded-2xl border border-white/10 bg-background/70 px-5 py-4 shadow-2xl backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Project
            </p>
            <p className="mt-1 text-lg font-semibold">LiftLens</p>
          </motion.div>
          <div className="pointer-events-none absolute inset-12 rounded-[1.5rem] ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
