import React from "react";
import styles from "./courseStatement.module.css";


const CourseStatement = (props) => (
    <div class={styles.topicsCounterStatement}>
        <p class={styles.statement}>"{props.counter}" Web Topics Found</p>
    </div>
);
export default CourseStatement;