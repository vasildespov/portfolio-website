import {About} from "@/components/about";
import {Header} from "@/components/header/header";
import {Intro} from "@/components/intro";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <Header />
      <Intro />
      <About />
    </>
  );
}
