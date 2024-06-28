import bcrypt from "bcrypt";

export function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}
