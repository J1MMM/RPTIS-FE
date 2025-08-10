import { Box } from "@mui/material";
import React from "react";

function Fieldset({ title, children }) {
  return (
    <Box
      component={"fieldset"}
      sx={{
        border: "1px solid #1E3A8A",
        borderRadius: 1,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <legend style={{ color: "#1E3A8A" }}>{title}</legend>
      {children}
    </Box>
  );
}

export default Fieldset;
