import styles from "./detaile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import React, { useState, useContext } from 'react';
import { contextStates } from "../../App.js";

const FavouriteButton = (props) => {
    const { favouriteList, setFavouriteList } = useContext(contextStates);
    const [loading, setLoading] = useState(false);

    const addOrRemoveFromFavourites = async () => {
        try {
            setLoading(true);
            let favouriteItem = checkIfInFavList();
            if (favouriteItem) {
                // Remove it from local storage
                const updatedFavouriteList = favouriteList.filter(obj => String(obj.id) !== String(props.id));
                setFavouriteList(updatedFavouriteList);
                localStorage.setItem('favouriteList', JSON.stringify(updatedFavouriteList));
            } else {
                // Fetch data and add to local storage
                const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${props.id}`);
                const newFavourite = await response.json();
                const updatedFavouriteList = [...favouriteList, newFavourite];
                setFavouriteList(updatedFavouriteList);
                localStorage.setItem('favouriteList', JSON.stringify(updatedFavouriteList));
                console.log(favouriteList)
            }
        } catch (error) {
            console.error('Error adding/removing to/from favorites:', error);
        } finally {
            setLoading(false);
        }
    };

    const checkIfInFavList = () => {
        if (favouriteList) {
            return favouriteList.some(course => JSON.parse(course.id) === JSON.parse(props.id));
        } else {
            return false;
        }
    };

    return (
        <button className={styles.favouritesButton} onClick={addOrRemoveFromFavourites} disabled={loading}>
            {(checkIfInFavList() ? "Remove from" : "Add to") + ' favourites '}
            <FontAwesomeIcon icon={faHeart} />
        </button>
    );
};

export default FavouriteButton;
