import { APIResponse, MovieResult } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getTrendingMovies() {
  return await apiFetch<APIResponse<MovieResult>>(`/movies/trending`);
}
