"use client";

import {motion} from "motion/react";

export function Intro() {
  return (
    <section className="flex min-h-dvh">
      <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.25, delay: 0.25}}
        className="m-auto flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-8xl font-extrabold tracking-tight">Vasil Despov</h1>
        <h2 className="text-4xl font-bold">Frontend Developer</h2>
        <p className="text-muted-foreground mt-5 max-w-3xl">
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
    </section>
  );
}
