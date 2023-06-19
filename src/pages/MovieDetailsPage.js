import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MovieDetailsPage.css';
import axios from 'axios';
import CommentForm from '../components/CommentForm';
import StarRating from '../components/StarRating';
import CustomLikeButton from '../components/CustomLikeButton';
import Header from '../components/Header';
import CommentList from '../components/CommentList';

const MovieDetailsPage = () => {
    const { filmId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}`);
                setFilmDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilmDetails();
    }, [filmId]);

    const handleCommentSubmit = (comment) => {
        const newComment = {
            id: comments.length + 1,
            user: "Utilisateur",
            content: comment,
            timestamp: new Date().toISOString()
        };

        setComments([...comments, newComment]);
    };

    return (
        <div>
            <Header />
            <div className="movie-details-page">
                {filmDetails && (
                    <div className="movie-side">
                        <h2 className="movie-title">{filmDetails.title}</h2>
                        <div className="movie-info">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`}
                                alt={filmDetails.title}
                            />
                            <p className="movie-overview">{filmDetails.overview}</p>
                        </div>
                        <div className="movie-details-interactions">
                            <StarRating filmId={filmDetails.id} />
                            <CustomLikeButton label={null} filmId={filmDetails.id} />
                        </div>
                        <CommentForm onCommentSubmit={handleCommentSubmit} />
                    </div>
                )}
                <CommentList comments={comments} />
            </div>
        </div>
    );
};

export default MovieDetailsPage;
