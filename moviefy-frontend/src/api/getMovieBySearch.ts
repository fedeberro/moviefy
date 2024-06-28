import { APIResponse, MovieResult } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getMovieBySearch(query: string, page: number = 1) {
  const requestURL = `/search/movie?query=${query}&page=${page}`;
  return await apiFetch<APIResponse<MovieResult>>(requestURL);
}
