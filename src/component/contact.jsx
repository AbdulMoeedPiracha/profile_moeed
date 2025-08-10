import React from "react";
import {
    Box,
    Typography,
    Paper,
    Button,
    Stack,
    Avatar,
    useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactPage() {
    const theme = useTheme();

    const email = "moeedpir330@gmail.com";
    const phone = "+92-3246558805";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 4,

                minHeight: "70vh",
            }}
        >
            <Paper
                elevation={12}
                sx={{
                    p: 5,
                    maxWidth: 480,
                    width: "100%",
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
                >
                    Get in Touch
                </Typography>

                <Typography variant="body1" mb={4} color="text.secondary">
                    Feel free to reach out via email or phone.
                </Typography>

                <Stack spacing={4} direction="column" alignItems="center">
                    <Button
                        variant="contained"
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={
                            <Avatar
                                sx={{
                                    bgcolor: theme.palette.primary.dark,
                                    width: 30,
                                    height: 30,
                                }}
                            >
                                <EmailIcon fontSize="small" />
                            </Avatar>
                        }
                        sx={{
                            minWidth: 240,
                            fontWeight: "600",
                            fontSize: "1.1rem",
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: theme.palette.primary.dark,
                                boxShadow: "0 0 8px " + theme.palette.primary.main,
                            },
                        }}
                    >
                        {email}
                    </Button>

                    <Button
                        variant="outlined"
                        href={`tel:${phone}`}
                        startIcon={
                            <Avatar
                                sx={{
                                    bgcolor: theme.palette.primary.light,
                                    color: theme.palette.primary.dark,
                                    width: 30,
                                    height: 30,
                                }}
                            >
                                <PhoneIcon fontSize="small" />
                            </Avatar>
                        }
                        sx={{
                            minWidth: 240,
                            fontWeight: "600",
                            fontSize: "1.1rem",
                            textTransform: "none",
                            borderWidth: 2,
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            "&:hover": {
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                borderColor: theme.palette.primary.dark,
                                boxShadow: "0 0 10px " + theme.palette.primary.main,
                            },
                        }}
                    >
                        {phone}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
