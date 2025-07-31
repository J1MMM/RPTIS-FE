import { Button, ButtonGroup } from "@mui/material";
import React from "react";

function GroupBtnTabs() {
  return (
    <ButtonGroup sx={{ backgroundColor: "#FFF", mb: 2 }} variant="outlined">
      <Button
        sx={{
          padding: "8px 24px",
          fontFamily: "Poppins",
          borderColor: "#e3e3e3",
          color: "#000",
        }}
      >
        Land
      </Button>
      <Button
        sx={{
          padding: "8px 24px",
          fontFamily: "Poppins",
          borderColor: "#e3e3e3",
          color: "#000",
        }}
      >
        Building
      </Button>
      <Button
        sx={{
          padding: "8px 24px",
          fontFamily: "Poppins",
          borderColor: "#e3e3e3",
          color: "#000",
        }}
      >
        Machinery
      </Button>
    </ButtonGroup>
  );
}

export default GroupBtnTabs;
