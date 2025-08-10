import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Paper, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';

export default function EducationTimeline() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const data = [
        {
            year: "2021 – 2025",
            title: "Bachelor in Computer Science",
            institution: "University of Management and Technology (UMT)",
            details: "CGPA: 3.49",
        },
        {
            year: "2019 – 2021",
            title: "Intermediate (A+)",
            institution: "Superior College",
            details: "Pre-Engineering",
        },
        {
            year: "2017 – 2019",
            title: "Matriculation",
            institution: "Jinah Campus",
            details: "Science Group",
        },
    ];

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
                variant={isMobile ? "h5" : "h4"}
                gutterBottom
                fontWeight="bold"
                textAlign="center"
            >
                Education
            </Typography>
            <Timeline position={isMobile ? "right" : "alternate"}>
                {data.map((edu, index) => (
                    <TimelineItem key={index}>
                        {!isMobile && (
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {edu.year}
                            </TimelineOppositeContent>
                        )}
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <SchoolIcon />
                            </TimelineDot>
                            {index !== data.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                {isMobile && (
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {edu.year}
                                    </Typography>
                                )}
                                <Typography
                                    variant={isMobile ? "subtitle1" : "h6"}
                                    component="span"
                                    fontWeight="bold"
                                >
                                    {edu.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                                >
                                    {edu.institution}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ fontSize: isMobile ? "0.8rem" : "0.9rem" }}
                                >
                                    {edu.details}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
