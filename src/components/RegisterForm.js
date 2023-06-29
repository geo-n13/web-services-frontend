import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const RegisterForm = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                username,
                email,
                password,
            });

            // Gérer la réponse du serveur en cas de succès

            console.log("L'utilisateur a été inscrit avec succès.");

            // Appeler la prop onRegister avec les données nécessaires
            if (onRegister) {
                onRegister(username, email, password);
            }
        } catch (error) {
            // Gérer les erreurs de la requête

            console.error("Une erreur s'est produite lors de l'inscription de l'utilisateur:", error);
        }
    };


    return (
        <div className="form-container">
            <h2 className="form-title">INSCRIPTION</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <CustomButton label="Inscription" onClick={handleSubmit} icon={null} isModalButton={false} />
            </form>
        </div>
    );
};

export default RegisterForm;
