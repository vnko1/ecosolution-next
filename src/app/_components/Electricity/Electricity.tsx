"use client";
import { FC, useEffect, useState } from "react";

import { useNav } from "@/hooks";
import { SectionsId } from "@/types";
import { getDataFromLS, setDataToLS } from "@/utils";

import styles from "./Electricity.module.scss";

const initialValue = 1134147814;

const Electricity: FC = () => {
  const electricityRef = useNav(SectionsId.ELECTRICITY);
  const [eValue, setEValue] = useState<null | number>(null);

  useEffect(() => {
    const initialState = getDataFromLS("value")
      ? Number(getDataFromLS("value"))
      : initialValue;

    setEValue(initialState);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setEValue((state) => {
        if (state) return (state += 1);
        return state;
      });
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    eValue && setDataToLS("value", eValue);
  }, [eValue]);

  return (
    <section
      id={SectionsId.ELECTRICITY}
      className="section"
      ref={electricityRef}
    >
      <h2 className={styles["title"]}>
        Electricity we produced <br /> for all time
      </h2>
      <p className={styles["text"]}>
        <span className={styles["text__value"]}>
          {eValue && eValue.toLocaleString("de-DE")}
        </span>
        <span className={styles["text__unit"]}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
