import { Box, Divider, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import UserAvatar from "../shared/UserAvatar";
import { HEADER_HEIGHT } from "../../constants/layout";

export const Header = () => {
  const { pathname } = useLocation();
  let title = "";

  // Map route keywords to titles
  const titles = {
    assessor: "OFFICE OF THE PROPERTY APPRAISER",
    landtax: "OFFICE OF THE REVENUE COMMISSIONER",
    cash: "OFFICE OF THE CITY TREASURY",
  };

  // Find the matching title
  for (const key in titles) {
    if (pathname.includes(key)) {
      title = titles[key];
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
        px: 3,
        bgcolor: "#FFF",
        zIndex: 1,
        borderBottom: "1px solid #E5E7EB",
        width: "100%",
      }}
    >
      <Stack gap={1} direction="row" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          {title || "REAL PROPERTY TAX INFORMATION SYSTEM"}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <UserAvatar />
      </Stack>
    </Box>
  );
};
