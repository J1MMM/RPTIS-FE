import { Typography } from "@mui/material";
import React from "react";

function DividerHeading({ children, mt, mb }) {
  return (
    <Typography
      variant="h6"
      color="primary"
      sx={{ borderBottom: "2px solid", my: 2, mt, mb }}
    >
      {children}
    </Typography>
  );
}

export default DividerHeading;
