import {Intro} from "@/components/intro";
import {Navbar} from "@/components/navbar/navbar";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <ReactLenis root options={{duration: 1.5}} />
      <Intro />
    </>
  );
}
