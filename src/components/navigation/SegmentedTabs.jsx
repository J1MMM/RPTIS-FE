import { ButtonGroup } from "@mui/material";
import { SegmentedBtn } from "../ui/SegmentedBtn";

const LINKS = [
  { to: "./land", label: "Land" },
  { to: "./building", label: "Building" },
  { to: "./machinery", label: "Machinery" },
];

function SegmentedTabs() {
  return (
    <ButtonGroup sx={{ backgroundColor: "#FFF" }} variant="outlined">
      {LINKS.map((link) => (
        <SegmentedBtn key={link.to} to={link.to}>
          {link.label}
        </SegmentedBtn>
      ))}
    </ButtonGroup>
  );
}

export default SegmentedTabs;
