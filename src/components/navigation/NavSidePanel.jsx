
import { Divider, IconButton, Paper, Stack, Typography, } from "@mui/material";
import { NavLink } from "react-router-dom";
import { HEADER_HEIGHT, PANEL_WIDTH_CLSOE, PANEL_WIDTH_OPEN, SIDE_NAV_WIDTH } from "../../constants/layout";
import { teal } from "@mui/material/colors";
import logoImg from "../../assets/images/seal.png";

import {
  Landmark,
  Layers,
  LayoutGrid,
  MessageCircleQuestion,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Wallet,
} from "lucide-react";
export default function NavSidePanel({ open, setOpen }) {
  const toggleSideBar = () => {
    setOpen(v => !v)
  };
  return (
    <Paper
      sx={{
        // p: 2,
        // border: "1px solid blue",
        width: open ? PANEL_WIDTH_OPEN : PANEL_WIDTH_CLSOE,
        height: "100%",
        boxSizing: "border-box",
        userSelect: "none",
        zIndex: 2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        position: "relative",
      }}
    >
      <Stack
        px={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={HEADER_HEIGHT}
        borderBottom={"1px solid #E5E7EB "}
      // border="1px solid"
      >
        <Stack direction="row" alignItems="center" gap={1} display={open ? "" : "none"}>
          <img src={logoImg} width={50} />
          <Stack >
            <Typography
              mt={"-12px"}
              color="#004d40"
              variant="h5"
              fontWeight={600}
              position="relative"
              sx={{
                ":after": {
                  content: "'San Pablo City'",
                  fontSize: 12,
                  position: "absolute",
                  bottom: "-12px",
                  left: 0,
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                },
              }}
            >
              RPTIS
            </Typography>
          </Stack>
        </Stack>

        <IconButton onClick={toggleSideBar}>
          {open ? <PanelLeftClose color="#9CA3AF" /> : <PanelLeftOpen color="#9CA3AF" />}
        </IconButton>
      </Stack>

      <Stack
        p={2}
        gap={1}
      // border={"1px solid"}
      >
        <Typography variant="button" color="textDisabled" marginLeft={1}>
          {open ? "MAIN" : ""} MENU
        </Typography>
        <NavLink to="/" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <LayoutGrid size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Overview</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/assessor" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <Landmark size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Assessor Office</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/landtax-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <Layers size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Landtax Division</Typography>
          </Stack>
        </NavLink>
        <NavLink to="/cash-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <Wallet size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Cash Division</Typography>
          </Stack>
        </NavLink>
      </Stack>

      <Divider flexItem sx={{ mx: 2 }} />

      <Stack
        p={2}
        gap={1}
      // border={"1px solid"}
      >
        <NavLink
          to="/docs"
          className="nav-link"
          style={{ pointerEvents: "none" }}
        >
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <Settings size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Settings</Typography>
          </Stack>
        </NavLink>
        <NavLink
          to="/docs"
          className="nav-link"
          style={{ pointerEvents: "none" }}
        >
          <Stack direction={"row"} alignItems="center" gap={1}>
            <span>
              <MessageCircleQuestion size={24} display="block" />
            </span>
            <Typography display={open ? "" : "none"}>Help and docs</Typography>
          </Stack>
        </NavLink>
      </Stack>

      <Typography
        fontSize={10}
        display={open ? "" : "none"}
        position={"absolute"}
        bottom={8}
        width={"100%"}
        textAlign="center"
        variant="caption"
        color="#9CA3AF"
      >
        &copy; MIS · City Government of San Pablo
      </Typography>
    </Paper>
  );
}
