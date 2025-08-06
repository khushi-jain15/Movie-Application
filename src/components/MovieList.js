import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, loading, error }) => {
  if (loading) {
    return (
      <div className="movie-list">
        <div className="loading">Loading movies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-list">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="movie-list">
        <div className="no-movies">No movies found.</div>
      </div>
    );
  }

  return (
    <div className="movie-list">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList; 