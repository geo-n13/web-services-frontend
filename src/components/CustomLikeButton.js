import React, { useState } from 'react';
import '../styles/CustomLikeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CustomLikeButton = ({ label }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeButtonClick = () => {
        setLiked(!liked);
    };

    return (
        <button className={`custom-like-button ${liked ? 'liked' : ''}`} onClick={handleLikeButtonClick}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{label}</span>
        </button>
    );
};

export default CustomLikeButton;
