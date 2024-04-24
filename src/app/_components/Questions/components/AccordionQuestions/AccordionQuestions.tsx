"use client";
import { FC, SyntheticEvent, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { AccordionQuestionsProps } from "./AccordionQuestions.type";
import styles from "./AccordionQuestions.module.scss";

const AccordionQuestions: FC<AccordionQuestionsProps> = ({ questions }) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      {questions.map(({ summary, expandValue, details }, i) => {
        return (
          <Accordion
            key={i}
            expanded={expanded === expandValue}
            onChange={handleChange(expandValue)}
            disableGutters
            square
            className={`${styles["accordion"]} ${styles["box"]}`}
            elevation={0}
          >
            <div className={styles["accordion__wrapper"]}>
              <span
                className={`${styles["icon"]} ${
                  expanded === expandValue ? "" : styles["icon--accent"]
                }`}
              >
                {expanded === expandValue ? "-" : "+"}
              </span>
              <AccordionSummary
                className={`${styles["wrapper__content"]} ${styles["content"]}`}
              >
                <h4 className={styles["summary"]}>{summary}</h4>
              </AccordionSummary>
            </div>
            <AccordionDetails
              className={`${styles["wrapper__content"]} ${styles["content"]} ${styles["pads"]}`}
            >
              <p className={styles["details"]}>{details}</p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default AccordionQuestions;
