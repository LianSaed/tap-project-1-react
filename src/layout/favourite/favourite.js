import React, { useState, useContext } from 'react';
import { contextStates } from "../../App.js";
import FavouriteCard from './favouriteCard.js';
import styles from "./favourite.module.css";

const Favourites = () => {
    const { showFavourite, favouriteList } = useContext(contextStates);

    return (
        <>
            {showFavourite && <div class={styles.favouriteDisplay}>
                <p>My favourite Topics</p>
                <div class={styles.favouriteList}>
                    {favouriteList && favouriteList.map((course) => (
                        <FavouriteCard topic={course.topic} image={course.image} rating={course.rating} />
                    ))}
                </div>
            </div>}
        </>
    );
};

export default Favourites;
