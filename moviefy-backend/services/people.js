import {
  getPersonBySearchTMDB,
  getPersonDetailsTMDB,
} from "../tmdbApi/people.js";

const getPersonDetails = async (personID) => {
  return await getPersonDetailsTMDB(personID).then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

const getPersonBySearch = async (query, page = 1) => {
  return await getPersonBySearchTMDB(query, page).then((result) => {
    if (result.success) return result.data;
    throw new Error(result.error);
  });
};

export default {
  getPersonDetails,
  getPersonBySearch,
};
