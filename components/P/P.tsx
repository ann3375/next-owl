import React from "react";
import { PProps } from "./P.props";
import classNames from "classnames";

import styles from "./P.module.css";

export const P = ({
  size = "m",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={classNames(className, {
        [styles[size]]: size,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
