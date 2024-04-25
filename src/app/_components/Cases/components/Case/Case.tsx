import { FC } from "react";
import Image from "next/image";
import { IconEnum } from "@/types";
import { UIButton } from "@/components";

import { CaseProps } from "./Case.type";
import styles from "./Case.module.scss";

const Case: FC<CaseProps> = ({ image, alt, title, text, date }) => {
  return (
    <div className={styles["case"]}>
      <div className={styles["case__image-thumb"]}>
        <Image
          src={image}
          alt={alt}
          loading="lazy"
          width={596}
          height={336}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUZmGqBwABJQCqEJ2nngAAAABJRU5ErkJggg=="
        />
      </div>
      <div className={styles["case__content"]}>
        <div className={styles["content__top"]}>
          <p className={styles["title"]}>{title}</p>
          <UIButton
            onClick={() => {}}
            variant="icon"
            icon={IconEnum.ARROW}
            classNames={`${styles["button"]} ${styles["button-icon"]}`}
            iconClassNames={styles["button__icon"]}
            iconSize={28}
            aria-label="Arrow"
          />
        </div>
        <div className={styles["content__bottom"]}>
          <p className={styles["text"]}>{text}</p>
          <p className={styles["date"]}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Case;
