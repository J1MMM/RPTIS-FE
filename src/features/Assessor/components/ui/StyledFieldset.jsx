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
      <legend style={{ color: "#1A237E" }}>{title}</legend>
      {children}
    </Box>
  );
}

export default StyledFieldset;
