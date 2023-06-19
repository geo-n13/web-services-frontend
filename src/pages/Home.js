import React, { useState } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import CustomSearchbar from '../components/CustomSearchbar';
import MovieList from '../components/MovieList';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [genre, setGenre] = useState('');
    const [acteur, setActeur] = useState('');

    return (
        <div className="home">
            <Header/>
            <CustomSearchbar searchText={searchText} setSearchText={setSearchText} setGenre={setGenre} setActeur={setActeur}/>
            <MovieList searchText={searchText} genre={genre} acteur={acteur}/>
        </div>
    );
};

export default Home;
