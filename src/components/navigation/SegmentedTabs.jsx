import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LINKS = [
  { path: "./land", label: "Land" },
  { path: "./building", label: "Building" },
  { path: "./machinery", label: "Machinery" },
];

const padding = "8px";
const minWidth = 90;

function SegmentedTabs() {
  const navigate = useNavigate();
  const tabs = ["Land", "Building", "Machinery"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (path, i) => {
    setActiveIndex(i);
    navigate(path);
  };

  return (
    <Box p="4px" width="fit-content" borderRadius="8px" bgcolor="bg.grey">
      <Box display="flex" gap={1} position="relative">
        {/* Active background */}
        <Paper
          className="active-bg"
          elevation={1}
          sx={{
            borderRadius: "8px",
            py: 0.5,
            px: 1.5,
            bgcolor: "white",
            minWidth: minWidth,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            cursor: "pointer",
            position: "absolute",
            left: `${activeIndex * (minWidth + 8)}px`, // 100px minWidth + 8px gap approx
            bottom: 0,
            transition: "left 0.3s ease", // smooth movement
          }}
        />

        {LINKS.map((row, i) => (
          <Box
            key={row.label}
            borderRadius="8px"
            py={0.5}
            px={1.5}
            minWidth={minWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(row.path, i)}
          >
            <Typography
              sx={{ userSelect: "none", transitionDuration: "0.1s" }}
              variant="subtitle2"
              fontWeight={i === activeIndex ? "600" : "500"}
              color={i === activeIndex ? "text.primary" : "text.gray"}
              zIndex={1}
            >
              {row.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SegmentedTabs;
