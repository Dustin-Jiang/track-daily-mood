import { createTheme } from "@suid/material";

const MaterialYouThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#984061",
      contrastText: "#ffffff",
      light: "#ffd9e2",
      dark: "#3e001d",
    },
    secondary: {
      main: "#7a4998",
      contrastText: "#ffffff",
      light: "#f4d9ff",
      dark: "#3e001d",
    },
    error: {
      main: "#ba1a1a",
      contrastText: "#ffffff",
      light: "#ffdad6",
      dark: "#410002",
    },
    background: {
      default: "#fffbff",
      paper: "#fffbff",
    },
    text: {
      primary: "#201a1b",
      secondary: "#201a1b",
    },
    info: {
      main: "#125db2",
      contrastText: "#ffffff",
      light: "#d6e3ff",
    },
    success: {
      main: "#006d43",
      contrastText: "#ffffff",
      light: "#92f7bc",
    },
    warning: {
      main: "#934b00",
      contrastText: "#ffffff",
      light: "#ffdcc5",
    },
  },
});

const MaterialYouThemeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffb1c8",
      contrastText: "#5e1032",
      light: "#7b2949",
      dark: "#ffd9e2",
    },
    secondary: {
      main: "#e5b4ff",
      contrastText: "#481866",
      light: "#61317e",
      dark: "#f4d9ff",
    },
    error: {
      main: "#ffb4ab",
      contrastText: "#690005",
      light: "#93000a",
      dark: "#ffdad6",
    },
    background: {
      default: "#201a1b",
      paper: "#201a1b",
    },
    text: {
      primary: "#ebe0e1",
      secondary: "#ebe0e1",
    },
    info: {
      main: "#125db2",
      contrastText: "#ffffff",
      light: "#d6e3ff",
    },
    success: {
      main: "#006d43",
      contrastText: "#ffffff",
      light: "#92f7bc",
    },
    warning: {
      main: "#934b00",
      contrastText: "#ffffff",
      light: "#ffdcc5",
    },
  },
});

export {
  MaterialYouThemeLight,
  MaterialYouThemeDark
}