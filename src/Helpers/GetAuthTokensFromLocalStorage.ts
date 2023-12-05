export function GetAuthTokensFromLocalStorage() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("No auth tokens found in local storage");
  }

  return { accessToken, refreshToken };
}
