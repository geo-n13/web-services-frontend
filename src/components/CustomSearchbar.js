import React, { useEffect, useState } from 'react';
import '../styles/CustomSearchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CustomSearchbar = ({ searchText, setSearchText, genre, setGenre }) => {
    const [genreOptions, setGenreOptions] = useState([]);

    useEffect(() => {
        const fetchGenreOptions = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list');
                setGenreOptions(response.data.genres);
            } catch (error) {
                console.log(error);
            }
        };

        fetchGenreOptions();
    }, []);

    const handleSearch = () => {
        const searchQuery = encodeURIComponent(searchText); // Encodage des caractères spéciaux dans la requête de recherche

        const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&with_genres=${genre}`;

        axios.get(url)
            .then(response => {
                // Traitez la réponse de la requête API ici
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    return (
        <div className="custom-searchbar">
            <div className="search-side">
                <input
                    type="text"
                    placeholder="Rechercher des films..."
                    value={searchText}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} />
            </div>
            <div className="filter-side">
                <select value={genre} onChange={handleGenreChange}>
                    <option value="">Genres</option>
                    {genreOptions.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CustomSearchbar;
