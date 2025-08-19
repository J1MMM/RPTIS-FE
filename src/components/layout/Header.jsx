import { MenuRounded } from "@mui/icons-material";
import { AppBar, Box, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/favicon.svg";
import backgroundImage from "../../assets/images/header-bg.jpg";
import UserAvatar from "../shared/UserAvatar";
import { HEADER_HEIGHT } from "../../constants/layout";
import { BsList } from "react-icons/bs";



export const Header = (props) => {
  return (

    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: HEADER_HEIGHT,
      px: 3,
      bgcolor: '#FFF',
      zIndex: 1,
      // border: "1px solid red",
      width: "100%",
      borderBottom: "1px solid #E5E7EB"
    }}
    >
      <Stack gap={2} direction={"row"} alignItems={"center"}>
        {/* <Box
          sx={{
            width: "64px",
            position: "relative",
          }}
        >
          <img src={logo} alt="logo" width={"100%"} />
        </Box> */}
        <Typography variant="h6" fontWeight={600} >
          REAL PROPERTY TAX INFORMATION SYSTEM
          {/* Overview */}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <UserAvatar />
      </Stack>
    </Box>
  );
};
