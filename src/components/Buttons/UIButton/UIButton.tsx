import { FC } from "react";
import Link from "next/link";
import cn from "classnames";

import { Icon } from "@/components";
import { UIButtonProps } from "./UIButton.type";
import styles from "./UIButton.module.scss";

const UIButton: FC<UIButtonProps> = ({
  children,
  variant,
  classNames,
  icon,
  iconSize,
  iconClassNames,
  href,
  ...props
}) => {
  const btnClassNames = cn(
    styles["button"],
    {
      [styles["contained"]]: variant === "contained",
      [styles["icon"]]: variant === "icon",
      [styles["text"]]: variant === "text",
      [styles["outlined"]]: variant === "outlined",
    },

    classNames
  );
  if (variant === "icon")
    return href ? (
      <Link href={href} className={btnClassNames}>
        <span className={iconClassNames}>
          {icon ? <Icon icon={icon} size={iconSize} /> : null}
        </span>
      </Link>
    ) : (
      <button {...props} className={btnClassNames}>
        <span className={iconClassNames}>
          {icon ? <Icon icon={icon} size={iconSize} /> : null}
        </span>
      </button>
    );

  return href ? (
    <Link href={href} className={btnClassNames}>
      {children}
      {icon ? (
        <span className={iconClassNames}>
          <Icon icon={icon} size={iconSize} />
        </span>
      ) : null}
    </Link>
  ) : (
    <button {...props} className={btnClassNames}>
      {children}
      {icon ? (
        <span className={iconClassNames}>
          <Icon icon={icon} size={iconSize} />
        </span>
      ) : null}
    </button>
  );
};

export default UIButton;
