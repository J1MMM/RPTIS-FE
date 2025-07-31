import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        p: 2,
        boxSizing: "border-box",
        bgcolor: "mono",
      }}
    >
      <Box height={`calc(100vh - ${230}px)`} width="100%">
        {children}
      </Box>
    </Box>
  );
};
