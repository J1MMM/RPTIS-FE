import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: "#1E3A8A",
      light: "#E8EAF6",
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
          whiteSpace: "nowrap",
        },
      },
    },
  },
});

export default theme;
