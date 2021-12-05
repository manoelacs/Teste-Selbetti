import React from "react";
import styles from "./styles.less";

const FormBody = ({ children }) => {
  return <div className={styles.form__body}>{children}</div>;
};
export default FormBody;
