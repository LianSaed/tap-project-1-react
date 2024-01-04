import React from "react";
import styles from "./courseCard.module.css";
import { Link } from 'react-router-dom';
import useStarRating from '../useStarRating'; // Import custom hook

const CourseCard = (props) => {
    const backgroundImageStyle = { backgroundImage: 'url(' + require(`../../../logos/${props.courseImage}`) + ')' }

    // custom hook to get the star elements based on the rating
    const { getStarIcons } = useStarRating(props.rating, 5, 'sm');

    return (
        <Link to={`/detaile/${props.id}`} id={`course-${props.id}`} className={styles.courseCard}>
            <div className={styles.courseImg} style={backgroundImageStyle}></div>
            <div className={styles.courseInfo}>
                <h2 className={`${styles.category}`}>{props.category}</h2>
                <h1 className={`${styles.topic}`}>{props.topic}</h1>
                <div className={styles.ratingStars}>{getStarIcons()}</div>
                <h3 className={`${styles.name}`}>Author: {props.name}</h3>
            </div>
        </Link>
    );
};

export default CourseCard;
