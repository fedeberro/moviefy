import { APIMessage } from "@/interfaces/apiResults";
import { apiFetch } from "./apiFetch";

export async function sendRecoveryEmail(email: string) {
  const requestURL = `/users/send-recovery-email`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}

export async function verifyRecoveryToken(email: string, token: string) {
  const requestURL = `/users/verify-recovery-token`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, recoveryToken: token }),
  });
}

export async function resetPassword(
  email: string,
  token: string,
  newPassword: string
) {
  const requestURL = `/users/reset-password`;
  return await apiFetch<APIMessage>(requestURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, recoveryToken: token, newPassword }),
  });
}
