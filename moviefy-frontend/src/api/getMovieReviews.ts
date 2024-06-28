import { APIResponse, MovieReview } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getMovieReviews(movieID: string) {
  const requestURL = `/movies/${movieID}/reviews`;
  return await apiFetch<APIResponse<MovieReview>>(requestURL);
}
