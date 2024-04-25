import { ReactNode } from "react";

export type NavLinkProps = {
  icon: string;
  size: number;
  classNames?: string;
  link?: string;
  children?: ReactNode;
  target?: string;
  rel?: string;
};
