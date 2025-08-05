import { Paper, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const Tab = ({ links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Paper
      component={Stack}
      direction={"row"}
      elevation={0}
      pl={3}
      sx={{
        borderRadius: 0,
        borderBottom: "1px solid #e2e2e2",
        bgcolor: "mono.main",
        userSelect: "none",
      }}
    >
      {links.map((obj, index) => {
        const isActive = location.pathname.startsWith(`/assessor/${obj.to}`);

        return (
          <Typography
            key={index}
            sx={{
              px: 3,
              py: 1.5,
              fontFamily: "Poppins",
              fontWeight: 500,
              color: isActive ? "primary.main" : "#000",
              borderBottom: isActive
                ? "2px solid #1A237E"
                : "2px solid transparent",
              cursor: "pointer",
            }}
            onClick={() => {
              if (!isActive) {
                navigate(obj.to);
              }
            }}
          >
            {obj.label}
          </Typography>
        );
      })}
    </Paper>
  );
};

export default Tab;
