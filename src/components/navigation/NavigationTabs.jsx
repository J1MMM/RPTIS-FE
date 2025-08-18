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
              pt: 2,
              // borderRadius: "8px",
              fontFamily: "Poppins",
              fontWeight: 500,
              color: isActive ? "#272727" : "#616161",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              '&:before': isActive ? {
                content: '""',
                bgcolor: "#1E3A8A",
                position: "absolute",
                bottom: "-7px  ",
                right: "50%",
                width: "75%",
                height: "10px",
                borderRadius: "100px",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "0",
                transform: "translate(50%, 0%)",

              } : {}
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
