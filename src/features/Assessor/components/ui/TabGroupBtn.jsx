import { ButtonGroup } from "@mui/material";
import { NavTabButton } from "./NavTabButton";

const LINKS = [
  { to: "./land", label: "Land" },
  { to: "./building", label: "Building" },
  { to: "./machinery", label: "Machinery" },
];

function TabGroupBtn() {
  return (
    <ButtonGroup sx={{ backgroundColor: "#FFF", mb: 2 }} variant="outlined">
      {LINKS.map((link) => (
        <NavTabButton key={link.to} to={link.to}>
          {link.label}
        </NavTabButton>
      ))}
    </ButtonGroup>
  );
}

export default TabGroupBtn;
