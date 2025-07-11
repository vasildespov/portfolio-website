import {Background} from "@/components/background/";
import {Intro} from "@/components/intro";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root options={{duration: 1.5}} />
      <Intro />
      <Background />
    </>
  );
}
