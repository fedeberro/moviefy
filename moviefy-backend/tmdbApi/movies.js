import { apiFetch } from "../utils/apiFetch.js";

export async function getTrendingMoviesTMDB() {
  return await apiFetch("/trending/movie/day");
}

export async function getMoviesByGenreTMDB(id, page = 1) {
  return await apiFetch(`/discover/movie?&with_genres=${id}&page=${page}`);
}

export async function getMovieReviewsTMDB(movieID) {
  return await apiFetch(`/movie/${movieID}/reviews`);
}

export async function getMovieDetailsTMDB(movieID, detailed = true) {
  if (detailed)
    return await apiFetch(
      `/movie/${movieID}?append_to_response=reviews,credits,videos`
    );
  return await apiFetch(`/movie/${movieID}`);
}

export async function getMovieBySearchTMDB(query, page = 1) {
  return await apiFetch(`/search/movie?query=${query}&page=${page}`);
}
