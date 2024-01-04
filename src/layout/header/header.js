import React from "react";
import Button from "./button";
import Triangle from "./triangle";
import WelcomeStatement from "./welcomeStatement";
import styles from "./header.module.css";


/**
 * the header component of whole application
 * @returns header element
 */
const Header = () => (
    <header>
        <nav>
            <ul>
                <li class={styles.homeButton}>Web Topics</li>
                <li><Button id="dark-mode" title="dark mode" /></li>
                <li><Button id="favourite" title="favourite" /></li>
            </ul>
        </nav>
        <Triangle />
        <WelcomeStatement />
    </header>
);
export default Header;