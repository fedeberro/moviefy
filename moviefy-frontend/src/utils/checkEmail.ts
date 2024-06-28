import { z } from "zod";

export function checkEmail(email: string) {
  const emailCheck = z.string().email("Ingresá un e-mail válido");
  return emailCheck.parse(email);
}
