import React from "react";
import styles from "./triangle.module.css";

const Triangle = (props) => (
    <div className={styles.triangle}>
        <div className={styles.triangleTopleft}></div>
        <div className={styles.triangleTopRight}></div>
    </div>
);
export default Triangle;