"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import {useRef} from "react";

const md = "(min-width: 768px)";
export function Background() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(ref);
      mm.add(md, () => {
        gsap.to(".img-container", {
          y: "-15%",
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: "top bottom"
          }
        });
      });
    },
    {scope: ref}
  );

  return (
    <section ref={ref} className="relative flex h-[50vh]">
      <div className="img-container relative top-0 w-full md:fixed md:-z-1 md:min-h-[150vh]">
        <Image
          src="/background.jpg"
          alt="background image"
          fill
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
