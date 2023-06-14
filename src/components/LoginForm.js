import React from 'react';
import '../styles/Form.css';
import CustomButton from './CustomButton';

const LoginForm = () => {
    const handleSubmit = () => {
        console.log("Le formulaire de connexion a bien été remplis");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">CONNEXION</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input" placeholder="Username" />
                <input type="password" className="form-input" placeholder="Password" />
                <CustomButton label="Connexion" onClick={handleSubmit} icon={null} isModalButton={false}/>
            </form>
        </div>
    );
};

export default LoginForm;
