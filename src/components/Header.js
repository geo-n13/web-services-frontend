import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
import { faRightToBracket, faIdCard } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Header = () => {
    const handleLoginButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    const handleRegisterButtonClick = () => {
        console.log("Le bouton a été cliqué !");
    };

    return (
        <div className="header">
            <div className="left-side">
                <img src={logo} alt="EPSI'Films Reviews" />
                <h1>EPSI'Films Reviews</h1>
            </div>
            <div className="right-side">
                <CustomButton label="Se connecter" onClick={handleLoginButtonClick} icon={faRightToBracket} isModalButton={true}>
                    <LoginForm/>
                </CustomButton>
                <CustomButton label="S'inscrire" onClick={handleRegisterButtonClick} icon={faIdCard} isModalButton={true}>
                    <RegisterForm/>
                </CustomButton>
            </div>
        </div>
    );
};

export default Header;