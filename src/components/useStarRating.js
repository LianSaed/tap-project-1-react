import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const useStarRating = (initialRating, maxStars = 5, starSize = '1x') => {
    const [rating, setRating] = useState(initialRating);

    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    const getStarIcons = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const starIcons = [];

        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<FontAwesomeIcon key={i} icon={faStar} size={starSize} />);
        }

        if (hasHalfStar) {
            starIcons.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} size={starSize} />);
        }

        const emptyStarsCount = maxStars - starIcons.length;

        for (let i = 0; i < emptyStarsCount; i++) {
            starIcons.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} size={starSize} />);
        }

        return starIcons;
    };

    return { rating, setRating, getStarIcons };
};

export default useStarRating;
