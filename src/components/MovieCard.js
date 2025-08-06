import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../api/movies';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="movie-poster">
        <img 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title}
          loading="lazy"
        />
        <div className="movie-rating">
          ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{formatDate(movie.release_date)}</p>
        {movie.overview && (
          <p className="movie-overview">
            {movie.overview.length > 100 
              ? `${movie.overview.substring(0, 100)}...` 
              : movie.overview}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard; 