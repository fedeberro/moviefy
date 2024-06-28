export function getAccessTokenLS() {
  return localStorage.getItem("accessToken");
}

export function getAuthorizationHeader() {
  const acessToken = getAccessTokenLS();
  return { Authorization: `Bearer ${acessToken}` };
}
