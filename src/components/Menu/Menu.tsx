"use client";
import { FC, MouseEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import { useSwipe } from "@/hooks";
import { scrollTo } from "@/utils";
import { useAppContext } from "@/context";
import { IconEnum } from "@/types";
import { Icon, UIButton } from "@/components";

import { MenuProps } from "./Menu.type";
import styles from "./Menu.module.scss";

const navItem = ["Main", "About", "Cases", "FAQ", "Contact Us"];

const socItem = [
  { icon: IconEnum.FACEBOOK, link: "#" },
  { icon: IconEnum.INSTAGRAM, link: "#" },
];

const Menu: FC<MenuProps> = ({ setActive, active }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { activeLinkId } = useAppContext();

  const closeMenu = () => {
    setIsVisible(false);

    setTimeout(() => {
      setActive(false);
    }, 350);
  };

  useSwipe(closeMenu);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  useEffect(() => {
    const handlePressESC = (e: { code: string }) => {
      if (e.code === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  const renderNavButtons = (value: string) => {
    const id = value.split(" ").join("_").toLowerCase();

    const navButtonClassNames = cn(styles["nav-button"], {
      [styles["active"]]: activeLinkId === id,
    });

    const onHandleNavClick = (id: string) => {
      closeMenu();
      scrollTo(id);
    };

    return (
      <UIButton
        onClick={() => onHandleNavClick(id)}
        variant="text"
        classNames={navButtonClassNames}
        icon={IconEnum.ARROW}
        iconSize={16}
        iconClassNames={styles["nav-icon"]}
      >
        {value}
      </UIButton>
    );
  };

  const backdropClassNames = cn(styles["backdrop"], {
    [styles["active"]]: isVisible,
  });

  const modalClassNames = cn(styles["modal"], {
    [styles["active"]]: isVisible,
  });

  const markUp = (
    <div className={backdropClassNames} onClick={onHandleBackdropClick}>
      <div className={modalClassNames}>
        <div className={styles["body"]}>
          <div className={styles["body__header"]}>
            <button className={styles["close-button"]} onClick={closeMenu}>
              <span>
                <Icon icon={IconEnum.CROSS} size={20} />
              </span>
              close
            </button>
          </div>
          <ul className={styles["body__nav-list"]}>
            {navItem.map((el, index) => (
              <li key={index}>{renderNavButtons(el)}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul className={styles["body__soc-list"]}>
            {socItem.map(({ link, icon }, index) => {
              return (
                <li key={index}>
                  <a href={link} className={`${styles["soc-link"]} animation`}>
                    <Icon icon={icon} size={24} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  if (!active) return null;

  return createPortal(markUp, document.body);
};

export default Menu;
