import { MovieDetails } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getMovieDetails(movieID: string) {
  const requestURL = `/movies/${movieID}/details`;
  return await apiFetch<MovieDetails>(requestURL);
}
