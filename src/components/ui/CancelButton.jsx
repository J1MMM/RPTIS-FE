import { Button } from "@mui/material";
import React from "react";

function CancelButton({ onClick, disabled }) {
  return (
    <Button disabled={disabled} variant="outlined" size="small" color="primary" onClick={onClick}>
      Cancel
    </Button>
  );
}

export default CancelButton;
