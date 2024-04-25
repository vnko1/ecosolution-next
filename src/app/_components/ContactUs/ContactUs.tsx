"use client";
import { FC } from "react";

import { SectionsId } from "@/types";
import { useNav } from "@/hooks";
import { Contacts, ContactForm } from "./components";
import styles from "./ContactUs.module.scss";

const ContactUs: FC = () => {
  const contactUsRef = useNav(SectionsId.CONTACT_US);
  return (
    <section
      ref={contactUsRef}
      id={SectionsId.CONTACT_US}
      className={`section-paddings ${styles["contact-us"]}`}
    >
      <h2 className={styles["title"]}>Contact us</h2>
      <div className={styles["contact-us__wrapper"]}>
        <div className={styles["contacts"]}>
          <Contacts />
        </div>
        <div className={styles["form"]}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
