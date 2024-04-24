import { FC } from "react";

import { SectionsId } from "@/types";

import { Values } from "./components";

import styles from "./About.module.scss";

const About: FC = () => {
  return (
    <section id={SectionsId.ABOUT} className="section">
      <div className={styles["about__container"]}>
        <div className={styles["container__title"]}>
          <h2 className={styles["title"]}>Main values of our company</h2>
        </div>
        <div className={styles["container__text"]}>
          <p className={styles["text"]}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&apos;s energy needs.
          </p>
        </div>
      </div>
      <Values />
    </section>
  );
};

export default About;
