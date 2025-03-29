import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/your-photo.jpg"
                alt="Your Name"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  mb: 2,
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5" gutterBottom>
                Your Name
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Assistant Professor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                University Name
              </Typography>
            </Paper>
          </MotionBox>
        </Grid>
        <Grid item xs={12} md={8}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Welcome
              </Typography>
              <Typography paragraph>
                I am a researcher and educator in [Your Field]. My work focuses
                on [Brief description of your research interests]. I am
                particularly interested in [Specific areas of interest].
              </Typography>
              <Typography paragraph>
                Currently, I am working on [Current research projects or
                initiatives]. My research has been published in [Notable
                journals or venues].
              </Typography>
              <Typography paragraph>
                I received my Ph.D. from [University Name] in [Year], where I
                worked with [Advisor Name] on [Brief description of your
                dissertation work].
              </Typography>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
