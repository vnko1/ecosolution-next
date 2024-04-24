import { Dispatch, SetStateAction } from "react";

export type MenuProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
};
