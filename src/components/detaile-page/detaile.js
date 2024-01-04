import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubTopics from './subTopics';
import FavouriteOptions from './favouriteOptions';
import CourseDescription from './courseDescription';
import styles from "./detaile.module.css";
import Loader from '../loader';

const Detaile = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [backgroundImageStyle, setBackgroundImageStyle] = useState({});

    useEffect(() => {
        // Fetch course data based on the id parameter
        const fetchData = async () => {
            try {
                const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
                const data = await response.json();
                setCourse(data); // Assuming the API response contains the course details
                // Set backgroundImageStyle only if course and course.image are available
                if (data && data.image) {
                    setBackgroundImageStyle({ backgroundImage: `url(${require(`../../../logos/${data.image}`)})` });
                }
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
        fetchData();
    }, [id]); // Dependency array ensures the effect runs when the id changes

    return (
        <div className={styles.courseIntro}>
            {course ? (
                <>
                    <CourseDescription course={course} />
                    <FavouriteOptions course={course} backgroundImageStyle={backgroundImageStyle} id={id} />
                    <SubTopics course={course} />
                </>
            ) : (
                <Loader />
            )
            }
        </div >
    );
};
// onClick={() => addOrRemoveFromFavourites(course.id)}
export default Detaile;
