import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import CustomSearchbar from '../components/CustomSearchbar';
import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <CustomSearchbar/>
            <MovieList/>
        </div>
    );
};

export default Home;
