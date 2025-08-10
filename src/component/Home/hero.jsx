import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";


export default function HeroSection({title}) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "120vh",
                display: "flex",
                alignItems: "center",
                background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 50%, ${theme.palette.primary.light} 100%)`,

                color: theme.palette.text.primary,
                py: 6,
                animation: "fadeIn 1.2s ease-in-out",
                "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="bold"
                        sx={{
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            lineHeight: 1.2,
                        }}
                    >
                        Hi, I’m{" "}
                        <Box
                            component="span"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            {title}
                        </Box>
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "600px",
                            color: theme.palette.text.secondary,
                            fontWeight: 300,
                        }}
                    >
                        A Computer Science student passionate about{" "}
                        <strong>full-stack development</strong>,{" "}
                        <strong>artificial intelligence</strong>, and creating
                        impactful digital solutions that make a real
                        difference. Always learning, always building.
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: theme.palette.primary.main,
                                ":hover": {
                                    bgcolor: theme.palette.primary.dark,
                                },
                            }}
                        >
                            View My Projects
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: theme.palette.text.primary,
                                borderColor: theme.palette.text.primary,
                                ":hover": {
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            Contact Me
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

HeroSection.defaultProps = {
    title: "My Portfolio",
};
HeroSection.propTypes = {
    title: PropTypes.string
}