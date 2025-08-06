import React, { useState, useEffect } from 'react';
import { getGenres } from '../api/movies';
import './GenreFilter.css';

const GenreFilter = ({ onGenreSelect, selectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getGenres();
        setGenres(genresData);
      } catch (error) {
        console.error('Error fetching genres:', error);
        // Fallback to common genres
        setGenres([
          { id: 28, name: 'Action' },
          { id: 35, name: 'Comedy' },
          { id: 18, name: 'Drama' },
          { id: 27, name: 'Horror' },
          { id: 10749, name: 'Romance' },
          { id: 878, name: 'Science Fiction' },
          { id: 53, name: 'Thriller' },
          { id: 16, name: 'Animation' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreClick = (genreId) => {
    if (selectedGenre === genreId) {
      onGenreSelect(null); // Clear filter
    } else {
      onGenreSelect(genreId);
    }
  };

  if (loading) {
    return <div className="genre-filter loading">Loading genres...</div>;
  }

  return (
    <div className="genre-filter">
      <h3>Filter by Genre</h3>
      <div className="genre-buttons">
        <button
          className={`genre-button ${!selectedGenre ? 'active' : ''}`}
          onClick={() => onGenreSelect(null)}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genre-button ${selectedGenre === genre.id ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter; 