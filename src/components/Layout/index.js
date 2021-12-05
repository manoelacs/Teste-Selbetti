import React from "react";
import styles from "./styles.module.less";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__header} />
      {children}
    </div>
  );
};
export default Layout;
