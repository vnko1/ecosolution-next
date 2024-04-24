"use client";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/context";
import { useOnScreen } from "../useOnScreen";

export const useNav = (navLinkId: string) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useAppContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnScreen, navLinkId]);

  return ref;
};
