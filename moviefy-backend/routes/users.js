import { Router } from "express";
import UsersController from "../controllers/users.js";
import { isAdmin, validateToken } from "../utils/accessToken.js";

export const usersRouter = Router();

usersRouter.get("/", validateToken, isAdmin, UsersController.getUsers);
usersRouter.post("/signup", UsersController.signUpUser);
usersRouter.post("/signin", UsersController.signInUser);
usersRouter.post("/authToken", validateToken, UsersController.authToken);
usersRouter.patch("/verify-email", UsersController.verifyEmail);
usersRouter.delete(
  "/:username",
  validateToken,
  isAdmin,
  UsersController.deleteUser
);
usersRouter.post(
  "/send-verification-email",
  UsersController.sendVerificationEmail
);
usersRouter.post("/send-recovery-email", UsersController.sendRecoveryEmail);
usersRouter.post("/verify-recovery-token", UsersController.verifyRecoveryToken);
usersRouter.patch("/reset-password", UsersController.resetPassword);
usersRouter.patch(
  "/:usernameToUpdate",
  validateToken,
  isAdmin,
  UsersController.editUser
);
