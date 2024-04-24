import { FC } from "react";
import Link from "next/link";

import { IconEnum } from "@/types";
import { Icon } from "@/components";

import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles["logo"]}>
      <Icon icon={IconEnum.LOGO} size={32} />
      <span className={styles["logo__name"]}>ecosolution</span>
      <span className={styles["logo__text"]}>
        <span className={styles["logo__text--accent"]}>
          GREENERGY
          <br />
        </span>
        FOR LIFE
      </span>
    </Link>
  );
};

export default Logo;
