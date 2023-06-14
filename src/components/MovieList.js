import React, { useEffect, useState } from 'react';
import '../styles/MovieList.css';
import axios from 'axios';


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular');
                // setMovies(response.data.results);
                const limitedMovies = response.data.results.slice(0, 2);
                setMovies(limitedMovies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};


export default MovieList;