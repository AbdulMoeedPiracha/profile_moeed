import { Navbar } from "../component/Navbar.jsx";
import Footer from "../component/footor.jsx";
import { Box } from "@mui/material";
import HeroSection from "../component/Home/hero.jsx";
import TechnologyStack from "../component/stack/stack.jsx";
import technologyStackList from '../component/stack/liststack.jsx';
import AboutText from '../pages/home/about.jsx';
import StackHeroSection from "../component/stack/stack_hero.jsx";

export default function StackPage({ toggleTheme, darkMode }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >


            <StackHeroSection title="Teachnology Stack"  />

            <TechnologyStack list={technologyStackList} />

            <Footer />
        </Box>
    );
}
