import { ActiveTokenError } from "../errors/ActiveTokenError.js";
import { InvalidInputError } from "../errors/InvalidInputError.js";
import { UserNotFoundError } from "../errors/UserNotFoundError.js";
import User from "../models/user.js";
import { generateAccessToken } from "../utils/accessToken.js";
import {
  generateEmailToken,
  verifyHasActiveToken,
  verifyToken,
} from "../utils/emailToken.js";
import { comparePasswords, hashPassword } from "../utils/hashPassword.js";
import {
  sendPasswordRecoveryEmail,
  sendVerificationEmail,
} from "../utils/mailer.js";

function getAll() {
  return User.find({});
}

function getUserByEmail(email) {
  return User.findOne({ email: email.toLowerCase() });
}

function getUserByID(id) {
  return User.findOne({ _id: id });
}

function getUserByUsername(username) {
  return User.findOne({ username: username.toLowerCase() });
}

async function editUser(username, userChanges) {
  username = username.toLowerCase();
  const userToUpdate = await getUserByUsername(username);
  let available = true;
  if (userChanges.email && userToUpdate.email !== userChanges.email)
    available = await emailAvailable(userChanges.email);
  if (userChanges.username && userToUpdate.username !== userChanges.username)
    available = await usernameAvailable(userChanges.username);
  if (!available)
    throw new InvalidInputError(
      "El e-mail o nombre de usuario no están disponibles"
    );
  return User.findOneAndUpdate({ username }, userChanges, { new: true });
}

async function findUserByEmailOrUsername(emailOrUsername) {
  emailOrUsername = emailOrUsername.toLowerCase();
  const userByEmail = await getUserByEmail(emailOrUsername);
  if (userByEmail) return userByEmail;
  const userByUsername = await getUserByUsername(emailOrUsername);
  if (userByUsername) return userByUsername;
  return null;
}

async function usernameAvailable(username) {
  username = username.toLowerCase();
  return User.findOne({ username }).then((result) => {
    return !result ? true : false;
  });
}

async function emailAvailable(email) {
  email = email.toLowerCase();
  return User.findOne({ email }).then((result) => {
    return !result ? true : false;
  });
}

async function usernameAndEmailAvailable(username, email) {
  username = username.toLowerCase();
  email = email.toLowerCase();
  const isUsernameAvailable = await usernameAvailable(username);
  const isEmailAvailable = await emailAvailable(email);
  return isUsernameAvailable && isEmailAvailable;
}

async function deleteUser(username) {
  username = username.toLowerCase();
  const deletedUser = await User.findOneAndDelete({ username });
  if (!deletedUser) throw new UserNotFoundError();
  return deletedUser;
}

async function signUp(user) {
  const { password } = user;
  const email = user.email.toLowerCase();
  const username = user.username.toLowerCase();

  const emailAndUsernameAvailable = await usernameAndEmailAvailable(
    username,
    email
  );
  if (!emailAndUsernameAvailable) {
    throw new InvalidInputError(
      "El e-mail o nombre de usuario no están disponibles"
    );
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({
    username,
    email,
    hashedPassword,
    avatar: "",
    isAdmin: false,
    verified: false,
  });
  await sendNewVerificationEmail(email);
  return newUser;
}

async function sendNewVerificationEmail(email) {
  email = email.toLowerCase();
  const user = await getUserByEmail(email);
  if (!user) throw new UserNotFoundError();
  if (user.verified)
    throw new InvalidInputError("El e-mail ya está verificado");
  const hasActiveToken = verifyHasActiveToken(user.verificationToken);
  if (hasActiveToken) throw new ActiveTokenError();
  const verificationToken = generateEmailToken();
  sendVerificationEmail(email, user.username, verificationToken.token);
  user.verificationToken = verificationToken;
  await user.save();
}

async function sendNewRecoveryEmail(email) {
  email = email.toLowerCase();
  const user = await getUserByEmail(email);
  if (!user) throw new UserNotFoundError();
  const hasActiveToken = verifyHasActiveToken(user.passwordRecoveryToken);
  if (hasActiveToken) throw new ActiveTokenError();
  const recoveryToken = generateEmailToken();
  sendPasswordRecoveryEmail(email, user.username, recoveryToken.token);
  user.passwordRecoveryToken = recoveryToken;
  await user.save();
}

async function signIn(emailOrUsername, password) {
  emailOrUsername = emailOrUsername.toLowerCase();

  const user = await findUserByEmailOrUsername(emailOrUsername);
  if (!user)
    throw new InvalidInputError("El e-mail o contraseña son incorrectos");
  if (!user.verified)
    throw new InvalidInputError("El usuario no ha verificado su e-mail");
  const isCorrectPassword = await comparePasswords(
    password,
    user.hashedPassword
  );
  if (!isCorrectPassword)
    throw new InvalidInputError("El e-mail o contraseña son incorrectos");
  const accessToken = generateAccessToken(user);
  return { accessToken, user };
}

async function verifyEmail(email, inputToken) {
  email = email.toLowerCase();

  const user = await getUserByEmail(email);
  if (!user) throw new UserNotFoundError();
  if (user.verified)
    throw new InvalidInputError("El e-mail ya está verificado");
  const validToken = verifyToken(user.verificationToken, inputToken);
  if (!validToken)
    throw new InvalidInputError(
      "El código de recuperación es incorrecto o ha expirado"
    );
  user.verified = true;
  user.verificationToken = { token: "", expiresAt: new Date(Date.now()) };
  await user.save();
}

async function verifyRecoveryToken(email, inputToken) {
  email = email.toLowerCase();

  const user = await getUserByEmail(email);
  if (!user) throw new UserNotFoundError();
  const validToken = verifyToken(user.passwordRecoveryToken, inputToken);
  if (!validToken)
    throw new InvalidInputError(
      "El código de recuperación es incorrecto o ha expirado"
    );
  return user;
}

async function resetPassword(email, inputToken, newPassword) {
  email = email.toLowerCase();
  const user = await verifyRecoveryToken(email, inputToken);
  if (!user) throw new UserNotFoundError();
  const hashedPassword = await hashPassword(newPassword);
  user.hashedPassword = hashedPassword;
  user.passwordRecoveryToken = { token: "", expiresAt: new Date(Date.now()) };
  await user.save();
}

export default {
  getAll,
  usernameAvailable,
  emailAvailable,
  usernameAndEmailAvailable,
  signUp,
  getUserByEmail,
  getUserByUsername,
  findUserByEmailOrUsername,
  editUser,
  deleteUser,
  sendNewVerificationEmail,
  sendNewRecoveryEmail,
  getUserByID,
  signIn,
  verifyEmail,
  verifyRecoveryToken,
  resetPassword,
};
