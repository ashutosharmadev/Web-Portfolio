"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/65 px-4 backdrop-blur-2xl transition-all duration-300",
          scrolled ? "h-14 shadow-lg shadow-black/20" : "h-16",
        )}
      >
        <a
          href="#home"
          className="rounded-full px-2 text-sm font-semibold tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Ashutosh Sharma home"
        >
          AS
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href="#contact">Let&apos;s Connect</a>
        </Button>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/[0.05] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.header>
  );
}
