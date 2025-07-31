"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {useRef} from "react";

export function Intro() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const copyRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const {words} = SplitText.create(titleRef.current, {
      type: "words,chars",
      charsClass: "transition-opacity hover:opacity-80"
    });
    const {chars} = SplitText.create(subtitleRef.current, {
      type: "chars",
      mask: "chars"
    });

    gsap
      .timeline()
      .from(words, {
        y: "500px",
        stagger: 0.1,
        delay: 0.1
      })
      .from(chars, {
        x: "-100px"
      })
      .to([titleRef.current, subtitleRef.current], {autoAlpha: 1}, 0)
      .to(copyRef.current, {autoAlpha: 1})
      .from(buttonsRef.current, {y: "15px"}, "<")
      .to(buttonsRef.current, {autoAlpha: 1}, "<");
  });

  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-10">
      <div className="flex w-full flex-col overflow-hidden lg:items-center">
        <span ref={subtitleRef} className="intro-subtitle">
          frontend developer.
        </span>
        <h1 ref={titleRef} className="intro-title">
          vasil despov
        </h1>
      </div>
      <p ref={copyRef} className="invisible w-full lg:text-center">
        4+ years of professional experience crafting responsive & performant web
        applications.
        <br /> Focused on clean code, accessibility, and pixel-perfect
        implementation.
      </p>
      <div
        ref={buttonsRef}
        className="invisible mt-5 flex w-full gap-4 lg:justify-center"
      >
        <button className="btn">see my work</button>
        <button className="btn btn-dash">contact me</button>
      </div>
    </section>
  );
}
