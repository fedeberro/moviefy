import { AuthResponse, SignInForm, SignUpForm } from "@/interfaces/user";
import { apiFetch } from "./apiFetch";
import { getAuthorizationHeader } from "@/utils/accessToken";

export function authSignUp(values: SignUpForm) {
  return apiFetch<AuthResponse>("/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}

export function authSignIn(values: SignInForm) {
  return apiFetch<AuthResponse>("/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}

export function authAccessToken() {
  const authorizationHeader = getAuthorizationHeader();
  return apiFetch<AuthResponse>("/users/authToken", {
    method: "POST",
    headers: { ...authorizationHeader },
  });
}
