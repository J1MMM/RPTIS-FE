import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Header } from "./Header";
import { CssBaseline, Stack } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import {
  DRAWER_WIDTH_CLOSED,
  DRAWER_WIDTH_OPEN,
  HEADER_HEIGHT,
  SIDE_NAV_WIDTH,
} from "../../constants/layout";
import NavSidePanel from "../navigation/NavSidePanel.jsx";


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
    <Box sx={{
      position: "relative",
      display: "flex",
      width: "100vw",
      height: "100vh",
      // overflow: "hidden",
      boxSizing: "border-box",
      // transitionDuration: "500ms",
      bgcolor: "",
      // border: "2px solid red"
    }}>

      {/* <Header handleDrawerOpen={handleDrawerOpen} /> */}
      <NavSidePanel />
      <Stack width={`calc(100vw - ${SIDE_NAV_WIDTH}px)`}>
        <Header />
        <Outlet />
      </Stack>
      {/* <Box
          sx={{
            position: "relative",
            bgcolor: "mono.main",
            flexGrow: 1,
            mt: HEADER_HEIGHT,
            width: `calc(100% - ${open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED
              }px)`,
          }}
        >
          <Outlet />
        </Box> */}
    </Box >
  );
};

export default Layout;
