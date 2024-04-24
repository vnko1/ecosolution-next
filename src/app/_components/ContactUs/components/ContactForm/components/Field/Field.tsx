import React, { ChangeEvent, FC } from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

import { setDataToLS } from "@/utils";
import { FieldProps } from "./Field.type";
import styles from "./Field.module.scss";

const Field: FC<FieldProps> = ({
  id,
  classNames,
  label,
  name,
  type = "text",
  value,
  component = "input",
  placeholder,
  inputProps,
  textareaProps,
}) => {
  const { register, setValue, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    setValue(name, value);
    setDataToLS(name, value);
  };

  const formClassnames = (
    baseClassNames: string,
    additionalClassName?: string
  ) =>
    cn(
      baseClassNames,
      {
        [styles["error"]]: error,
      },
      additionalClassName
    );

  return (
    <label htmlFor={id} className={`${styles["field__label"]} ${classNames}`}>
      <span className={styles["label-text"]}>{label}</span>
      {component === "input" ? (
        <input
          {...inputProps}
          {...register(name)}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          className={formClassnames(styles["field__input"])}
          onChange={handleChange}
        />
      ) : (
        <textarea
          {...textareaProps}
          {...register(name)}
          id={id}
          value={value}
          placeholder={placeholder}
          className={formClassnames(styles["field__input"], styles["textarea"])}
          onChange={handleChange}
        />
      )}
      {error ? (
        <span className={formClassnames(styles["error-text"])}>
          {error.message}
        </span>
      ) : null}
    </label>
  );
};

export default Field;
