import React from "react";
import '../../variables.css';
import styles from "./courseCard.module.css";

/*               <div className={styles.ratingStars}>
                    <FontAwesomeIcon icon="fa-sharp fa-solid faStar fa-xs"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-sharp fa-solid faStar fa-xs"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-sharp fa-solid faStar fa-xs"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-sharp fa-solid faStar fa-xs"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-star-half-stroke fa-xs"></FontAwesomeIcon>
                </div>*/
const CourseCard = (props) => {
    const backgroundImageStyle = { backgroundImage: 'url(' + require(`../../logos/${props.courseImage}`) + ')' }


    return (
        <a href={`./details.html?id=${props.id}`} id={`course-${props.id}`} className={styles.courseCard}>
            <div className={styles.courseImg} style={backgroundImageStyle}></div>
            <div className={styles.courseInfo}>
                <h2 className={`${styles.category}`}>{props.category}</h2>
                <h1 className={`${styles.topic}`}>{props.topic}</h1>
                <h3 className={`${styles.name}`}>Author: {props.name}</h3>
            </div>
        </a>
    );
};
export default CourseCard;