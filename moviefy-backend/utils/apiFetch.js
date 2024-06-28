import { TMDB_OPTION_HEADERS } from "../constants/fetchHeader.js";
import fetch from "node-fetch";

const ENDPOINT_URL = process.env.TMDB_ENDPOINT_URL;
const API_LANGUAGE = process.env.API_LANGUAGE;

export const apiFetch = async (requestEndpoint, method = "GET") => {
  try {
    if (!requestEndpoint.includes("?")) requestEndpoint += "?";
    return await fetch(
      ENDPOINT_URL.concat(requestEndpoint).concat(`&language=${API_LANGUAGE}`),
      {
        headers: { ...TMDB_OPTION_HEADERS },
        method: method,
      }
    )
      .then(async (response) => {
        if (response.ok) return await response.json();
        return await response.json().then((error) => {
          throw new Error(error.status_message);
        });
      })
      .then((results) => ({ success: true, data: results }))
      .catch((error) => ({ success: false, error: error.message }));
  } catch (error) {
    return { success: false, error: error.message };
  }
};
