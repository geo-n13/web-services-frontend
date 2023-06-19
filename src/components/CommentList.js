import React from 'react';
import data_comments from '../data/data_comments';

const CommentList = ({ comments }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div className="comment-side">
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <p className="user">{comment.user}</p>
                    <p className="comment-content">{comment.content}</p>
                    <p className="date">{formatDate(comment.timestamp)}</p>
                    <hr className="separator" />
                </div>
            ))}
        </div>
    );
};

export default CommentList;