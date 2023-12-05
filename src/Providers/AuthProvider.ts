// in src/authProvider.ts
import { AuthProvider } from "react-admin";
import { API_URL } from "../Constants";
import { addRefreshAuthToAuthProvider } from "react-admin";
import { refreshAuth } from "../Helpers/refreshAuth";

const authProviderConfig: AuthProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request(`${API_URL}/Auth/Login`, {
      method: "POST",
      body: JSON.stringify({ userName: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      // debugger;
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const { accessToken, refreshToken } = await response.json();
      // store the tokens in local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error: any) {
      throw new Error(error.message || "Network error");
    }
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("accessToken");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("accessToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("accessToken")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export const authProvider = addRefreshAuthToAuthProvider(
  authProviderConfig,
  refreshAuth
);
