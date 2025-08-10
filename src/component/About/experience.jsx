import * as React from "react";
import { Box, Typography, Card, CardContent, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";

export default function ExperienceSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const experiences = [
        {
            year: "Aug 2024 – Oct 2024",
            title: "Full Stack Web Development Internship",
            institution: "InternCraft",
            details: "Worked on full stack web applications using Django (backend) and React (frontend).",
        },
    ];

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
                variant={isMobile ? "h5" : "h4"}
                fontWeight="bold"
                gutterBottom
                textAlign="left"
            >
                Experience
            </Typography>

            <Stack spacing={2}>
                {experiences.map((exp, index) => (
                    <Card key={index} sx={{ display: "flex", alignItems: "center", p: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "secondary.main",
                                color: "white",
                                borderRadius: "50%",
                                p: 1.5,
                                mr: 2,
                                minWidth: 48,
                                minHeight: 48,
                            }}
                        >
                            <WorkIcon />
                        </Box>
                        <CardContent sx={{ p: "8px !important" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                {exp.year}
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {exp.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {exp.institution}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {exp.details}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}
