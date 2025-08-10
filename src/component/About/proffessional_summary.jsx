import React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useMediaQuery,
    Divider
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProfessionalSummary() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                py: 6,
                px: 10,
                background:
                    theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #0d0d0d, #1d1d1d)"
                        : "linear-gradient(135deg, #e0f7fa, #f5f5f5)",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Accordion
                sx={{
                    maxWidth: 10000,
                    width: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    background:
                        theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #019cb8, #052649)"
                            : "linear-gradient(135deg, #019cb8, #03406d)",
                    color: "white",
                    "&:before": { display: "none" },
                }}
                elevation={4}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    sx={{
                        "& .MuiAccordionSummary-content": {
                            justifyContent: "center",
                            textAlign: "justify",
                        },
                    }}
                >
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        sx={{ fontWeight: "bold", letterSpacing: 1 }}
                    >
                        Professional Summary
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ p: isMobile ? 2 : 4 }}>
                    <Divider
                        sx={{
                            mb: 3,
                            backgroundColor: "rgba(255,255,255,0.4)",
                            width: "50%",
                            mx: "auto",
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.9,
                            textAlign: "center",
                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                        }}
                    >
                        Results-driven <strong>Full-Stack Developer</strong> with expertise in{" "}
                        <strong>React</strong>, <strong>Django</strong>, and{" "}
                        <strong>Flutter</strong>, delivering scalable web and mobile
                        applications. Adept at crafting elegant, responsive UI/UX, building
                        robust backend solutions, and optimizing performance for maximum
                        business impact. Passionate about blending{" "}
                        <em>innovation</em> with exceptional{" "}
                        <em>user experience</em>.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
