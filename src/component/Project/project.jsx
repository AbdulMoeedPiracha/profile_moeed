import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import MemoryIcon from "@mui/icons-material/Memory";

const projects = [
    {
        title: "AI Teaching Assistant (FYP)",
        shortDesc: "LLM + RAG powered assistant for grading, feedback, and personalized learning.",
        fullDesc:
            "A personalized AI-powered teaching assistant that checks assignments automatically, evaluates answers using rubric-based criteria, assigns grades, and provides targeted feedback. Built using Flutter, React + MUI, Django REST, and integrated with Retrieval-Augmented Generation (RAG) and LLMs for intelligent responses.",
        tech: [
            { label: "Flutter", icon: <SchoolIcon />, color: "primary" },
            { label: "React + MUI", icon: <CodeIcon />, color: "success" },
            { label: "Django REST", icon: <CloudIcon />, color: "secondary" },
            { label: "RAG + LLM", color: "warning" },
        ],
        icon: <SmartToyIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
        title: "Facial Expression Recognition",
        shortDesc: "Computer Vision model using FER2013 dataset to detect emotions.",
        fullDesc:
            "A deep learning model trained on the FER2013 dataset to classify human emotions such as happy, sad, angry, and surprised based on facial expressions. Implemented with OpenCV and TensorFlow for real-time emotion detection.",
        tech: [
            { label: "Python", color: "primary" },
            { label: "OpenCV", color: "success" },
            { label: "TensorFlow", color: "secondary" },
        ],
        icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40 }} color="secondary" />,
    },
    {
        title: "Full-Stack Web Development Internship",
        shortDesc: "Worked on Django + React applications with responsive designs.",
        fullDesc:
            "During my internship, I contributed to developing scalable full-stack applications using Django REST for the backend and React with MUI for the frontend. Implemented responsive UIs, optimized API performance, and collaborated in an agile team.",
        tech: [
            { label: "React", color: "primary" },
            { label: "MUI", color: "success" },
            { label: "Django REST", color: "secondary" },
        ],
        icon: <MemoryIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
        title: "Personal Portfolio",
        shortDesc: "Responsive MUI-based personal portfolio website.",
        fullDesc:
            "A fully responsive personal portfolio website built using React and MUI, showcasing my skills, projects, and experience. Includes dark/light theme toggle and smooth animations.",
        tech: [
            { label: "React", color: "primary" },
            { label: "MUI", color: "success" },
        ],
        icon: <SchoolIcon sx={{ fontSize: 40 }} color="secondary" />,
    },
    {
        title: "Smart Grocery App",
        shortDesc: "Modern grocery ordering platform with payment integration.",
        fullDesc:
            "A grocery ordering platform with a user-friendly interface, secure payment integration, and inventory management system. Built with React for the frontend and Django REST for the backend.",
        tech: [
            { label: "React", color: "primary" },
            { label: "Django REST", color: "secondary" },
            { label: "Bootstrap", color: "success" },
        ],
        icon: <CodeIcon sx={{ fontSize: 40 }} color="primary" />,
    },
];

export default function Projects() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
                behavior: "smooth",
            });
        }
    };


    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 8 } }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{ textAlign: "center", mb: 4 }}
            >
                My Projects
            </Typography>

            <Box sx={{ position: "relative" }}>
                {/* Left scroll button */}
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        position: "absolute",
                        left: -10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        bgcolor: "background.paper",
                        boxShadow: 2,
                        "&:hover": { bgcolor: "grey.200" },
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Scrollable row */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        gap: 2,
                        pb: 2,
                        px: 6,
                        "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
                    }}
                >
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            sx={{
                                minWidth: 300,
                                scrollSnapAlign: "start",
                                borderRadius: 3,
                                boxShadow: 3,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                textAlign: "center",
                                p: 3,
                            }}
                        >
                            {project.icon}
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {project.shortDesc}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1,
                                        justifyContent: "center",
                                        mt: 1,
                                    }}
                                >
                                    {project.tech.map((t, idx) => (
                                        <Chip
                                            key={idx}
                                            icon={t.icon || null}
                                            label={t.label}
                                            color={t.color}
                                            size="small"
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleOpen(project)}
                            >
                                View Details
                            </Button>
                        </Card>
                    ))}
                </Box>

                {/* Right scroll button */}
                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        position: "absolute",
                        right: -10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        bgcolor: "background.paper",
                        boxShadow: 2,
                        "&:hover": { bgcolor: "grey.200" },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>


            {/* Dialog for Project Details */}
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                {selectedProject && (
                    <>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogContent dividers>
                            <Typography variant="body1">{selectedProject.fullDesc}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    );
}
