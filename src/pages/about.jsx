import Footer from "../component/footor.jsx";
import { Box } from "@mui/material";
import ProfessionalSummary from '../component/About/proffessional_summary.jsx'
import EducationTimeline from '../component/About/education.jsx'
import StackHeroSection from "../component/stack/stack_hero.jsx";
import ExperienceSection from "../component/About/experience.jsx"
import SkillsSlider from '../component/About/skills.jsx'
import DownloadResume from "../component/About/resume.jsx"

export default function AboutPage({ toggleTheme, darkMode }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >


            <StackHeroSection title="About Us"  resume={<DownloadResume/>} />
            <ProfessionalSummary  />
            <EducationTimeline  />
            <ExperienceSection />
            <SkillsSlider />


            <Footer />
        </Box>
    );
}
