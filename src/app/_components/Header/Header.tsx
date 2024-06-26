"use client";
import { FC, useEffect, useState } from "react";
import cn from "classnames";

import { scrollTo } from "@/utils";
import { useNav } from "@/hooks";
import { IconEnum, SectionsId } from "@/types";
import { Logo, Menu, UIButton } from "@/components";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const headerRef = useNav(SectionsId.HEADER);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onHandleNavBtnClick = () => {
    scrollTo(SectionsId.CONTACT_US);
  };

  useEffect(() => {
    const onHandleScroll = () => {
      setTimeout(() => {
        setScrollTop(document.documentElement.scrollTop);
      }, 100);
    };

    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  const onHandleMenuClick = () => {
    setMenuIsActive(true);
  };

  const headerClassNames = cn(styles["header"], {
    [styles["header--accent"]]: scrollTop > 0,
  });
  return (
    <>
      <header
        id={SectionsId.HEADER}
        className={headerClassNames}
        ref={headerRef}
      >
        <div className={`container ${styles["header__wrapper"]}`}>
          <Logo />
          <div className={styles["wrapper"]}>
            <UIButton
              classNames={styles["button-menu"]}
              onClick={onHandleMenuClick}
              variant="icon"
              iconSize={16}
              icon={IconEnum.MENU}
              aria-label="Menu"
            />

            <UIButton
              onClick={onHandleNavBtnClick}
              classNames={styles["button-touch"]}
              variant="contained"
              iconSize={7}
              iconClassNames={styles["icon"]}
              icon={IconEnum.ARROW}
            >
              Get in touch
            </UIButton>
          </div>
        </div>
      </header>
      <Menu active={menuIsActive} setActive={setMenuIsActive} />
    </>
  );
};

export default Header;
