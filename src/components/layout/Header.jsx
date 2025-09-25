import { Box, Divider, Stack, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import UserAvatar from "../shared/UserAvatar";
import { HEADER_HEIGHT } from "../../constants/layout";

export const Header = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { pathname } = useLocation();
  let title = "";

  // Map route keywords to titles with responsive versions
  const titles = {
    assessor: {
      full: "OFFICE OF THE PROPERTY APPRAISER",
      short: "PROPERTY APPRAISER",
      mobile: "APPRAISER"
    },
    landtax: {
      full: "OFFICE OF THE REVENUE COMMISSIONER",
      short: "REVENUE COMMISSIONER",
      mobile: "REVENUE"
    },
    cash: {
      full: "OFFICE OF THE CITY TREASURY",
      short: "CITY TREASURY",
      mobile: "TREASURY"
    }
  };

  // Find the matching title and get appropriate version
  let titleText = "REAL PROPERTY TAX INFORMATION SYSTEM";
  for (const key in titles) {
    if (pathname.includes(key)) {
      if (isSmallMobile) {
        titleText = titles[key].mobile;
      } else if (isMobile) {
        titleText = titles[key].short;
      } else {
        titleText = titles[key].full;
      }
      break;
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: HEADER_HEIGHT,
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 0.5, sm: 0 },
        bgcolor: "#FFF",
        zIndex: 1,
        borderBottom: "1px solid #E5E7EB",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Left section - Menu button and title */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 0.5, sm: 1 }}
        sx={{
          flex: 1,
          minWidth: 0, // Allow shrinking
        }}
      >
        {isMobile && (
          <IconButton
            onClick={onMenuClick}
            size={isSmallMobile ? "small" : "medium"}
            sx={{
              color: 'text.primary',
              flexShrink: 0,
              '&:hover': {
                bgcolor: 'action.hover',
              }
            }}
          >
            <Menu size={isSmallMobile ? 18 : 20} />
          </IconButton>
        )}

        <Typography
          variant="h6"
          fontWeight={600}
          noWrap
          sx={{
            fontSize: {
              xs: '0.875rem',
              sm: '1rem',
              md: '1.125rem',
              lg: '1.25rem'
            },
            lineHeight: 1.2,
            color: 'text.primary',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: 'none' },
          }}
        >
          {titleText}
        </Typography>
      </Stack>

      {/* Right section - User avatar */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, sm: 2 }}
        sx={{ flexShrink: 0 }}
      >
        {!isSmallMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: '24px',
              borderColor: 'divider',
            }}
          />
        )}
        <UserAvatar />
      </Stack>
    </Box>
  );
};
