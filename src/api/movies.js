import axios from 'axios';

// Use the API key directly for now
const API_KEY = '673eb6fa671cb708a7c357859319b5dc';

// Debug: Log the API key (remove this in production)
console.log('API Key loaded:', API_KEY ? 'Yes' : 'No');

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Helper function to get image URL
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return 'https://via.placeholder.com/300x450?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// Fetch trending movies
export const getTrendingMovies = async (page = 1, language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { 
        api_key: API_KEY,
        page, 
        language 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Fetch popular movies
export const getPopularMovies = async (page = 1, language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { 
        api_key: API_KEY,
        page, 
        language 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// Search movies
export const searchMovies = async (query, page = 1, language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { 
        api_key: API_KEY,
        query, 
        page, 
        language 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

// Get movie details
export const getMovieDetails = async (movieId, language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'credits,videos,similar',
        language
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Get movies by genre
export const getMoviesByGenre = async (genreId, page = 1, language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        page,
        language
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw error;
  }
};

// Get genres list
export const getGenres = async (language = 'en-US') => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { 
        api_key: API_KEY,
        language 
      }
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}; 