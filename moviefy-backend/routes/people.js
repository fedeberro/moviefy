import { Router } from "express";
import PeopleController from "../controllers/people.js";

export const peopleRouter = Router();

peopleRouter.get("/:personID/details", PeopleController.getPersonDetails);
