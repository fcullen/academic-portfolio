import React from "react";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const researchAreas = [
  {
    title: "Research Area 1",
    description:
      "Detailed description of your first research area. Explain the key concepts, methodologies, and findings.",
    image: "/research1.jpg",
  },
  {
    title: "Research Area 2",
    description:
      "Detailed description of your second research area. Explain the key concepts, methodologies, and findings.",
    image: "/research2.jpg",
  },
  // Add more research areas as needed
];

const Research = () => {
  return (
    <Container maxWidth="lg">
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={3}
        sx={{ p: 3 }}
      >
        <Typography variant="h4" gutterBottom>
          Research
        </Typography>
        <Typography paragraph>
          My research focuses on [brief overview of your research interests and
          goals]. Below are the main areas of my research:
        </Typography>

        <Grid container spacing={4}>
          {researchAreas.map((area, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <Box
                  component="img"
                  src={area.image}
                  alt={area.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {area.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {area.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </MotionPaper>
    </Container>
  );
};

export default Research;
