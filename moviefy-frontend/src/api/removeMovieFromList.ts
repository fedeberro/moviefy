import { APIMessage } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";
import { ListTypes } from "@/interfaces/lists";
import { getAuthorizationHeader } from "@/utils/accessToken";

export async function removeMovieFromList(movieID: number, list: ListTypes) {
  const authorizationHeader = getAuthorizationHeader();
  const requestURL = `/lists/${list}/${movieID}`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "DELETE",
    headers: { ...authorizationHeader },
  });
}
