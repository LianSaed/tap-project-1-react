import React from "react";
import styles from "./button.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Button = (props) => (
    <li><button className={styles.featureButton} id={props.id} onclick="">
        <FontAwesomeIcon icon={props.id === "favourite"?faHeart:faMoon}/> <span>{props.title}</span></button></li>
);
export default Button;