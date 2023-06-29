import React, { useState } from 'react';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const LoginForm = ({ onLogin }) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Appeler la fonction onLogin avec les informations de connexion
        onLogin(identifier, password);
        setIdentifier('');
        setPassword('');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">CONNEXION</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Email ou nom d'utilisateur"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton label="Connexion" onClick={handleSubmit} icon={null} isModalButton={false} />
            </form>
        </div>
    );
};

export default LoginForm;
