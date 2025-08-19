import {
  AccountBalance,
  Dashboard,
  DashboardCustomize,
  DashboardOutlined,
  FactCheckOutlined,
  PaymentsOutlined,
} from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Menu, Paper, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  HEADER_HEIGHT,
  SIDE_NAV_WIDTH
} from "../../constants/layout";
import { teal } from "@mui/material/colors";
import logoImg from '../../assets/images/seal.png'
import { BsLayoutSidebar, BsList } from "react-icons/bs";

export default function NavSidePanel() {
  return (
    <Paper sx={{
      // p: 2,
      // border: "1px solid blue",
      width: SIDE_NAV_WIDTH,
      height: "100%",
      boxSizing: "border-box",
      userSelect: "none",
      zIndex: 2
    }}>
      <Stack px={2} direction="row" alignItems="center" justifyContent="space-between" height={HEADER_HEIGHT} borderBottom={"1px solid #E5E7EB "}>
        <Stack direction="row" alignItems="center" gap={1}>
          <img src={logoImg} width={38} style={{}} />
          {/* <Box width={38} height={38} sx={{
              background: "linear-gradient(180deg,rgba(40, 127, 113, 1) 0%, rgba(14, 74, 64, 1) 100%)"
            }} borderRadius="14px"></Box> */}
          <Typography color={teal[900]} variant="h5" fontWeight={700}>RPTIS</Typography>
        </Stack>
        <IconButton >
          <BsList />
        </IconButton>
      </Stack>

      <Stack
        p={2}
        // border={"1px solid"}
        gap={1} mt={3} mb={3}>
        <Typography variant="button" color="textDisabled" marginLeft={2}>MAIN MENU</Typography>
        <NavLink to="/" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <DashboardOutlined sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>
              Overview
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/assessor" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <AccountBalance sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>
              Assessor Office
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/landtax-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <FactCheckOutlined sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>
              Landtax Division
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/cash-division" className="nav-link">
          <Stack direction={"row"} alignItems="center" gap={2}>
            <PaymentsOutlined sx={{ fontSize: 28 }} />
            <Typography minWidth={300}>
              Cash Division
            </Typography>
          </Stack>
        </NavLink>
      </Stack>

      <Divider flexItem sx={{ mx: 2 }} />
    </Paper >
  );
}
