import z from "zod";

export const userEmail = z.string().email();

export const registerUserSchema = z.object({
  email: userEmail,
  username: z.string().min(2).max(16),
  password: z.string().min(8),
});

export const loginUserSchema = z.object({
  emailOrUsername: z.string(),
  password: z.string(),
});

export const userSchema = z.object({
  username: z.string().min(2).max(16),
  password: z.string().min(8),
  email: userEmail,
  isAdmin: z.boolean(),
});

export function validateRegisterUserObject(object) {
  return registerUserSchema.safeParse(object);
}

export function validateRegisterUserObjectPartial(object) {
  return registerUserSchema.partial().safeParse(object);
}

export function validateLoginUserObject(object) {
  return loginUserSchema.safeParse(object);
}

export function validateLoginUserObjectPartial(object) {
  return loginUserSchema.partial().safeParse(object);
}

export function validateUserObject(object) {
  return userSchema.safeParse(object);
}

export function validateUserObjectPartial(object) {
  return userSchema.partial().safeParse(object);
}

export function validateEmail(string) {
  return userEmail.safeParse(string);
}
