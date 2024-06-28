export class ActiveTokenError extends Error {
  constructor() {
    super(
      "Ya se envió un e-mail con el token de verificación, esperá unos minutos antes de intentar de nuevo. Revisá la carpeta de spam si no lo encontrás en tu bandeja de entrada."
    );
    this.name = "ActiveTokenError";
  }
}
