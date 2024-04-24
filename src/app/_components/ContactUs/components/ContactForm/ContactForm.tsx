"use client";
import { FC, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { getValuesFromLS, removeDataFromLS } from "@/utils";
import { IconEnum } from "@/types";
import { UIButton } from "@/components";

import { Field } from "./components";
import { validationSchema } from "./validationSchema";
import { FormFields, FormValues } from "./ContactForm.type";
import styles from "./ContactForm.module.scss";

const formsData: FormFields = {
  fullName: {
    label: "* Full name:",
    placeholder: "John Rosie",
    component: "input",
  },
  email: {
    label: "* E-mail:",
    placeholder: "johnrosie@gmail.com",
    component: "input",
  },
  phone: { label: "* Phone:", placeholder: "380961234567", component: "input" },
  message: {
    label: "Message:",
    placeholder: "Your message",
    component: "textarea",
  },
};

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const keyValues = Object.keys(initialValues);

const ContactForm: FC = () => {
  const [values, setValues] = useState<null | FormValues>(null);
  const [showUMessage, setShowUMessage] = useState(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    values: values || initialValues,
    reValidateMode: "onChange",
  });
  const { reset, handleSubmit } = methods;

  useEffect(() => {
    setValues(
      getValuesFromLS<FormValues>(
        initialValues,
        "fullName",
        "email",
        "phone",
        "message"
      )
    );
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("🚀 ~ data:", data);
    setShowUMessage(true);
    removeDataFromLS("fullName", "email", "phone", "message");
    reset(initialValues);
    setTimeout(() => {
      setShowUMessage(false);
      reset();
    }, 2000);
  };

  return (
    <div className={styles["contact-form"]}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["form__field"]}>
            {keyValues.map((el) => (
              <Field
                key={el}
                id={el}
                name={el}
                label={formsData[el as keyof FormValues].label}
                placeholder={formsData[el as keyof FormValues].placeholder}
                component={formsData[el as keyof FormValues].component}
              />
            ))}
          </div>
          <div className={styles["buttons"]}>
            <UIButton
              variant="outlined"
              type="submit"
              icon={IconEnum.ARROW}
              iconClassNames={styles["icon"]}
              iconSize={16}
              classNames={styles["button"]}
            >
              Send
            </UIButton>
            {showUMessage ? (
              <p className={styles["message"]}>Your message was sent</p>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
