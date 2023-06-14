import React, { useState } from 'react';
import '../styles/CustomSearchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const CustomSearchbar = () => {
    const [searchText, setSearchText] = useState('');
    const [genre, setGenre] = useState('');
    const [realisateur, setRealisateur] = useState('');
    const [annee, setAnnee] = useState('');

    const handleSearch = () => {
        // Code pour lancer la recherche
        console.log("Recherche lancée !");
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

    const handleRealisateurChange = (event) => {
        setRealisateur(event.target.value);
    };

    const handleAnneeChange = (event) => {
        setAnnee(event.target.value);
    };

    return (
        <div className="custom-searchbar">
            <div className="search-side">
                <input type="text" placeholder="Rechercher des films..." value={searchText} onChange={handleChange} onKeyDown={handleKeyDown} />
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} />
            </div>
            <div className="filter-side">
                <select value={genre} onChange={handleGenreChange}>
                    <option value="">Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    {/* Ajoutez d'autres options de genre ici */}
                </select>
                <select value={realisateur} onChange={handleRealisateurChange}>
                    <option value="">Réalisateur</option>
                    <option value="spielberg">Spielberg</option>
                    <option value="tarantino">Tarantino</option>
                    <option value="nolan">Nolan</option>
                    {/* Ajoutez d'autres options de réalisateur ici */}
                </select>
                <select value={annee} onChange={handleAnneeChange}>
                    <option value="">Année</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    {/* Ajoutez d'autres options d'année ici */}
                </select>
            </div>
        </div>
    );
};

export default CustomSearchbar;
