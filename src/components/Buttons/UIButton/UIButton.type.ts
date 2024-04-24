import { ButtonHTMLAttributes, ReactNode } from "react";

export type UIButtonProps = {
  children?: ReactNode;
  variant: "contained" | "outlined" | "text" | "icon";
  classNames?: string;
  icon?: string;
  iconSize?: number;
  iconClassNames?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
