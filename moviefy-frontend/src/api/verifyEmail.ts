import { APIMessage } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function verifyEmail(email: string, token: string) {
  const requestURL = `/users/verify-email`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, verificationToken: token }),
  });
}

export async function resendVerificationEmail(email: string) {
  const requestURL = `/users/send-verification-email`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}
