import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const navTabStyles = {
  padding: "8px 24px",
  fontFamily: "Poppins",
  borderColor: "#e3e3e3",
  color: "#000",
  "&.active": {
    bgcolor: "primary.light", // soft indigo background (from indigo[50])
    color: "primary.main", // your theme blue
    borderColor: "primary.main",
    zIndex: 1,
  },
};

export const NavTabButton = ({ to, children }) => {
  return (
    <Button component={NavLink} to={to} disableRipple sx={navTabStyles}>
      {children}
    </Button>
  );
};
