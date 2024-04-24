"use client";
import { MutableRefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: MutableRefObject<null>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
};
