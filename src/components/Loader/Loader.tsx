import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["lds-ripple"]}>
      <div className={styles["lds-ripple-div"]}></div>
      <div className={styles["lds-ripple-second-div"]}></div>
    </div>
  );
};

export default Loader;
