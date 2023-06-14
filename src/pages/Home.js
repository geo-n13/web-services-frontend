import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import CustomSearchbar from '../components/CustomSearchbar';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <CustomSearchbar/>
        </div>
    );
};

export default Home;
