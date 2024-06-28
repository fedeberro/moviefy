import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      isAdmin: user.isAdmin,
      verified: user.isVerified,
    },
    process.env.SECRET,
    { expiresIn: "1d" }
  );
}

export function validateToken(req, res, next) {
  const authorization = req.get("authorization");
  const accessToken = checkAuthorization(authorization);

  if (!accessToken) res.status(401).json({ error: "Acceso denegado" });

  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      res
        .status(401)
        .json({ error: "Acceso denegado: Token inválido o expirado" });
    } else {
      req.user = user;
      next();
    }
  });
}

export function isAdmin(req, res, next) {
  const { isAdmin } = req.user;

  if (!isAdmin) res.status(401).json({ error: "Acceso denegado" });

  next();
}

export function getUserIdFromToken(token) {
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    const userId = decodedToken.id;

    return userId;
  } catch (error) {
    console.error("Error al verificar el token:", error);
    return null;
  }
}

export function checkAuthorization(authorization) {
  let token = null;

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  return token;
}
