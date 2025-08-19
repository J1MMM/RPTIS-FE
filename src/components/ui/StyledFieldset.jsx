import { Box } from "@mui/material";

function StyledFieldset({ title, children }) {
  return (
    <Box
      component={"fieldset"}
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 1,
        boxSizing: "boarder-box",
        position: "relative",
      }}
    >
      <Box component="legend" color="primary.main">{title}</Box>
      {children}
    </Box>
  );
}

export default StyledFieldset;
