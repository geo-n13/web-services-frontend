import React from 'react';
import '../styles/Manager.css';
import CustomButton from './CustomButton';
import { faCircleXmark, faFilm } from '@fortawesome/free-solid-svg-icons';
import data_liked_list from '../data/data_liked_list';

const LikedMovieListManager = () => {

    return (
        <div className="manager-list">
            <p className="manager-title">Titre likés :</p>
            {data_liked_list.map((movie) => (
                <div key={movie.id} className="manager-list-item">
                    <div className="manager-infos">
                        <p className="manager-title">{movie.title}</p>
                        <p className="manager-author">{movie.author}</p>
                    </div>
                    <div className="manager-interactions">
                        <CustomButton label="Consulter" icon={faFilm} isModalButton={false} />
                        <CustomButton label="Supprimer" icon={faCircleXmark} isModalButton={false} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LikedMovieListManager;
