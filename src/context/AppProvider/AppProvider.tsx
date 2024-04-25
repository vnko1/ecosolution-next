"use client";
import { FC, ReactNode, useState } from "react";
import { AppContext } from "./hook";

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");
  return (
    <AppContext.Provider value={{ activeLinkId, setActiveLinkId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
