import React from "react";
import { TagProps } from "./Tag.props";
import classNames from "classnames";

import styles from "./Tag.module.css";

export const Tag = ({
  size = "m",
  color = "ghost",
  className,
  href,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles[size]]: size,
        [styles[color]]: color,
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <>{children} </>}
    </div>
  );
};
