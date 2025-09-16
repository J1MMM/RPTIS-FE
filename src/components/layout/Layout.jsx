import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Header } from "./Header";
import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { PANEL_WIDTH_CLSOE, PANEL_WIDTH_OPEN } from "../../constants/layout";
import NavSidePanel from "../navigation/NavSidePanel.jsx";


const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isMobile); // Auto-close on mobile, open on desktop

  // Handle responsive behavior
  useEffect(() => {
    if (isMobile) {
      setOpen(false); // Close sidebar on mobile by default
    } else {
      setOpen(true); // Open sidebar on desktop by default
    }
  }, [isMobile]);

  // Calculate main content width based on device and sidebar state
  const getMainContentWidth = () => {
    if (isMobile) {
      return "100vw"; // Full width on mobile (sidebar is overlay)
    }
    return `calc(100vw - ${open ? PANEL_WIDTH_OPEN : PANEL_WIDTH_CLSOE}px)`;
  };

  return (
    <Box sx={{
      position: "relative",
      display: "flex",
      width: "100vw",
      height: "100vh",
      boxSizing: "border-box",
      bgcolor: "background.default",
    }}>
      <NavSidePanel open={open} setOpen={setOpen} />
      <Stack
        width={getMainContentWidth()}
        sx={{
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Header onMenuClick={() => setOpen(true)} />
        <Outlet />
      </Stack>
    </Box >
  );
};

export default Layout;
