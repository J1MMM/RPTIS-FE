import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: "#1A237E",
      light: "#FFF",
    },
    mono: {
      main: "#f8fafd",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true, // Apply this to all variants if needed
        margin: "dense",
        variant: "outlined",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // disables auto-uppercase
        },
      },
    },
  },
});

export default theme;
