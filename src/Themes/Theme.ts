import { defaultTheme, radiantLightTheme, radiantDarkTheme } from "react-admin";
import red from "@mui/material/colors/red";

export const appThemeLight = {
  ...defaultTheme,
  palette: { ...defaultTheme.palette, secondary: { main: "#1C5D8F" } },
};
export const appThemeDark = { ...defaultTheme, palette: { mode: "dark" } };
