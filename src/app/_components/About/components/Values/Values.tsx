import { FC } from "react";
import Image from "next/image";
import cn from "classnames";

import { IconEnum } from "@/types";
import values from "@/lib/values.json";

import { Value } from "..";
import styles from "./Values.module.scss";

const icons = [
  IconEnum.CIRCLE,
  IconEnum.GLOBAL,
  "",
  "",
  IconEnum.CPU,
  IconEnum.RANK,
];

const formattedData = values.map((el, index) => ({
  ...el,
  icon: icons[index],
}));

const Values: FC = () => {
  const classNames = (className?: string) =>
    cn(styles["values-list__item"], className);

  return (
    <ul className={styles["values-list"]}>
      {formattedData.map((el, i) => {
        if (el.image && el.alt)
          return (
            <li key={i} className={classNames(styles["image-item"])}>
              <Image
                src={el.image}
                alt={el.alt}
                priority={true}
                fill
                sizes="(max-width: 1439px) 344px, 596px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUZmGqBwABJQCqEJ2nngAAAABJRU5ErkJggg=="
              />
            </li>
          );
        if (el.icon && el.text && el.title)
          return (
            <li key={i} className={classNames()}>
              <Value {...el} />
            </li>
          );
        return null;
      })}
    </ul>
  );
};

export default Values;
