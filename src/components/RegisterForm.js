import React from 'react';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const RegisterForm = () => {
    const handleSubmit = (e) => {
        console.log("Le formulaire d'inscription a bien été remplis");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">INSCRIPTION</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input" placeholder="Username" />
                <input type="email" className="form-input" placeholder="Email" />
                <input type="password" className="form-input" placeholder="Password" />
                <CustomButton label="Inscription" onClick={handleSubmit} icon={null} isModalButton={false} />
            </form>
        </div>
    );
};

export default RegisterForm;
