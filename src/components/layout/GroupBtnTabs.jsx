import { Button, ButtonGroup } from "@mui/material";
import { NavLink } from "react-router-dom";

const btnStyles = {
  padding: "8px 24px",
  fontFamily: "Poppins",
  borderColor: "#e3e3e3",
  color: "#000",
  "&.active": {
    bgcolor: "mono.main",
    color: "primary.main",
  },
};

const LINKS = [
  { to: "./land", label: "Land" },
  { to: "./building", label: "Building" },
  { to: "./machinery", label: "Machinery" },
];

function GroupBtnTabs() {
  return (
    <ButtonGroup sx={{ backgroundColor: "#FFF", mb: 2 }} variant="outlined">
      {LINKS.map((link, index) => (
        <Button
          component={NavLink}
          disableRipple
          key={index}
          to={link.to}
          sx={btnStyles}
        >
          {link.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default GroupBtnTabs;
