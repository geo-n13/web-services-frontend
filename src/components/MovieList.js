import React, { useEffect, useState } from 'react';
import '../styles/MovieList.css';
import axios from 'axios';
import CustomButton from './CustomButton';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import CustomLikeButton from './CustomLikeButton';


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular');
                setMovies(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    const handleMoviePageButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <h2 className="movie-title">{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-poster" alt={movie.title} />
                    <p className="movie-description">{movie.overview}</p>
                    <div className="movie-interactions">
                        <CustomButton label="Consulter" onClick={handleMoviePageButtonClick} icon={faFilm} isModalButton={false}/>
                        <CustomLikeButton label="J'aime" />
                    </div>
                </div>
            ))}
        </div>
    );
};


export default MovieList;