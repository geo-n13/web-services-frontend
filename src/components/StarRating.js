import { Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

const StarRating = ({ filmId }) => {
    const [value, setValue] = useState(0);

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
        console.log(`Film ID: ${filmId}, Rating: ${newValue}`);
    };

    return (
        <div>
            <Typography component="legend">Note</Typography>
            <Rating
                name={`rating-${filmId}`} // Use a unique name for each filmId
                value={value}
                onChange={handleRatingChange}
            />
        </div>
    );
};

export default StarRating;
