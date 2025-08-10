import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";


export default function StackHeroSection({title, resume}) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "90vh",
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

                        <Box
                            component="span"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            {title}
                            {resume}
                        </Box>
                    </Typography>



                </Stack>
            </Container>
        </Box>
    );
}


StackHeroSection.propTypes = {
    title: PropTypes.string
}