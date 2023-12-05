import { GetAuthTokensFromLocalStorage } from "./GetAuthTokensFromLocalStorage";
import { GetAccessTokenInExchangeForRefreshToken } from "./refreshAuthTokens";

import { jwtDecode } from "jwt-decode";

// https://marmelab.com/react-admin/addRefreshAuthToDataProvider.html#refreshauth

export const refreshAuth = () => {
  const { accessToken } = GetAuthTokensFromLocalStorage();
  const decoded = jwtDecode(accessToken);

  if (!decoded.exp) throw new Error("No expiration date found in access token");

  if (decoded.exp < Date.now() / 1000) {
    // This function will fetch the new tokens from the authentication service and update them in localStorage
    return GetAccessTokenInExchangeForRefreshToken();
  }
  return Promise.resolve();
};
