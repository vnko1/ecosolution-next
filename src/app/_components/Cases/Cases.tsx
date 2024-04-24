"use client";
import { FC, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "@/extensions/number.extensions";

import { useNav } from "@/hooks";
import { IconEnum, SectionsId } from "@/types";
import { UIButton } from "@/components";
import data from "@/lib/cases.json";

import { Slider } from "./components";
import styles from "./Cases.module.scss";

const Cases: FC = () => {
  const casesRef = useNav(SectionsId.CASES);
  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = data.length;

  const carouselRef = useRef<Carousel | null>(null);

  const handleNext = () => {
    carouselRef.current && carouselRef.current.next(1);
  };

  const handleBack = () => {
    carouselRef.current && carouselRef.current.previous(1);
  };

  return (
    <section id={SectionsId.CASES} className="section" ref={casesRef}>
      <div className={styles["cases__container"]}>
        <div className={styles["cases__title"]}>
          <h2 className={styles["title"]}>Successful cases of our company</h2>
        </div>
        <div className={styles["cases__data"]}>
          <div className={styles["data"]}>
            <p className={styles["step-value"]}>
              {activeStep.addLeadingZero()}
              <span>/ {maxSteps.addLeadingZero()}</span>
            </p>
            <div className={styles["data__button"]}>
              <UIButton
                onClick={handleBack}
                variant="icon"
                iconSize={36}
                classNames={`${styles["button"]} ${styles["button-icon"]}`}
                icon={IconEnum.ARROW}
                aria-label="Arrow-left"
              />
              <UIButton
                onClick={handleNext}
                variant="icon"
                iconSize={36}
                iconClassNames={styles["button__icon"]}
                classNames={`${styles["button"]} ${styles["button-icon"]}`}
                icon={IconEnum.ARROW}
                aria-label="Arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
      <Slider values={data} setStep={setActiveStep} carouselRef={carouselRef} />
    </section>
  );
};

export default Cases;
