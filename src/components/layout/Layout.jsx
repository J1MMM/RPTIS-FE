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
  PANEL_WIDTH_CLSOE,
  PANEL_WIDTH_OPEN,
  SIDE_NAV_WIDTH,
} from "../../constants/layout";
import NavSidePanel from "../navigation/NavSidePanel.jsx";


const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{
      position: "relative",
      display: "flex",
      width: "100vw",
      height: "100vh",
      // overflow: "hidden",
      boxSizing: "border-box",
      // transitionDuration: "500ms",
      bgcolor: "#F2FAF9",
      // border: "2px solid red"
    }}>

      <NavSidePanel open={open} setOpen={setOpen} />
      <Stack width={`calc(100vw - ${open ? PANEL_WIDTH_OPEN : PANEL_WIDTH_CLSOE}px)`}>
        <Header />
        <Outlet />
      </Stack>
    </Box >
  );
};

export default Layout;
