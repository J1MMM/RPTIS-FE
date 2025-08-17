import { Button } from "@mui/material";
import React from "react";

function CancelButton({ onClose }) {
  return (
    <Button variant="outlined" size="small" color="primary" onClick={onClose}>
      Cancel
    </Button>
  );
}

export default CancelButton;
