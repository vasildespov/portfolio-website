"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export function Intro() {
  useGSAP(() => {
    gsap.from(".intro-content", {
      y: "10%",
      opacity: 0,
      delay: 0.25,
      duration: 0.25
    });
  });

  return (
    <section className="bg-secondary text-secondary-foreground flex min-h-screen items-center px-5 lg:px-39">
      <div className="intro-content flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-2xl tracking-widest md:text-4xl">
            FRONTEND DEVELOPER
          </h2>
          <h1 className="text-6xl font-semibold md:text-8xl md:whitespace-nowrap">
            VASIL DESPOV
          </h1>
        </div>
        <p className="max-w-3xl text-lg font-medium">
          I am a Frontend Developer with 4+ years of professional experience.
          With dedication to pixel-perfect details, accessibility and clean
          code, I specialize in building responsive and performant web
          applications.
        </p>
      </div>
    </section>
  );
}
