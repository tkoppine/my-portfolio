"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#ff4081", // pink
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
  },
});

export default theme;