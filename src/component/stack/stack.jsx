import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TechnologyItem from "../stack/stackitem.jsx";
import technologyStackList from "../stack/liststack.jsx";

export default function TechnologyStack() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 900 },
                mx: "auto",
                p: { xs: 1, sm: 2 }
            }}
        >
            {technologyStackList.map(({ category, items }) => (
                <Box key={category} sx={{ mb: { xs: 3, sm: 5 } }}>
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        sx={{
                            mb: 2,
                            borderBottom: 1,
                            borderColor: "divider",
                            pb: 0.5,
                            fontSize: { xs: "1.1rem", sm: "1.25rem" }
                        }}
                    >
                        {category}
                    </Typography>

                    <Table size={isMobile ? "small" : "medium"}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ width: { xs: 60, sm: 80 } }}>
                                    Icon
                                </TableCell>
                                <TableCell>Name & Description</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {items.map((item, index) => (
                                <TechnologyItem
                                    key={index}
                                    item={item}
                                    hover
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => handleOpen(item)}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            ))}

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                fullScreen={isMobile}
            >
                <DialogTitle
                    sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 600 }}
                >
                    {selectedItem?.name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            lineHeight: 1.5
                        }}
                    >
                        {selectedItem?.description || "No description available."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        fullWidth={isMobile}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
