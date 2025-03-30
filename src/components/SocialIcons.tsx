import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import { colors } from "../theme/colors";

const SocialIcons = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <IconButton
        component={Link}
        href="https://github.com/fergus-cullen"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#b39dfb",
          backgroundColor: "transparent",
          "&:hover": {
            color: colors.secondary.dark,
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "transparent",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <i className="fab fa-github fa-lg"></i>
      </IconButton>
      <IconButton
        component={Link}
        href="https://orcid.org/0000-0000-0000-0000"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#b39dfb",
          backgroundColor: "transparent",
          "&:hover": {
            color: colors.secondary.dark,
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "transparent",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <i className="ai ai-orcid fa-lg"></i>
      </IconButton>
      <IconButton
        component={Link}
        href="https://scholar.google.com/citations?user=fergus-cullen"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#b39dfb",
          backgroundColor: "transparent",
          "&:hover": {
            color: colors.secondary.dark,
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "transparent",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <i className="ai ai-google-scholar fa-lg"></i>
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
