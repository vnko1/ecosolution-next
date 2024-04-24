import { FC } from "react";
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
    return (
      <button {...props} className={btnClassNames}>
        <span className={iconClassNames}>
          {icon ? <Icon icon={icon} size={iconSize} /> : null}
        </span>
      </button>
    );

  return (
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
