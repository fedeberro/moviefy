import ListService from "../services/lists.js";

const getLists = async (req, res, next) => {
  try {
    const user = req.user;
    const response = await ListService.findListByUserID(user.id);
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const addElement = async (req, res, next) => {
  try {
    const { movieID, list } = req.params;
    const user = req.user;
    const listType = list.toLowerCase();
    const response = await ListService.addMovieToList(
      listType,
      parseInt(movieID),
      user.id
    );
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const deleteElement = async (req, res, next) => {
  try {
    const { movieID, list } = req.params;
    const user = req.user;
    const listType = list.toLowerCase();
    await ListService.removeMovieFromList(listType, parseInt(movieID), user.id);
    return res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

export default {
  getLists,
  addElement,
  deleteElement,
};
