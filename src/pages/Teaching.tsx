import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const courses = [
  {
    term: "Fall 2023",
    title: "Course Title 1",
    code: "COURSE-101",
    description: "Brief description of the course content and objectives.",
    syllabus: "/syllabus1.pdf",
  },
  {
    term: "Spring 2023",
    title: "Course Title 2",
    code: "COURSE-102",
    description: "Brief description of the course content and objectives.",
    syllabus: "/syllabus2.pdf",
  },
  // Add more courses as needed
];

const Teaching = () => {
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
          Teaching
        </Typography>
        <Typography paragraph>
          I am passionate about teaching and mentoring students. My teaching
          philosophy focuses on [brief description of your teaching philosophy].
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Current and Past Courses
          </Typography>
          <List>
            {courses.map((course, index) => (
              <div key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        variant="h6"
                        color="text.primary"
                      >
                        {course.title} ({course.code})
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="text.secondary"
                        >
                          {course.term}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          {course.description}
                        </Typography>
                        <br />
                        <Typography
                          component="a"
                          href={course.syllabus}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                          color="primary"
                        >
                          Course Syllabus
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < courses.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </div>
            ))}
          </List>
        </Box>
      </MotionPaper>
    </Container>
  );
};

export default Teaching;
