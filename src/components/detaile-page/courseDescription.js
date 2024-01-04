import React from 'react';
import styles from './detaile.module.css';
import useStarRating from '../useStarRating'; // Import custom hook

const CourseDescription = (props) => {
    const { getStarIcons } = useStarRating(props.course.rating, 5, 'lg');

    return (
        <>
            <div className={styles.backgroundColor}></div>
            <div className={styles.courseSummary}>
                <h2 className={styles.courseIntimation}>{props.course.category}</h2>
                <h1 className={styles.courseTitle}>{props.course.topic}</h1>
                <div className={styles.detailsRatingStars}>{getStarIcons()}</div>
                <p className={styles.courseDescription}>{props.course.description}</p>
            </div>
        </>
    );
};

export default CourseDescription;
