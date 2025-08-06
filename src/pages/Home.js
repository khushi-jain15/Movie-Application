import React, { useState, useEffect } from 'react';
import { getTrendingMovies, getPopularMovies, searchMovies, getMoviesByGenre } from '../api/movies';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [viewMode, setViewMode] = useState('trending'); // 'trending', 'popular', 'search', 'genre'

  useEffect(() => {
    fetchMovies();
  }, [currentPage, selectedGenre, viewMode]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      let movieData;
      switch (viewMode) {
        case 'trending':
          movieData = await getTrendingMovies(currentPage);
          break;
        case 'popular':
          movieData = await getPopularMovies(currentPage);
          break;
        case 'search':
          if (searchQuery) {
            movieData = await searchMovies(searchQuery, currentPage);
          } else {
            movieData = await getTrendingMovies(currentPage);
          }
          break;
        case 'genre':
          if (selectedGenre) {
            movieData = await getMoviesByGenre(selectedGenre, currentPage);
          } else {
            movieData = await getTrendingMovies(currentPage);
          }
          break;
        default:
          movieData = await getTrendingMovies(currentPage);
      }
      setMovies(movieData.results || []);
      setTotalPages(movieData.total_pages || 1);
    } catch (err) {
      setError('Failed to load movies');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setViewMode('search');
    setCurrentPage(1);
  };

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
    setViewMode('genre');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setCurrentPage(1);
    setSearchQuery('');
    setSelectedGenre(null);
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="app-title">🎬 Movie Application</h1>
        <div className="view-mode-buttons">
          <button
            className={`view-mode-button ${viewMode === 'trending' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('trending')}
          >
            Trending
          </button>
          <button
            className={`view-mode-button ${viewMode === 'popular' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('popular')}
          >
            Popular
          </button>
        </div>
      </div>

      <SearchBar onSearch={handleSearch} />

      <GenreFilter 
        onGenreSelect={handleGenreSelect} 
        selectedGenre={selectedGenre}
      />

      <MovieList 
        movies={movies} 
        loading={loading} 
        error={error}
      />

      {!loading && !error && movies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home; 