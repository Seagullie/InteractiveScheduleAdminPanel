import { fetchUtils } from "react-admin";
import { API_URL } from "../Constants";
import simpleRestProvider from "ra-data-simple-rest";

const fetchJson = (
  url: string,
  options: fetchUtils.Options | undefined = {}
) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = new Headers({ Accept: "application/json" });
    options.headers.set("Authorization", `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const restProvider = simpleRestProvider(API_URL, fetchJson);
