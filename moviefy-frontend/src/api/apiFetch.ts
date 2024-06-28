import { APIError } from "@/interfaces/apiResults";
import { ENDPOINT_URL } from "./options";

export async function apiFetch<ResponseT>(
  endpoint: string,
  options: RequestInit = {}
) {
  if (!endpoint.startsWith("/")) endpoint = "/" + endpoint;
  if (!endpoint.includes("?")) endpoint += "?";
  const requestURL = ENDPOINT_URL.concat(endpoint);
  return await fetch(requestURL, options)
    .then(async (response) => {
      if (response.ok) return await response.json();
      return await response.json().then((error: APIError) => {
        throw new Error(error.error);
      });
    })
    .then((response) => {
      return response as ResponseT;
    });
}
