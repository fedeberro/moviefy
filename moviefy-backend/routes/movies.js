import { Router } from "express";
import MoviesController from "../controllers/movies.js";

export const moviesRouter = Router();

moviesRouter.get("/trending", MoviesController.getTrendingMovies);
moviesRouter.get("/genre", MoviesController.getMoviesByGenre);
moviesRouter.get("/:movieID/reviews", MoviesController.getMovieReviews);
moviesRouter.get("/:movieID/details", MoviesController.getMovieDetails);
