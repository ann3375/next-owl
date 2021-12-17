import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  const Component = tag;

  return <Component className={styles[tag]}>{children}</Component>;
};
