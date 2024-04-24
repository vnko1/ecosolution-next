"use client";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type AppContextValues = {
  activeLinkId: string;
  setActiveLinkId: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextValues | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext)
    throw new Error(
      "useAppContext has to be used within <AppContext.Provider>"
    );
  return appContext;
};
