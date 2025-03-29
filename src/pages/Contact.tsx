import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const MotionPaper = motion(Paper);

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

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
          Contact
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Typography paragraph>
                Feel free to reach out to me for collaborations, speaking
                engagements, or any other inquiries.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography>
                  <a
                    href="mailto:your.email@university.edu"
                    style={{ textDecoration: "none" }}
                  >
                    your.email@university.edu
                  </a>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography>
                  Department Name
                  <br />
                  University Name
                  <br />
                  City, State ZIP
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography>+1 (XXX) XXX-XXXX</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="subject"
                label="Subject"
                type="text"
                id="subject"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </MotionPaper>
    </Container>
  );
};

export default Contact;
