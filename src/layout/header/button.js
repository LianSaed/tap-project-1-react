import React, { useEffect } from "react";
import styles from "./button.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { contextStates } from "../../App.js";
import { useContext } from "react";

const Button = (props) => {
    const { theme, setTheme, showFavourite, setShowFavourite }  = useContext(contextStates);

    const handelMode = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === 0 ? 1 : 0;
            localStorage.setItem('darkMode', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        console.log("Updated Theme:", theme);
        console.log("localStorage Theme:", localStorage.getItem('darkMode'));
    }, [theme]);

    const handelFavourite = () => {
        setShowFavourite((showFavourite) => {
            const newShowFavourite = showFavourite === 0 ? 1 : 0;
            localStorage.setItem('showFavourite', newShowFavourite);
            return newShowFavourite;
        });
    };

    useEffect(() => {
        console.log("Updated showFavourite:", showFavourite);
        console.log("localStorage showFavourite:", localStorage.getItem('showFavourite'));
    }, [showFavourite]);

    return (
        <li>
            <button className={styles.featureButton} id={props.id} onClick={props.id === "favourite" ? handelFavourite : handelMode}>
                <FontAwesomeIcon icon={props.id === "favourite" ? faHeart : faMoon} /> <span className={styles.titleDisplay}>{props.title}</span>
            </button>
        </li>
    );
};

export default Button;
