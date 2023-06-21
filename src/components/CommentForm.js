import React, { useState } from 'react';
import '../styles/CommentForm.css';

const CommentForm = ({ filmId, onCommentSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() !== '') {
            onCommentSubmit(filmId, comment.trim()); // Appeler la fonction de soumission du commentaire avec l'ID du film et le contenu du commentaire
            setComment('');
        }
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="comment-section">
            <textarea
                value={comment}
                onChange={handleChange}
                placeholder="Ajouter un commentaire..."
            />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default CommentForm;
