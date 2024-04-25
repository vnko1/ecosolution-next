import { Dispatch, MutableRefObject, SetStateAction } from "react";
import Carousel from "react-multi-carousel";
import { Case } from "../../Cases.type";

export type SliderProps = {
  values: Case[];
  carouselRef: MutableRefObject<Carousel | null>;
  setStep: Dispatch<SetStateAction<number>>;
};
