import { NavLink } from "react-router-dom";
import {
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  Box
} from "@mui/material";
import {
  HEADER_HEIGHT,
  PANEL_WIDTH_CLSOE,
  PANEL_WIDTH_OPEN,
} from "../../constants/layout";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import CustomNavLink from "./CustomNavLink";
import logoImg from "../../assets/images/seal.png";
import {
  FOOTER_LINKS,
  MAIN_LINKS,
} from "../../constants/routes";

export default function NavSidePanel({ open, setOpen }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const toggleSideBar = () => setOpen((v) => !v);

  // Responsive width calculations
  const getSidebarWidth = () => {
    if (isMobile) return PANEL_WIDTH_OPEN; // Full width on mobile
    if (isTablet) return open ? PANEL_WIDTH_OPEN : PANEL_WIDTH_CLSOE;
    return open ? PANEL_WIDTH_OPEN : PANEL_WIDTH_CLSOE;
  };

  // Sidebar content component
  const SidebarContent = () => (
    <Paper
      sx={{
        width: getSidebarWidth(),
        height: "100%",
        boxSizing: "border-box",
        userSelect: "none",
        zIndex: 2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        position: "relative",
        // display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with logo + toggle */}
      <Stack
        px={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={HEADER_HEIGHT}
        borderBottom={"1px solid #E5E7EB "}
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          display={open || isMobile ? "" : "none"}
        >
          <img src={logoImg} width={48} alt="logo" />
          <Stack>
            <Typography
              color="#004d40"
              fontWeight={600}
              fontSize={18}
              position="relative"
              mt={"-10px"}
              sx={{
                ":after": {
                  content: "'San Pablo City'",
                  fontSize: 10,
                  position: "absolute",
                  left: 0,
                  bottom: "-10px",
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
          {open ? (
            <PanelLeftClose color="#9CA3AF" />
          ) : (
            <PanelLeftOpen color="#9CA3AF" />
          )}
        </IconButton>
      </Stack>

      {/* Main menu */}
      <Stack p={2} gap={1} sx={{ flex: 1 }}>
        <Typography variant="button" color="textDisabled" marginLeft={1}>
          {open || isMobile ? "MAIN" : ""} MENU
        </Typography>

        {MAIN_LINKS.map(({ to, icon, label }) => (
          <CustomNavLink key={to} to={to} className="nav-link">
            <Stack direction="row" alignItems="center" gap={1}>
              {icon}
              <Typography display={open || isMobile ? "" : "none"} noWrap>{label}</Typography>
            </Stack>
          </CustomNavLink>
        ))}
      </Stack>

      <Divider flexItem sx={{ mx: 2 }} />

      {/* Footer links */}
      <Stack p={2} gap={1}>
        {FOOTER_LINKS.map(({ to, icon, label }) => (
          <NavLink
            key={to + label}
            to={to}
            className="nav-link"
            style={{ pointerEvents: "none" }}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              {icon}
              <Typography display={open || isMobile ? "" : "none"} noWrap>{label}</Typography>
            </Stack>
          </NavLink>
        ))}
      </Stack>

      {/* Footer note */}
      <Typography
        fontSize={10}
        display={open || isMobile ? "" : "none"}
        position="absolute"
        bottom={8}
        width="100%"
        textAlign="center"
        variant="caption"
        color="#9CA3AF"
      >
        &copy; MIS · City Government of San Pablo
      </Typography>
    </Paper>
  );

  // Mobile drawer behavior
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: PANEL_WIDTH_OPEN,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        <SidebarContent />
      </Drawer>
    );
  }

  // Desktop/tablet behavior
  return <SidebarContent />;
}
