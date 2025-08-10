import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from '../theme.js';
import Url from "../url.jsx";

function Main() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Url toggleTheme={toggleTheme} darkMode={darkMode} />
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);