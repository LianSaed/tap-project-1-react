import styles from "./detaile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const SubTopics = (props) => {
    return (
        <div className={styles.subTopics} id="subTopics">
            <div className={`${styles.topic} ${styles.topicHead}`} ><h3>{props.course.topic} Sub Topics</h3></div>
            {
                props.course.subtopics.map((topic, idx) => (
                    <div className={styles.topic} key={idx}>
                        <h2><FontAwesomeIcon icon={faCheckCircle} className={styles.checkStyle} /> {topic}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default SubTopics;
