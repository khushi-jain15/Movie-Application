import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../api/movies';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError('Failed to load movie details');
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'Unknown';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getTrailerUrl = () => {
    if (!movie?.videos?.results) return null;
    const trailer = movie.videos.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  };

  if (loading) {
    return (
      <div className="movie-details-container">
        <div className="loading">Loading movie details...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-details-container">
        <div className="error">
          {error || 'Movie not found'}
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const trailerUrl = getTrailerUrl();

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>
      
      <div className="movie-details">
        <div className="movie-poster-section">
          <img 
            src={getImageUrl(movie.poster_path, 'w500')} 
            alt={movie.title}
            className="movie-poster-large"
          />
        </div>
        
        <div className="movie-info-section">
          <h1 className="movie-title-large">{movie.title}</h1>
          
          <div className="movie-meta">
            <span className="movie-rating-large">
              ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
            </span>
            <span className="movie-year-large">
              {formatDate(movie.release_date)}
            </span>
            {movie.runtime && (
              <span className="movie-runtime">
                {formatRuntime(movie.runtime)}
              </span>
            )}
          </div>
          
          {movie.genres && (
            <div className="movie-genres">
              {movie.genres.map(genre => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
          )}
          
          <p className="movie-overview-large">{movie.overview}</p>
          
          {movie.credits?.cast && (
            <div className="movie-cast">
              <h3>Cast</h3>
              <div className="cast-list">
                {movie.credits.cast.slice(0, 10).map(actor => (
                  <div key={actor.id} className="cast-member">
                    <span className="actor-name">{actor.name}</span>
                    <span className="character-name">{actor.character}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {trailerUrl && (
        <div className="movie-trailer">
          <h3>Trailer</h3>
          <div className="trailer-container">
            <iframe
              src={trailerUrl}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails; 