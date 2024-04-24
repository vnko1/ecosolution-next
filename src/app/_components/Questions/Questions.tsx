import { FC } from "react";

import { SectionsId } from "@/types";
import { AccordionQuestions, ContactUs } from "./components";
import styles from "./Questions.module.scss";

import data from "@/lib/questions.json";

const Questions: FC = () => {
  return (
    <section
      id={SectionsId.QUESTIONS}
      className={`section ${styles["questions"]}`}
    >
      <div className={styles["questions__content"]}>
        <div className={styles["content__title"]}>
          <h2 className={styles["title"]}>Frequently Asked Questions</h2>
          <ContactUs classNames={`${styles["button"]} ${styles["btn"]}`} />
        </div>
        <div className={styles["content__accordion"]}>
          <AccordionQuestions questions={data} />
        </div>
        <ContactUs classNames={`${styles["button-mob"]} ${styles["btn"]}`} />
      </div>
    </section>
  );
};

export default Questions;
