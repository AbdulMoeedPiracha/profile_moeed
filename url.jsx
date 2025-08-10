import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/home/home.jsx";
import StackPage from "./src/pages/stack.jsx";
import { Navbar } from "./src/component/navbar.jsx";
import AboutPage from "./src/pages/about.jsx";
import ProjectPage from "./src/pages/project.jsx";
import ContactPages from "./src/pages/contactus.jsx";

export default function Url({ toggleTheme, darkMode }) {
    return (
        <BrowserRouter>
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} title="Abdul Moeed Piracha" />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/technology" element={<StackPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPages />} />


            </Routes>
        </BrowserRouter>
    );
}
