import React from "react";
import { Button, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";

export default function DownloadResume() {
    const theme = useTheme();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Abdul_Moeed_Piracha.pdf";
        link.download = "Abdul_Moeed_Piracha.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "60px",
            }}
        >
            <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{
                    fontSize: "1rem",
                    px: 3,
                    py: 1.2,
                    borderRadius: "30px",
                    fontWeight: "bold",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: theme.palette.primary.contrastText,
                    textTransform: "none",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    },
                }}
            >
                Download Resume
            </Button>
        </Box>
    );
}
