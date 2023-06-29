import React, { useState } from 'react';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Appeler la fonction onLogin avec les informations de connexion
        onLogin(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">CONNEXION</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton label="Connexion" onClick={handleSubmit} icon={null} isModalButton={false} />
            </form>
        </div>
    );
};

export default LoginForm;
