import {
  getMovieBySearchTMDB,
  getMovieDetailsTMDB,
  getMovieReviewsTMDB,
  getMoviesByGenreTMDB,
  getTrendingMoviesTMDB,
} from "../tmdbApi/movies.js";

const getMovieDetails = async (movieID, detailed) => {
  return await getMovieDetailsTMDB(movieID, detailed).then((result) => {
    if (result.success) {
      return result.data;
    }
    throw new Error(result.error);
  });
};

const getTrendingMovies = async () => {
  return await getTrendingMoviesTMDB().then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

const getMoviesByGenre = async (genreID, page = 1) => {
  return await getMoviesByGenreTMDB(genreID, page).then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

const getMovieReviews = async (movieID) => {
  return await getMovieReviewsTMDB(movieID).then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

const getMovieBySearch = async (query, page = 1) => {
  return await getMovieBySearchTMDB(query, page).then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

export default {
  getMovieDetails,
  getTrendingMovies,
  getMoviesByGenre,
  getMovieReviews,
  getMovieBySearch,
};
