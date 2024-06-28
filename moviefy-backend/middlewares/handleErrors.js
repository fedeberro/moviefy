export const handleErrors = (error, req, res, next) => {
  switch (error.name) {
    case "InvalidInputError":
      return res.status(400).json({ error: error.message });
    case "UserNotFoundError":
      return res.status(404).json({ error: error.message });
    case "InvalidListTypeError":
      return res.status(400).json({ error: error.message });
    case "ActiveTokenError":
      return res.status(400).json({ error: error.message });
    default:
      return res.status(500).json({ error: "Ocurrió un error inesperado" });
  }
};
