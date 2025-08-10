import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#019cb8",
            light: "#4dd0e1",
            dark: "#017a8a",
        },
        secondary: {
            main: "#ff9800",
            light: "#ffc947",
            dark: "#c66900",
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
        text: {
            primary: "#052649",
            secondary: "rgba(5,38,73,0.7)",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#019cb8",
            light: "#4dd0e1",
            dark: "#017a8a",
        },
        secondary: {
            main: "#ff9800",
            light: "#ffc947",
            dark: "#c66900",
        },
        background: {
            default: "#121212",
            paper: "#1d1d1d",
        },
        text: {
            primary: "#ffffff",
            secondary: "rgba(255,255,255,0.7)",
        },
    },
});
