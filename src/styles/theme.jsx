import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    neutral: {
      main: '#E5E7EB', // custom color
      contrastText: '#000', // optional: text color on this background
    },
    primary: {
      // main: "#1E3A8A
      main: "#287F71", // leat
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#EB862A", // warm amber (great contrast with navy)
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
      main: "#D97706", // slightly darker amber for warnings
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
    text: {
      primary: "#111827",   // near-black
      secondary: "#374151", // slate gray
      disabled: "#9CA3AF",  // muted gray

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
          display: "none !important"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          whiteSpace: "nowrap",
          borderRadius: '7px',
        },
      },
    },
  },
});

export default theme;
