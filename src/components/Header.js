import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { faRightToBracket, faIdCard, faHeart, faCircleXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton';
import axios from 'axios';
import LoginForm from './LoginForm';
import jwt from 'jsonwebtoken';
import RegisterForm from './RegisterForm';
import Cookies from 'js-cookie';
import BlacklistedMovieListManager from './BlacklistedMovieListManager';
import LikedMovieListManager from './LikedMovieListManager';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const jwtToken = Cookies.get('jwtToken');

        if (jwtToken) {
            try {
                const decodedToken = jwt.decode(jwtToken);

                if (decodedToken) {
                    const { username } = decodedToken;

                    // Mettre à jour les états avec le pseudo extrait du token
                    setIsLoggedIn(true);
                    setUsername(username);
                }
            } catch (error) {
                console.error('Erreur lors du décodage du token :', error);
            }
        }
    }, []);

    const handleLoginButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    const handleRegisterButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    const handleLogoutButtonClick = () => {
        Cookies.remove('jwtToken');

        setIsLoggedIn(false);
        setUsername('');
    };

    const handleLikedButtonClick = () => {
        console.log("Le bouton Likés a été cliqué !");
    };

    const handleBlacklistButtonClick = () => {
        console.log("Le bouton BlackList a été cliqué !");
    };

    const handleLoginFormSubmit = async (identifier, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', { identifier, password });
            // Si la requête réussit, mettez à jour les états de connexion ici

            const { token } = response.data;

            Cookies.set('jwtToken', token, { expires: 1 / 24, sameSite: 'None', secure: true });

            setIsLoggedIn(true);
            setUsername(identifier);
        } catch (error) {
            console.error(error);
            // Gérez les erreurs de connexion ici
        }
    };


    const handleRegisterFormSubmit = async (username, email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', { username, email, password });
            // Si la requête réussit, vous pouvez mettre à jour les états de connexion ici

            const { token } = response.data;

            Cookies.set('jwtToken', token, { expires: 1 / 24, sameSite: 'None', secure: true });

            setIsLoggedIn(true);
            setUsername(username);
        } catch (error) {
            console.error(error);
            // Gérez les erreurs d'inscription ici
        }
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
                            <LikedMovieListManager />
                        </CustomButton>
                        <CustomButton label="BlackList" onClick={handleBlacklistButtonClick} icon={faCircleXmark} isModalButton={true}>
                            <BlacklistedMovieListManager />
                        </CustomButton>
                        <CustomButton label="Déconnexion" onClick={handleLogoutButtonClick} icon={faRightFromBracket} isModalButton={false} />
                    </>
                ) : (
                    <>
                        <CustomButton label="Se connecter" onClick={handleLoginButtonClick} icon={faRightToBracket} isModalButton={true}>
                            <LoginForm onLogin={handleLoginFormSubmit} />
                        </CustomButton>
                        <CustomButton label="S'inscrire" onClick={handleRegisterButtonClick} icon={faIdCard} isModalButton={true}>
                            <RegisterForm onRegister={handleRegisterFormSubmit} />
                        </CustomButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
