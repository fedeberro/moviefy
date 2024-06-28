export class InvalidListTypeError extends Error {
  constructor() {
    super("El tipo de lista es inválido");
    this.name = "InvalidListTypeError";
  }
}
