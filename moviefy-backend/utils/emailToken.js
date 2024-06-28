export function generateEmailToken() {
  const expiresAt15m = new Date(Date.now() + 15 * 60 * 1000);
  const token = Math.floor(100000 + Math.random() * 900000);
  return {
    token: token.toString(),
    expiresAt: expiresAt15m,
  };
}

export function verifyToken(userActiveToken, inputToken) {
  const { token, expiresAt } = userActiveToken;
  if (token === "" || token !== inputToken) return false;
  if (expiresAt < new Date(Date.now())) return false;
  return true;
}

export function verifyHasActiveToken(userActiveToken) {
  if (userActiveToken.token == null) return false;
  const { token, expiresAt } = userActiveToken;
  if (token === "" || expiresAt < new Date(Date.now())) return false;
  return true;
}
