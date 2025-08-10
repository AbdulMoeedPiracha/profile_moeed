import { Navbar } from "../../component/Navbar.jsx";
import Footer from "../../component/footor.jsx";
import { Box } from "@mui/material";
import HeroSection from "../../component/Home/hero.jsx";
import Profile_image from "../../component/Home/Profile_image.jsx";
import reactLogo from '../../assets/react.svg';
import Profile from "../../assets/moeed.png";
import aboutText from "./about.jsx";
import ChatBotLauncher from '../../component/chatbot/chatbot.jsx'
import AboutText from "../../../src/pages/home/about.jsx";
export default function HomePage({ toggleTheme, darkMode }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >



            <Box
                sx={{
                    position: "relative",
                    flex: 1,
                }}
            >
                <HeroSection title={"Abdul Moeed Piracha"} about={AboutText}/>
                <ChatBotLauncher/>

                {/*<Box*/}
                {/*    sx={{*/}
                {/*        position: "absolute",*/}
                {/*        top: "50%",*/}
                {/*        left: "74%",*/}
                {/*        overflow: "hidden",*/}
                {/*       */}



                {/*    }}>*/}
                {/*    <Profile_image src={Profile} />*/}
                {/*</Box>*/}
            </Box>

            <Footer />
        </Box>
    );
}
