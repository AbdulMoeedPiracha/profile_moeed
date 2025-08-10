import React from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    Divider
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}20 100%)`,
                color: theme.palette.text.primary,
                py: 4,
                mt: "auto",
                borderTop: `1px solid ${theme.palette.divider}`,
                animation: "fadeIn 0.8s ease-in-out",
                "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" }
                }
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    {/* About Section */}
                    <Box sx={{ flex: 1 }}>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                            <CodeIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Abdul Moeed Piracha
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                        >
                            Computer Science student passionate about full-stack development, AI,
                            and creating impactful digital solutions.
                        </Typography>
                    </Box>

                    {/* Contact & Social Links */}
                    <Box>
                        <Typography
                            variant="h6"
                            mb={1}
                            sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                        >
                            Connect
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {[
                                {
                                    icon: <GitHubIcon />,
                                    href: "https://github.com/AbdulMoeedPiracha"
                                },
                                {
                                    icon: <LinkedInIcon />,
                                    href: "https://linkedin.com/in/abdul-moeed-piracha-4a38aa301"
                                },
                                {
                                    icon: <EmailIcon />,
                                    href: "mailto:moeedpir330@gmail.com"
                                }
                            ].map((item, idx) => (
                                <IconButton
                                    key={idx}
                                    component="a"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        backgroundColor: theme.palette.action.hover,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.common.white,
                                            transform: "scale(1.1)"
                                        }
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>
                </Stack>

                <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />

                {/* Copyright */}
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.85rem"
                    }}
                >
                    © {new Date().getFullYear()} Abdul Moeed Piracha. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
