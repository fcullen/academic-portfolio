import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../theme/colors";

const MotionBox = motion(Box);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  webpage: string;
  publications: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Research Fellow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    bio: "Dr. Johnson specializes in galaxy formation and evolution, with particular interest in the role of dark matter in shaping galactic structures.",
    webpage: "https://example.com/sarah-johnson",
    publications: [
      "Johnson, S., et al. (2023) 'Dark Matter Distribution in Early Galaxies'",
      "Johnson, S., et al. (2022) 'The Role of Feedback in Galaxy Formation'",
    ],
  },
  {
    name: "Dr. Michael Chen",
    role: "Postdoctoral Researcher",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    bio: "Dr. Chen's research focuses on exoplanet atmospheres and the potential for life beyond Earth.",
    webpage: "https://example.com/michael-chen",
    publications: [
      "Chen, M., et al. (2023) 'Atmospheric Composition of Super-Earths'",
      "Chen, M., et al. (2022) 'Biosignatures in Exoplanet Atmospheres'",
    ],
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    bio: "Dr. Rodriguez investigates the formation and evolution of star clusters, with a focus on their role in galactic chemical evolution.",
    webpage: "https://example.com/emily-rodriguez",
    publications: [
      "Rodriguez, E., et al. (2023) 'Star Cluster Formation in Dwarf Galaxies'",
      "Rodriguez, E., et al. (2022) 'Chemical Abundances in Young Clusters'",
    ],
  },
  {
    name: "Dr. James Wilson",
    role: "Research Scientist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    bio: "Dr. Wilson's work focuses on gravitational wave astronomy and its applications to understanding black hole mergers.",
    webpage: "https://example.com/james-wilson",
    publications: [
      "Wilson, J., et al. (2023) 'Gravitational Wave Signatures of Binary Black Holes'",
      "Wilson, J., et al. (2022) 'Black Hole Merger Rates in the Early Universe'",
    ],
  },
  {
    name: "Dr. Lisa Zhang",
    role: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop",
    bio: "Dr. Zhang studies the interstellar medium and its role in star formation, particularly in high-redshift galaxies.",
    webpage: "https://example.com/lisa-zhang",
    publications: [
      "Zhang, L., et al. (2023) 'Molecular Gas in Early Galaxies'",
      "Zhang, L., et al. (2022) 'Star Formation Efficiency in the Early Universe'",
    ],
  },
];

const Team = () => {
  return (
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 4, color: colors.text.primary }}
        >
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: colors.background.paper,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 3,
                    gap: 3,
                    borderBottom: `4px solid ${colors.border.main}`,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `4px solid ${colors.border.main}`,
                    }}
                    image={member.image}
                    alt={member.name}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: colors.text.primary }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: colors.secondary.main, mb: 1 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography sx={{ color: colors.text.primary }}>
                      {member.bio}
                    </Typography>
                  </Box>
                </Box>
                <CardContent
                  sx={{ flexGrow: 1, backgroundColor: colors.background.card }}
                >
                  <Link
                    href={member.webpage}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: colors.secondary.main,
                      mb: 2,
                      display: "block",
                    }}
                  >
                    Personal Website →
                  </Link>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: colors.text.primary }}
                  >
                    Recent Publications
                  </Typography>
                  <List>
                    {member.publications.map((pub, idx) => (
                      <React.Fragment key={idx}>
                        <ListItem>
                          <ListItemText
                            primary={pub}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: colors.text.secondary,
                            }}
                          />
                        </ListItem>
                        {idx < member.publications.length - 1 && (
                          <Divider
                            variant="inset"
                            component="li"
                            sx={{ borderColor: colors.border.divider }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MotionBox>
    </Container>
  );
};

export default Team;
