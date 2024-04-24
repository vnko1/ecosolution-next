import { FC } from "react";

import { IconEnum } from "@/types";
import { NavLink } from "@/components";
import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
  return (
    <div className={styles["contacts"]}>
      <div>
        <p className={styles["label"]}>Phone</p>
        <ul className={styles["links"]}>
          <li>
            <NavLink
              aria-label="Phone"
              link="tel:+380931234567"
              icon={IconEnum.CALL}
              size={24}
            >
              38 (093) 12 34 567
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="Phone"
              link="tel:+380931234567"
              icon={IconEnum.CALL}
              size={24}
            >
              38 (093) 12 34 567
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p className={styles["label"]}>E-mail:</p>
        <div className={styles["links"]}>
          <NavLink
            aria-label="Mail"
            link="mailto:office@ecosolution.com"
            icon={IconEnum.SMS}
            size={24}
          >
            office@ecosolution.com
          </NavLink>
        </div>
      </div>
      <div>
        <p className={styles["label"]}>Address:</p>
        <div className={styles["links"]}>
          <NavLink
            aria-label="Location"
            link="https://maps.app.goo.gl/UTyEsA13qhB9x7LTA"
            icon={IconEnum.CALL}
            size={24}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </NavLink>
        </div>
      </div>
      <div>
        <p className={styles["label"]}>Social Networks:</p>
        <div className={`${styles["links"]} ${styles["soc"]}`}>
          <NavLink
            aria-label="Facebook"
            icon={IconEnum.FACEBOOK}
            size={24}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
          <NavLink
            aria-label="Instagram"
            icon={IconEnum.INSTAGRAM}
            size={24}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
