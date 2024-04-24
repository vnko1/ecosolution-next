"use client";
import { useEffect, useRef } from "react";

export const useGetScreenSize = () => {
  const screen = useRef(0);
  useEffect(() => {
    screen.current = window?.innerWidth;
  }, []);

  return screen.current;
};
