import {
  validateEmail,
  validateLoginUserObject,
  validateRegisterUserObject,
  validateUserObjectPartial,
} from "../schemas/user.js";
import UserService from "../services/users.js";
import { checkAuthorization } from "../utils/accessToken.js";

const getUsers = async (req, res, next) => {
  try {
    const response = await UserService.getAll();
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const signUpUser = async (req, res, next) => {
  try {
    const userData = validateRegisterUserObject(req.body);
    if (userData.success) {
      const newUser = await UserService.signUp(userData.data);
      return res.status(201).json({ user: newUser });
    } else {
      res.status(400).json({ error: JSON.parse(userData.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const signInUser = async (req, res, next) => {
  try {
    const userData = validateLoginUserObject(req.body);
    if (userData.success) {
      const { emailOrUsername, password } = userData.data;
      const userCredentials = await UserService.signIn(
        emailOrUsername,
        password
      );
      return res.json(userCredentials);
    } else {
      res.status(400).json({ error: JSON.parse(userData.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const { usernameToUpdate } = req.params;
    const updateUser = validateUserObjectPartial(req.body);
    if (updateUser.success) {
      const editedUser = await UserService.editUser(
        usernameToUpdate,
        updateUser.data
      );
      return res.json(editedUser);
    } else {
      res.status(400).json({ error: JSON.parse(updateUser.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const authToken = async (req, res, next) => {
  try {
    const { username } = req.user;
    const authorization = req.get("authorization");
    const accessToken = checkAuthorization(authorization);
    const user = await UserService.getUserByUsername(username);
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    await UserService.deleteUser(username);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { verificationToken } = req.body;
    const emailObject = validateEmail(req.body.email);
    if (emailObject.success) {
      const email = emailObject.data;
      await UserService.verifyEmail(email, verificationToken);
      return res.json({ message: "E-mail verificado correctamente" });
    } else {
      res.status(400).json({ error: JSON.parse(emailObject.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const sendVerificationEmail = async (req, res, next) => {
  try {
    console.log(req.body);
    const emailObject = validateEmail(req.body.email);
    if (emailObject.success) {
      const email = emailObject.data;
      await UserService.sendNewVerificationEmail(email);
      return res.json({
        message: "El e-mail de verificación fue enviado correctamente",
      });
    } else {
      res.status(400).json({ error: JSON.parse(emailObject.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const sendRecoveryEmail = async (req, res, next) => {
  try {
    const emailObject = validateEmail(req.body.email);
    if (emailObject.success) {
      const email = emailObject.data;
      await UserService.sendNewRecoveryEmail(email);
      return res.json({
        message: "El e-mail de recuperación fue enviado correctamente",
      });
    } else {
      res.status(400).json({ error: JSON.parse(emailObject.error.message) });
    }
  } catch (error) {
    next(error);
  }
};

const verifyRecoveryToken = async (req, res, next) => {
  try {
    const { recoveryToken } = req.body;
    const emailObject = validateEmail(req.body.email);
    if (emailObject.success) {
      const email = emailObject.data;
      await UserService.verifyRecoveryToken(email, recoveryToken);
      return res.json({ message: "Código de recuperación correcto" });
    }
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { newPassword, recoveryToken } = req.body;
    const emailObject = validateEmail(req.body.email);
    if (emailObject.success) {
      const email = emailObject.data;
      await UserService.resetPassword(email, recoveryToken, newPassword);
      return res.json({ message: "Contraseña actualizada correctamente" });
    }
  } catch (error) {
    next(error);
  }
};

export default {
  signUpUser,
  signInUser,
  getUsers,
  editUser,
  authToken,
  deleteUser,
  verifyEmail,
  sendVerificationEmail,
  sendRecoveryEmail,
  verifyRecoveryToken,
  resetPassword,
};
