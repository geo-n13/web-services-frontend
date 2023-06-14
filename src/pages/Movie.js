import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Movie.css';

const Movie = () => {
    return (
        <div className="movie">
            <h1>Welcome to My Movie App</h1>
            <p>Page dédiée au film</p>
            <button><Link to="/">Home</Link></button>
        </div>
    );
};

export default Movie;