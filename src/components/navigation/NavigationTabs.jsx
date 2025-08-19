import { Paper, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationTabs = ({ links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Paper
      component={Stack}
      direction={"row"}
      elevation={0}
      sx={{
        borderRadius: 0,
        borderBottom: "1px solid #e2e2e2",
        userSelect: "none",
      }}
    >
      {links.map((obj, index) => {
        const isActive = location.pathname.startsWith(`/assessor/${obj.to}`);

        return (
          <Typography
            variant="subtitle2"
            key={index}
            sx={{
              px: 3,
              py: 1.5,
              ml: index == 0 ? 3 : 0,
              // borderRadius: "8px",
              fontWeight: 500,
              color: isActive ? "primary.main" : "#616161",
              // bgcolor: isActive ? "background.lightMain" : "",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              borderBottom: isActive ? "2px solid" : 'none',
              borderColor: 'primary.main',
              "&:hover": {
                // bgcolor: "background.lightMain"
              }
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

export default NavigationTabs;
