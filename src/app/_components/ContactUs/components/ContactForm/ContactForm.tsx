"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { getValuesFromLS, removeDataFromLS } from "@/utils";
import { IconEnum } from "@/types";
import { UIButton } from "@/components";
import { ContactsFormValue } from "./ContactForm.type";
import { validationSchema } from "./validationSchema";
import styles from "./ContactForm.module.scss";

const formsData = {
  fullName: { label: "* Full name:", placeholder: "John Rosie" },
  email: { label: "* E-mail:", placeholder: "johnrosie@gmail.com" },
  phone: { label: "* Phone:", placeholder: "380961234567" },
  message: { label: "Message:", placeholder: "Your message" },
};

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const keyValues = Object.keys(initialValues);

const ContactForm: FC = () => {
  const [values] = useState(
    getValuesFromLS<ContactsFormValue>(
      initialValues,
      "fullName",
      "email",
      "phone",
      "message"
    )
  );
  const [showUMessage, setShowUMessage] = useState(false);

  const onHandleSubmit = (
    values: ContactsFormValue,
    { resetForm }: FormikHelpers<ContactsFormValue>
  ) => {
    const trimmedValue = Object.keys(values).reduce(
      (acc, el) => ({
        [el]: values[el as keyof ContactsFormValue].trim(),
        ...acc,
      }),
      {}
    );

    console.log(trimmedValue);
    setShowUMessage(true);
    removeDataFromLS("fullName", "email", "phone", "message");
    resetForm({ values: initialValues });
    setTimeout(() => {
      setShowUMessage(false);
    }, 2000);
  };

  return (
    <div className={styles["contact-form"]}>
      <Formik
        initialValues={values}
        onSubmit={onHandleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, values }) => {
          return (
            <Form className={styles["form"]}>
              <div className={styles["form__field"]}>
                {keyValues.map((key, i) => {
                  if (key === "message")
                    return (
                      <TextField
                        key={i}
                        id={key}
                        name={key}
                        value={values[key]}
                        label={formsData[key].label}
                        placeholder={formsData[key].placeholder}
                        component="textarea"
                      />
                    );

                  return (
                    <TextField
                      key={i}
                      id={key}
                      name={key}
                      value={values[key as keyof ContactsFormValue]}
                      label={formsData[key as keyof ContactsFormValue].label}
                      placeholder={
                        formsData[key as keyof ContactsFormValue].placeholder
                      }
                    />
                  );
                })}
              </div>
              <div className={styles["form__wrapper"]}>
                <UIButton
                  variant="outlined"
                  type="submit"
                  icon={IconEnum.ARROW}
                  iconClassNames={styles["icon"]}
                  iconSize={16}
                  disabled={!isValid}
                  classNames={styles["button"]}
                >
                  Send
                </UIButton>
                {showUMessage ? (
                  <p className={styles["message"]}>Your message was sent</p>
                ) : null}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
