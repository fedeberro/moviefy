import { APIResponse, Actor } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getActorsBySearch(query: string, page: number = 1) {
  const requestURL = `/search/person?query=${query}&page=${page}`;
  return await apiFetch<APIResponse<Actor>>(requestURL);
}
