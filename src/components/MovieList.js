import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieList.css';
import axios from 'axios';
import CustomButton from './CustomButton';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import CustomLikeButton from './CustomLikeButton';


const MovieList = ({ searchText, genre, acteur }) => {
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        language: 'fr-FR',
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    const handleMoviePageButtonClick = (filmId) => {
        navigate(`/films/${filmId}`);
    };

    const filteredMovies = movies.filter((movie) => {
        const matchSearchText = movie.title.toLowerCase().includes(searchText.toLowerCase());
        const matchGenre = genre === '' || (movie.genre_ids && movie.genre_ids.includes(parseInt(genre)));
        const matchRealisateur = acteur === '' || (movie.realisateur_ids && movie.realisateur_ids.includes(parseInt(acteur)));
        return matchSearchText && matchGenre && matchRealisateur;
    });    

    return (
        <div className="movie-list">
            {filteredMovies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <h2 className="movie-title">{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-poster" alt={movie.title} />
                    <p className="movie-description">{movie.overview}</p>
                    <div className="movie-interactions">
                        <CustomButton label="Consulter" onClick={() => handleMoviePageButtonClick(movie.id)} icon={faFilm} isModalButton={false} />
                        <CustomLikeButton label="J'aime" />
                    </div>
                </div>
            ))}
        </div>
    );
};


export default MovieList;