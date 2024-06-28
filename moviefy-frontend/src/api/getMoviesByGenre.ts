import { APIResponse, MovieResult } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getMoviesByGenre(genreID: string, page: number = 1) {
  const requestURL = `/movies/genre?&id=${genreID}&page=${page}`;
  return await apiFetch<APIResponse<MovieResult>>(requestURL);
}
