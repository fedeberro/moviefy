import { apiFetch } from "../utils/apiFetch.js";

export async function getPersonDetailsTMDB(personID) {
  return await apiFetch(`/person/${personID}?append_to_response=movie_credits`);
}

export async function getPersonBySearchTMDB(query, page = 1) {
  return await apiFetch(`/search/person?query=${query}&page=${page}`);
}
