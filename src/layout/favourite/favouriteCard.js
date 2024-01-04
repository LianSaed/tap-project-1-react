import React from "react";
import styles from "./favourite.module.css";
import useStarRating from '../../components/useStarRating.js'; // Import custom hook

const FavouriteCard = (props) => {
    const { getStarIcons } = useStarRating(props.rating, 5, '2xs');

    return (
        <div className={styles.favouriteCard}>
            <div className={styles.favouriteImg} style={{ backgroundImage: 'url(' + require(`../../../logos/${props.image}`) + ')' }}></div>
            <div className={styles.ratingStars}>{getStarIcons()}</div>
            <div className={styles.favouriteInfo}>
                <h1>{props.topic}</h1>
            </div>
        </div>
    )
};
export default FavouriteCard;