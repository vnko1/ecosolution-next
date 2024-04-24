import { FC } from "react";

import { IconEnum, SectionsId } from "@//types";
import { UIButton } from "@/components";

import { ContactUsProps } from "./ContactUs.type";
import styles from "./ContactUs.module.scss";

const ContactUs: FC<ContactUsProps> = ({ classNames }) => {
  return (
    <div className={`${styles["contact-us"]} ${classNames}`}>
      <p className={styles["text"]}>
        Didn&apos;t find the answer to your question?
      </p>
      <UIButton
        variant="contained"
        href={styles[`/#${SectionsId.CONTACT_US}`]}
        icon={IconEnum.ARROW}
        classNames={styles["button"]}
        iconClassNames={styles["icon"]}
        iconSize={7}
      >
        Contact Us
      </UIButton>
    </div>
  );
};

export default ContactUs;
