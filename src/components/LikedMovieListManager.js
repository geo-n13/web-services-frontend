import React from 'react';
import '../styles/Manager.css';
import CustomButton from './CustomButton';
import { faCircleXmark,faFilm } from '@fortawesome/free-solid-svg-icons';

const LikedMovieListManager = () => {

    return (
        <div className="manager-list">
            <div className="manager-list-item">
                <p className="manager-title">Titre du film</p>
                <p className="manager-year">Année de sortie</p>
                <CustomButton label="Consulter" icon={faFilm} isModalButton={false} />
                <CustomButton label="Supprimer" icon={faCircleXmark} isModalButton={false} />
            </div>
        </div>
    );
};

export default LikedMovieListManager;
