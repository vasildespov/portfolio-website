import {useEffect, useState} from "react";

type Breakpoints = "(max-width: 1024px)" | (string & {});

export function useMediaQuery(query: Breakpoints) {
  const [isMatch, setIsMatch] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 1024px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    function onChange() {
      setIsMatch(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", onChange, false);
    onChange();

    return () => mediaQuery.removeEventListener("change", onChange, false);
  }, [query]);

  return isMatch;
}
