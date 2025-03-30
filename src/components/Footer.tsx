import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { colors } from "../theme/colors";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/ferg-test-website/";

  // Return null if we're on the homepage
  if (isHomePage) {
    return null;
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Footer;
