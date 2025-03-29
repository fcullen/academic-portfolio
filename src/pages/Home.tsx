import React, { useState /*, useEffect */ } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  CircularProgress,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
// import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleScholarIcon from "@mui/icons-material/School";
import profileImage from "../assets/profile.png";

const MotionBox = motion(Box);

const Home = () => {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
          { responseType: "blob" }
        );
        const objectUrl = URL.createObjectURL(response.data);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, []);
  */

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
                backgroundColor: "#F5F5F5",
              }}
            >
              <Box
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  mb: 2,
                  border: "4px solid #b39dfb",
                  boxShadow: "0 0 20px rgba(179, 157, 251, 0.3)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* {loading ? (
                  <CircularProgress sx={{ color: "#b39dfb" }} />
                ) : imageUrl ? (
                  <Box
                    component="img"
                    src={imageUrl}
                    alt="Fergus"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography color="text.secondary">
                    Failed to load image
                  </Typography>
                )} */}
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
              <Typography variant="h5" gutterBottom sx={{ color: "#2C3E50" }}>
                Fergus Cullen
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#b39dfb", mb: 1 }}>
                Astrophysicist
              </Typography>
              <Typography variant="body2" sx={{ color: "#2C3E50" }}>
                Royal Observatory
              </Typography>
              <Typography variant="body2" sx={{ color: "#2C3E50", mb: 2 }}>
                University of Edinburgh
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton
                  component={Link}
                  href="https://github.com/fergus-cullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#b39dfb" }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://linkedin.com/in/fergus-cullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#b39dfb" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://scholar.google.com/citations?user=fergus-cullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#b39dfb" }}
                >
                  <GoogleScholarIcon />
                </IconButton>
              </Box>
            </Paper>
          </MotionBox>
        </Grid>
        <Grid item xs={12} md={8}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "#F5F5F5",
                height: "100%",
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: "#2C3E50" }}>
                About Me
              </Typography>
              <Typography paragraph sx={{ color: "#2C3E50" }}>
                I am a Reader in Galaxy Evolution at the Institute for Astronomy
                at the University of Edinburgh. My research team is funded by a
                UKRI Frontier Research Guarantee Grant (ERC-approved and
                equivalent to the ERC Starting Grant) and our primary research
                focus is the chemical enrichment and dust growth in the early
                Universe.
              </Typography>
              <Typography paragraph sx={{ color: "#2C3E50", mt: 2 }}>
                We work within a large galaxy evolution group at the Institute
                for Astronomy in collaboration with teams lead by Prof. Jim
                Dunlop, Prof. Ross McLure, Dr. Adam Carnall and Dr. Derek McLeod
                with the specific aim of understanding the formation and
                evolution of galaxies and black holes across cosmic time.
              </Typography>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
