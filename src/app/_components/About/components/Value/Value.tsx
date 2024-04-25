"use client";
import { FC } from "react";

import { useGetScreenSize } from "@/hooks";
import { Icon } from "@/components";

import { ValueProps } from "./Value.type";
import styles from "./Value.module.scss";

const Value: FC<ValueProps> = ({ icon, title, text }) => {
  const screenSize = useGetScreenSize();

  const isLaptopScreen = screenSize > 1179;

  const iconSize = isLaptopScreen ? 24 : 16;

  return (
    <div className={styles["value-wrapper"]}>
      <h3 className={styles["title"]}>
        <Icon icon={icon} size={iconSize} />
        {title}
      </h3>
      <p className={styles["text"]}>{text}</p>
    </div>
  );
};

export default Value;
