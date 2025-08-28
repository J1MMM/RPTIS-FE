import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    neutral: {
      main: "#E5E7EB", // custom color
      contrastText: "#000", // optional: text color on this background
    },
    primary: {
      // main: "#1E3A8A
      main: "#287F71", // leat
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF8C42",
      contrastText: "#000000",
    },
    mono: {
      // main: "#E8EAF6"
      // main: "#f8fafd"
    },
    success: {
      main: "#16A34A", // modern green
      contrastText: "#ffffff",
    },
    error: {
      main: "#DC2626", // red for alerts
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FF8C42",
      contrastText: "#000000",
    },
    info: {
      main: "#0284C7", // bright blue for info states
      contrastText: "#ffffff",
    },
    background: {
      default: "#F2FAF9",
      paper: "#FFFFFF",
    },
    bg: {
      default: "#F2FAF9",
      paper: "#FFFFFF",
      grey: "#F5F5F5",
      gray: "#EAEAEA",
      blue: "#2C5282", // muted navy blue
      green: "#4A7C3A", // earthy green
    },
    text: {
      primary: "#111827", // near-black
      secondary: "#374151", // slate gray
      disabled: "#9CA3AF", // muted gray
      gray: "#818182", //mas matingkad ng conti sa muted gray
    },
    // divider: "#E5E7EB", // subtle gray line
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        margin: "dense",
        variant: "outlined",
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          display: "none !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          whiteSpace: "nowrap",
          borderRadius: "7px",
          paddingTop: "5px",
        },
      },
    },
  },
});

export default theme;
