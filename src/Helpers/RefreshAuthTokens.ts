import { API_URL } from "../Constants";
import { GetAuthTokensFromLocalStorage } from "./GetAuthTokensFromLocalStorage";

// fetches new access token from the server in exchange for a refresh token
export async function GetAccessTokenInExchangeForRefreshToken() {
  const apiUrl = API_URL;
  const endpoint = `${apiUrl}/Auth/RefreshToken`;
  const refreshToken = GetAuthTokensFromLocalStorage().refreshToken;

  // debugger;

  const request = new Request(endpoint, {
    method: "POST",
    body: JSON.stringify({ Value: refreshToken }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });

  try {
    const response = await fetch(request);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const accessToken = await response.text();
    // store the token in local storage
    localStorage.setItem("accessToken", accessToken);
  } catch (error: any) {
    throw new Error(error.message || "Network error");
  }
}
