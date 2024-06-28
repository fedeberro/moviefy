import MovieService from "../services/movies.js";
import { InvalidInputError } from "../errors/InvalidInputError.js";

const getTrendingMovies = async (req, res, next) => {
  try {
    const response = await MovieService.getTrendingMovies();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getMoviesByGenre = async (req, res, next) => {
  try {
    const { id, page = 1 } = req.query;
    if (!id) throw new InvalidInputError("El ID del género es obligatorio.");
    const response = await MovieService.getMoviesByGenre(id, page);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getMovieReviews = async (req, res, next) => {
  try {
    const { movieID } = req.params;
    const response = await MovieService.getMovieReviews(movieID);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getMovieDetails = async (req, res, next) => {
  try {
    const { movieID } = req.params;
    const response = await MovieService.getMovieDetails(movieID, true);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getMovieBySearch = async (req, res, next) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query)
      throw new InvalidInputError("El query de búsqueda es obligatorio.");
    const response = await MovieService.getMovieBySearch(query, page);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default {
  getTrendingMovies,
  getMoviesByGenre,
  getMovieReviews,
  getMovieDetails,
  getMovieBySearch,
};
