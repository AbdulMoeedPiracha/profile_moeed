import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function SkillSlider() {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Button
                variant="contained"
                sx={{
                    fontSize: "1rem",
                    padding: "10px 20px",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                    },
                }}
                onClick={() => navigate("/technology")}
            >
                View My Skills
            </Button>
        </Box>
    );
}
