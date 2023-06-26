import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { faRightToBracket, faIdCard, faHeart, faCircleXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import BlacklistedMovieListManager from './BlacklistedMovieListManager';
import LikedMovieListManager from './LikedMovieListManager';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [username, setUsername] = useState('Damien');

    const handleLoginButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    const handleRegisterButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    const handleLogoutButtonClick = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    const handleLikedButtonClick = () => {
        console.log("Le bouton Likés a été cliqué !");
    };

    const handleBlacklistButtonClick = () => {
        console.log("Le bouton BlackList a été cliqué !");
    };

    const handleLoginFormSubmit = (username) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    return (
        <div className="header">
            <div className="left-side">
                <img src={logo} alt="EPSI'Films Reviews" />
                <h1>EPSI'Films Reviews</h1>
            </div>
            <div className="right-side">
                {isLoggedIn ? (
                    <>
                        <p className="username">Bonjour, {username}</p>
                        <CustomButton label="Likés" onClick={handleLikedButtonClick} icon={faHeart} isModalButton={true}>
                            <LikedMovieListManager/>
                        </CustomButton>
                        <CustomButton label="BlackList" onClick={handleBlacklistButtonClick} icon={faCircleXmark} isModalButton={true}>
                            <BlacklistedMovieListManager/>
                        </CustomButton>
                        <CustomButton label="Déconnexion" onClick={handleLogoutButtonClick}  icon={faRightFromBracket} isModalButton={false} />
                    </>
                ) : (
                    <>
                        <CustomButton label="Se connecter" onClick={handleLoginButtonClick} icon={faRightToBracket} isModalButton={true}>
                            <LoginForm onLogin={handleLoginFormSubmit} />
                        </CustomButton>
                        <CustomButton label="S'inscrire" onClick={handleRegisterButtonClick} icon={faIdCard} isModalButton={true}>
                            <RegisterForm />
                        </CustomButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;