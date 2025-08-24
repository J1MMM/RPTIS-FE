import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Header } from "./Header";
import { Stack } from "@mui/material";
import { PANEL_WIDTH_CLSOE, PANEL_WIDTH_OPEN } from "../../constants/layout";
import NavSidePanel from "../navigation/NavSidePanel.jsx";


const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{
      // border: "2px solid red"
      position: "relative",
      display: "flex",
      width: "100vw",
      height: "100vh",
      boxSizing: "border-box",
      bgcolor: "background.default",
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
