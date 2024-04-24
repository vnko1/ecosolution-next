import { FC } from "react";
import cn from "classnames";

import { Icon } from "..";
import { NavLinkProps } from "./NavLink.type";
import styles from "./NavLink.module.scss";
import Link from "next/link";

const NavLink: FC<NavLinkProps> = ({
  link = "#",
  classNames,
  children,
  target = "",
  icon,
  size,
  ...props
}) => {
  const iconClassName = cn(
    styles["link"],
    { [styles["soc"]]: !children },
    classNames
  );
  return (
    <Link
      {...props}
      target={target}
      style={{ textDecoration: "none" }}
      href={link}
      className={iconClassName}
    >
      <span>
        <Icon icon={icon} size={size} />
      </span>
      {children}
    </Link>
  );
};

export default NavLink;
