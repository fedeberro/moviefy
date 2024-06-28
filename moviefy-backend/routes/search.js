import { Router } from "express";
import MoviesController from "../controllers/movies.js";
import PeopleController from "../controllers/people.js";

export const searchRouter = Router();

searchRouter.get("/movie", MoviesController.getMovieBySearch);
searchRouter.get("/person", PeopleController.getPersonBySearch);
