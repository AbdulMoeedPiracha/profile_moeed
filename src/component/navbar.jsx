import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Navbar({ toggleTheme, darkMode, title }) {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Project", path: "/project" },
        { label: "Technology", path: "/technology" },
        { label: "Contact Us", path: "/contact" },
    ];

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <Typography variant="h6" sx={{ m: 2 }}>
                {title}
            </Typography>
            <Divider />
            <List>
                {navItems.map(({ label, path }) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton component={Link} to={path}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2, display: { sm: "none" } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map(({ label, path }) => (
                            <Button
                                key={label}
                                color="inherit"
                                component={Link}
                                to={path}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

Navbar.defaultProps = {
    title: "My Portfolio",
};

Navbar.propTypes = {
    title: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};
