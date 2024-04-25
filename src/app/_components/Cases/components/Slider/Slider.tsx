import { FC } from "react";
import Carousel, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Case from "../Case/Case";
import { SliderProps } from "./Slider.type";
import styles from "./Slider.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 8000, min: 1280 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider: FC<SliderProps> = ({ values, setStep, carouselRef }) => {
  const onHandleSteps = (
    nextSlide: number,
    { currentSlide }: CarouselInternalState
  ) => {
    if (currentSlide > nextSlide)
      return setStep((step) => {
        if (step === 1) return 5;
        return (step -= 1);
      });

    return setStep((step) => {
      if (step >= values.length) return 1;
      return (step += 1);
    });
  };
  return (
    <Carousel
      ref={carouselRef}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3000}
      transitionDuration={500}
      shouldResetAutoplay
      beforeChange={onHandleSteps}
      arrows={false}
      sliderClass={styles["slider"]}
      itemClass={styles["slider__item"]}
    >
      {values.map((el, i) => (
        <Case key={i} {...el} />
      ))}
    </Carousel>
  );
};

export default Slider;
