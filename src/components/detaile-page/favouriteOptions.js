import styles from "./detaile.module.css";
import FavouriteButton from "./favouriteButton";

const FavouriteOptions = (props) => {
    return (
        <div className={styles.favouriteOptions}>
            <div className={styles.courseImg} style={props.backgroundImageStyle}></div>
            <div className={styles.alignOptions}>
                <h2 className={`${styles.courseAuthor} ${styles.lineHeight}`}>
                    <span>{props.course.topic}</span> by <a href="#">{props.course.name}</a>
                </h2>
                <div className={` ${styles.addOption} ${styles.lineHeight}`}>
                    <p>Interested about this topic?</p>
                    <FavouriteButton course={props.course} id={props.id} />
                    <p className={styles.credit}>Unlimited Credits</p>
                </div>
            </div>
        </div>
    );
};

export default FavouriteOptions;
