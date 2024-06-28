import { Router } from "express";
import ListsController from "../controllers/lists.js";

export const listsRouter = Router();

listsRouter.get("/", ListsController.getLists);
listsRouter.put("/:list/:movieID", ListsController.addElement);
listsRouter.delete("/:list/:movieID", ListsController.deleteElement);
