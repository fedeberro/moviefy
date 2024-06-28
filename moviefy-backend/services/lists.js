import { LIST_TYPES } from "../constants/listTypes.js";
import MovieService from "./movies.js";
import UserService from "./users.js";
import List from "../models/lists.js";
import { InvalidListTypeError } from "../errors/InvalidListTypeError.js";
import { UserNotFoundError } from "../errors/UserNotFoundError.js";
import { validateMovieObjectPartial } from "../schemas/movie.js";

const addMovieToList = async (list, movieID, userID) => {
  if (!LIST_TYPES.includes(list)) throw new InvalidListTypeError();
  let userList = await List.findOne({ userID });
  if (!userList) {
    userList = await createList(userID);
  }
  const movie = await MovieService.getMovieDetails(movieID, false);
  const movieObject = validateMovieObjectPartial(movie);
  if (movieObject.success) {
    const movieDetails = movieObject.data;
    const movieAlreadyInList = userList[list].some(
      (m) => m.id === movieDetails.id
    );
    if (movieAlreadyInList) return movieDetails;
    movieDetails.genre_ids = movieDetails.genres.map((genre) => genre.id);
    delete movieDetails.genres;
    userList[list].push(movieDetails);
    await userList.save();
    return movieDetails;
  }
  throw new Error(JSON.parse(movieObject.error.message));
};

const removeMovieFromList = async (list, movieID, userID) => {
  if (!LIST_TYPES.includes(list)) throw new InvalidListTypeError();
  const userList = await List.findOne({ userID });
  if (!userList) return;
  const movieIndex = userList[list].findIndex((m) => m.id === movieID);
  if (movieIndex === -1) return;
  userList[list].splice(movieIndex, 1);
  await userList.save();
};

const findListByUserID = async (userID) => {
  const lists = await List.findOne({ userID });
  if (lists) {
    const { watchlist, seen, favorites } = lists;
    return { watchlist, seen, favorites };
  }
  return { watchlist: [], seen: [], favorites };
};

const createList = (userID) => {
  const user = UserService.getUserByID(userID);
  if (!user) throw new UserNotFoundError();
  return List.create({ userID });
};

export default {
  findListByUserID,
  createList,
  addMovieToList,
  removeMovieFromList,
};
