import React from "react";
import { FooterProps } from "./Footer.props";
import classNames from "classnames";

import styles from "./Footer.module.css";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
