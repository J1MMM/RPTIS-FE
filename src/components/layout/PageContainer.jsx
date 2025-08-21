import { Box } from "@mui/material";

export const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        p: 2,
        boxSizing: "border-box",
        bgcolor: "mono",
      }}
    >
      {/* <Box height={`calc(100vh - ${230}px)`} width="100%"> */}
      <Box>
        {children}
      </Box>
    </Box>
  );
};
