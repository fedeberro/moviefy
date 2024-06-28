import { ActorDetails } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function getActorDetails(personID: string) {
  const requestURL = `/people/${personID}/details`;
  return await apiFetch<ActorDetails>(requestURL);
}
