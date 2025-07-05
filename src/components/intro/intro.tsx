"use client";

import {useMediaQuery} from "@/lib/useMediaQuery";
import {motion} from "motion/react";
import Image from "next/image";

export function Intro() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center gap-10 px-4 lg:flex-row lg:gap-20 lg:px-8">
      <motion.div
        suppressHydrationWarning
        initial={{opacity: 0, y: isMobile ? 0 : "25%"}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.25, ease: "easeOut", type: "tween"}}
      >
        <h2 className="text-2xl font-medium">Frontend Web Developer</h2>
        <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl lg:whitespace-nowrap">
          Vasil Despov
        </h1>
        <p className="text-muted-foreground mt-5 max-w-lg">
          I am a&nbsp;
          <span className="text-accent-foreground font-bold">
            Frontend developer
          </span>
          &nbsp;with 4+ years of experience focused on delivering seamless,
          accessible and performant frontend solutions & web applications.
          <br /> I love exploring the latest technologies and am highly flexible
          and adaptive to new challenges.
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.25, ease: "easeOut", type: "tween"}}
      >
        <Image alt="developer" src="/hero.svg" width={500} height={500} />
      </motion.div>
    </section>
  );
}
