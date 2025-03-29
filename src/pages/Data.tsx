import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { datasets } from "../data/datasets";
import DownloadIcon from "@mui/icons-material/Download";

const MotionPaper = motion(Paper);

const Data = () => {
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
          Data & Resources
        </Typography>
        <List>
          {datasets.map((dataset, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography
                        component="span"
                        variant="h6"
                        color="text.primary"
                      >
                        {dataset.title}
                      </Typography>
                      <Chip
                        label={dataset.format}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {dataset.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 1,
                        }}
                      >
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          Size: {dataset.fileSize}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          Last updated: {dataset.lastUpdated}
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        href={dataset.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 1 }}
                      >
                        Download Dataset
                      </Button>
                    </>
                  }
                />
              </ListItem>
              {index < datasets.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </div>
          ))}
        </List>
      </MotionPaper>
    </Container>
  );
};

export default Data;
