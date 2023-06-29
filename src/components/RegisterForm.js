import React, { useState } from 'react';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const RegisterForm = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onRegister(username, email, password);
        setUsername('');
        setEmail('');
        setPassword('');
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
