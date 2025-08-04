"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import React, {useRef} from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function About() {
  const container = useRef(null);
  const splitRef = useRef(null);

  useGSAP(
    () => {
      SplitText.create(splitRef.current, {
        type: "lines",
        autoSplit: true,
        linesClass: "relative",
        onSplit: split => {
          for (let i = 0; i < split.lines.length; i++) {
            const line = split.lines[i];
            const mask = document.createElement("span");
            mask.textContent = line.textContent;
            mask.className =
              "mask text-base-content absolute left-0 top-0 w-full";
            line.appendChild(mask);
          }

          gsap.from(".mask", {
            clipPath: "inset(0% 0% 100%)",
            stagger: 0.5,
            scrollTrigger: {
              trigger: container.current,
              scrub: true,
              start: "top center",
              end: "bottom bottom"
            }
          });
        }
      });
    },
    {scope: container}
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen flex-col justify-center px-5 lg:px-10"
    >
      <span ref={splitRef} className="copy">
        I have made significant contributions to software projects at leading
        companies including Amazon Robotics and Zebra Technologies, building
        systems that handle enterprise-level demands.
      </span>
    </section>
  );
}
