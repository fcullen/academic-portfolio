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
import profileImage from "../assets/profile.png";
import { colors } from "../theme/colors";
import SocialIcons from "../components/SocialIcons";

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
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "calc(100vh - 64px - 48px)",
        display: "flex",
        alignItems: "center",
        py: 4,
        //backgroundColor: "red",
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
              <SocialIcons />
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
              <Typography variant="h4" gutterBottom sx={{ color: "#2C3E50" }}>
                News
              </Typography>
              <Typography paragraph sx={{ color: "#2C3E50", mt: 2 }}>
                <Typography variant="body1" sx={{ color: "#2C3E50" }}>
                  <Link href="https://www.google.com">Link 1</Link>
                </Typography>
              </Typography>
              <Typography paragraph sx={{ color: "#2C3E50", mt: 2 }}>
                <Typography variant="body1" sx={{ color: "#2C3E50" }}>
                  <Link href="https://www.google.com">Link 2</Link>
                </Typography>
              </Typography>
              <Typography paragraph sx={{ color: "#2C3E50", mt: 2 }}>
                <Typography variant="body1" sx={{ color: "#2C3E50" }}>
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
