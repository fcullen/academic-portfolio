export const colors = {
  // Main colors
  primary: {
    main: "#333", // Dark blue-gray
    light: "#34495E",
    dark: "#1A252F",
  },
  secondary: {
    main: "#b39dfb", // Light purple
    light: "#e7e7ff",
    dark: "#7e57c2",
  },
  // Background colors
  background: {
    default: "#FFFFFF", // White
    paper: "#F5F5F5", // Light gray
    card: "#FFFFFF", // White for card content
  },
  // Text colors
  text: {
    primary: "#2C3E50", // Dark blue-gray
    secondary: "#666666", // Gray
    light: "#FFFFFF", // White
  },
  // Border colors
  border: {
    main: "#b39dfb", // Light purple
    divider: "#E0E0E0", // Light gray
  },
  // Shadow colors
  shadow: {
    purple: "rgba(179, 157, 251, 0.3)", // Light purple with opacity
  },
} as const;
