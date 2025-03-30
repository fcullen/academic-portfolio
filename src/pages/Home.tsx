import React from "react";
import { Container, Typography, Box, Paper, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";
import SocialIcons from "../components/SocialIcons";
import { colors } from "../theme/colors";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "calc(100vh - 64px - 48px)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "stretch",
          justifyContent: "center",
          minHeight: "100%",
        }}
      >
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ height: "100%" }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: colors.background.paper,
              }}
            >
              <Box
                component="img"
                src="https://ifa.roe.ac.uk/profiles/uoe_distribution/themes/uoe/assets/logo.png"
                alt="University of Edinburgh Logo"
                sx={{
                  width: "200px",
                  height: "auto",
                  mb: 3,
                  objectFit: "contain",
                }}
              />
              <Box
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  mb: 2,
                  border: `4px solid ${colors.border.main}`,
                  boxShadow: `0 0 20px ${colors.shadow.purple}`,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.background.card,
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Fergus"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: colors.text.primary }}
              >
                Fergus Cullen
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: colors.border.main, mb: 1 }}
              >
                Astrophysicist
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text.primary }}>
                Royal Observatory
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text.primary }}>
                University of Edinburgh
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: colors.text.primary, mb: 2 }}
              >
                fergus.cullen@ed.ac.uk
              </Typography>
              <SocialIcons />
            </Paper>
          </MotionBox>
        </Grid>
        <Grid item xs={12} md={8}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ height: "100%" }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: colors.background.paper,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "colors.text.primary" }}
              >
                About Me
              </Typography>
              <Typography paragraph sx={{ color: "colors.text.primary" }}>
                I am a Reader in Galaxy Evolution at the Institute for Astronomy
                at the University of Edinburgh. My research team is funded by a
                UKRI Frontier Research Guarantee Grant (ERC-approved and
                equivalent to the ERC Starting Grant) and our primary research
                focus is the chemical enrichment and dust growth in the early
                Universe.
              </Typography>
              <Typography
                paragraph
                sx={{ color: "colors.text.primary", mt: 2 }}
              >
                We work within a large galaxy evolution group at the Institute
                for Astronomy in collaboration with teams lead by Prof. Jim
                Dunlop, Prof. Ross McLure, Dr. Adam Carnall and Dr. Derek McLeod
                with the specific aim of understanding the formation and
                evolution of galaxies and black holes across cosmic time.
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "colors.text.primary" }}
              >
                News
              </Typography>
              <Typography
                paragraph
                sx={{ color: "colors.text.primary", mt: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "colors.text.primary" }}
                >
                  <Link href="https://www.google.com">Link 1</Link>
                </Typography>
              </Typography>
              <Typography
                paragraph
                sx={{ color: "colors.text.primary", mt: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "colors.text.primary" }}
                >
                  <Link href="https://www.google.com">Link 2</Link>
                </Typography>
              </Typography>
              <Typography
                paragraph
                sx={{ color: "colors.text.primary", mt: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "colors.text.primary" }}
                >
                  <Link href="https://www.google.com">Link 3</Link>
                </Typography>
              </Typography>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
