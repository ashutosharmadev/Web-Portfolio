"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const directions = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
};

export function FadeIn({ delay = 0, direction = "up", ...props }: FadeInProps) {
  const offset = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      {...props}
    />
  );
}

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            aria-hidden="true"
            className="mr-[0.22em] inline-block"
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * 0.055,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);

    if (!canHover) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 190);
      y.set(event.clientY - 190);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] h-[380px] w-[380px] rounded-full bg-accent/10 blur-3xl"
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
    />
  );
}

export function MotionMarquee() {
  const items = [
    "AI SOFTWARE",
    "FULL STACK",
    "COMPUTER VISION",
    "NEXT.JS",
    "FASTAPI",
    "LIFTLENS",
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.025] py-5">
      <motion.div
        aria-hidden="true"
        className="flex min-w-max gap-8 text-4xl font-semibold uppercase text-white/10 sm:text-6xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
