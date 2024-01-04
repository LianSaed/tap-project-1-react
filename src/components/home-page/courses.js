import CourseCard from "./courseCard";
import styles from "./courses.module.css";

const Courses = (props) => {
    return (
        <div className={styles.mainGrid}>
            {props.courses.map((course, idx) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    category={course.category}
                    topic={course.topic}
                    name={course.name}
                    rating={course.rating}
                    idx={idx}
                    courseImage={course.image}
                />
            ))}
        </div>
    );
};

export default Courses;
