import React, { useState } from 'react';
import '../styles/CommentForm.css';

const CommentForm = ({ onCommentSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCommentSubmit(comment); // Appeler la fonction de soumission du commentaire avec le contenu du commentaire
        setComment('');
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="comment-section">
            <textarea value={comment} onChange={handleChange} placeholder="Ajouter un commentaire..." />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default CommentForm;
