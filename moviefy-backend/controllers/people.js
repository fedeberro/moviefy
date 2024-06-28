import PeopleService from "../services/people.js";

const getPersonDetails = async (req, res) => {
  try {
    const { personID } = req.params;
    const response = await PeopleService.getPersonDetails(personID);
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const getPersonBySearch = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    const response = await PeopleService.getPersonBySearch(query, page);
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

export default {
  getPersonDetails,
  getPersonBySearch,
};
