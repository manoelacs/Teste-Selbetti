import React from "react";
import styles from "./styles.module.less";

const FormHeader = ({ children }) => {
  return <div className={styles.form__header}>{children}</div>;
};
export default FormHeader;
