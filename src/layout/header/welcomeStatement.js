import React from "react";
import styles from "./welcomeStatement.module.css";

const WelcomeStatement = () => (
    <div className={styles.welcomeStatement}>
        <div>
            <p className={styles.primaryWelcome}>Welcome to our website!</p>
        </div>
        <div>
            <p className={styles.seconderyWelcome}>We have a new design that's fresh, modern, and easy to use.</p>
        </div>

    </div>
);
export default WelcomeStatement;