import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { publications } from "../data/publications";

const MotionPaper = motion(Paper);

const Publications = () => {
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
          Publications
        </Typography>
        <List>
          {publications.map((pub, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      {pub.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {pub.authors}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {pub.venue} ({pub.year})
                      </Typography>
                      <br />
                      <Typography
                        component="a"
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        color="primary"
                      >
                        DOI: {pub.doi}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < publications.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </div>
          ))}
        </List>
      </MotionPaper>
    </Container>
  );
};

export default Publications;
