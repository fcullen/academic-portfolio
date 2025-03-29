import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Team from "./pages/Team";
import Data from "./pages/Data";
import { colors } from "./theme/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      color: colors.text.primary,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: colors.background.paper,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.main,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:hover": {
            backgroundColor: colors.primary.light,
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, py: 4, px: 2 }}>
            <Routes>
              <Route path="/ferg-test-website/" element={<Home />} />
              <Route
                path="/ferg-test-website/publications"
                element={<Publications />}
              />
              <Route
                path="/ferg-test-website/research"
                element={<Research />}
              />
              <Route
                path="/ferg-test-website/teaching"
                element={<Teaching />}
              />
              <Route path="/ferg-test-website/team" element={<Team />} />
              <Route path="/ferg-test-website/data" element={<Data />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
