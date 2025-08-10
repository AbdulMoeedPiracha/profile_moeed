
import Footer from "../component/footor.jsx";
import { Box } from "@mui/material";
import Projects from '../component/Project/project.jsx'
import StackHeroSection from "../component/stack/stack_hero.jsx";
import ContactPage from '../component/contact.jsx'
export default function ContactPages({ toggleTheme, darkMode }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >


            <StackHeroSection title="Contact Us"  />

            <ContactPage />

            <Footer />
        </Box>
    );
}
