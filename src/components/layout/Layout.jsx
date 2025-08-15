import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavDrawer from "../navigation/NavDrawer";
import { Header } from "./Header";
import { Stack } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import {
  DRAWER_WIDTH_CLOSED,
  DRAWER_WIDTH_OPEN,
  HEADER_HEIGHT,
} from "../../constants/layout";

const styleLayout = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  // overflow: "hidden",
  boxSizing: "border-box",
  transitionDuration: "500ms",
  bgcolor: "mono.main",
};

const Layout = () => {
  const [open, setOpen] = useState(true);
  const auth = useAuth();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styleLayout}>
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Stack direction="row" width="100vw">
        <NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Box
          sx={{
            position: "relative",
            bgcolor: "mono.main",
            flexGrow: 1,
            mt: HEADER_HEIGHT,
            width: `calc(100% - ${
              open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED
            }px)`,
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};

export default Layout;
