import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../theme/colors";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", path: "/ferg-test-website/" },
    { text: "Publications", path: "/ferg-test-website/publications" },
    { text: "Research", path: "/ferg-test-website/research" },
    { text: "Teaching", path: "/ferg-test-website/teaching" },
    { text: "Team", path: "/ferg-test-website/team" },
    { text: "Data", path: "/ferg-test-website/data" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: colors.primary.main }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/ferg-test-website/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          Fergus Cullen
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleClose}
                  sx={{ color: colors.text.primary }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={RouterLink}
                to={item.path}
                sx={{ ml: 2 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
