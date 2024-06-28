import { getAuthorizationHeader } from "@/utils/accessToken";
import { apiFetch } from "./apiFetch";
import { ListTypes, MovieInfo } from "@/interfaces/lists";

export async function addMovieToList(movieID: number, list: ListTypes) {
  const authorizationHeader = getAuthorizationHeader();
  const requestURL = `/lists/${list}/${movieID}`;
  return await apiFetch<MovieInfo>(requestURL, {
    method: "PUT",
    headers: { ...authorizationHeader },
  });
}
