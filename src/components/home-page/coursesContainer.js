import styles from "./coursesContainer.module.css";
import Courses from "./courses";


const CoursesContainer = () => (
    <div className={styles.mainGrid}><Courses /></div>
);
export default CoursesContainer;