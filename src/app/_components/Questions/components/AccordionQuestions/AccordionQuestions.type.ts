export type Question = {
  summary: string;
  details: string;
  expandValue: string;
};

export type AccordionQuestionsProps = { questions: Array<Question> };
