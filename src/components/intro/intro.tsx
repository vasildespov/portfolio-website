"use client";

import {useGSAP} from "@gsap/react";
import {cva} from "class-variance-authority";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {CodeXml, Mail} from "lucide-react";
import {useRef} from "react";

const button = cva("relative flex justify-center overflow-hidden btn", {
  variants: {
    type: {
      work: "group/work-btn btn bg-base-content text-base-100",
      contact: "group/contact-btn btn-neutral"
    }
  }
});
const buttonText = cva("text-center transition duration-250", {
  variants: {
    type: {
      work: "group-hover/work-btn:translate-x-40",
      contact: "group-hover/contact-btn:translate-x-40"
    }
  }
});
const buttonIcon = cva(
  "absolute inset-0 z-20 flex -translate-x-40 items-center justify-center transition duration-250",
  {
    variants: {
      type: {
        work: "group-hover/work-btn:translate-x-0",
        contact: "group-hover/contact-btn:translate-x-0"
      }
    }
  }
);

export function Intro() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const copyRef = useRef(null);
  const buttonsRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);
  const splitTitleRef = useRef<SplitText>(null);

  useGSAP(() => {
    splitTitleRef.current?.revert();
    splitTitleRef.current = SplitText.create(titleRef.current, {
      type: "words,chars",
      charsClass: "transition-opacity hover:opacity-80"
    });

    const {chars} = SplitText.create(subtitleRef.current, {
      type: "chars",
      mask: "chars"
    });

    const copySplit = SplitText.create(copyRef.current, {
      type: "words",
      mask: "words"
    });

    timelineRef.current = gsap
      .timeline()
      .from(splitTitleRef.current.words, {
        yPercent: 210,
        stagger: 0.1,
        delay: 0.1
      })
      .from(chars, {
        xPercent: -100
      })
      .to([titleRef.current, subtitleRef.current], {autoAlpha: 1}, 0)
      .to(copyRef.current, {autoAlpha: 1})
      .fromTo(copySplit.words, {opacity: 0}, {opacity: 1, stagger: 0.01}, "<")
      .fromTo(
        buttonsRef.current,
        {yPercent: 50},
        {yPercent: 0, autoAlpha: 1},
        "<"
      );
  });

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 lg:px-10">
      <div className="flex w-full flex-col overflow-hidden lg:items-center">
        <span ref={subtitleRef} className="intro-subtitle">
          frontend developer.
        </span>
        <h1 ref={titleRef} className="intro-title">
          vasil despov
        </h1>
      </div>
      <p ref={copyRef} className="invisible w-full text-lg lg:text-center">
        4+ years of professional experience crafting responsive & performant web
        applications.
        <br /> Focused on clean code, accessibility, and pixel-perfect
        implementation.
      </p>
      <div
        ref={buttonsRef}
        className="invisible flex w-full gap-4 lg:justify-center"
      >
        <button className={button({type: "work"})}>
          <span className={buttonText({type: "work"})}>see my work</span>
          <div className={buttonIcon({type: "work"})}>
            <CodeXml />
          </div>
        </button>
        <button className={button({type: "contact"})}>
          <span className={buttonText({type: "contact"})}>contact me</span>
          <div className={buttonIcon({type: "contact"})}>
            <Mail />
          </div>
        </button>
      </div>
    </section>
  );
}
