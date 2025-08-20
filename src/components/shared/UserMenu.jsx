import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import backgroundImage from "../../assets/images/header-bg.jpg";
import { Logout } from "@mui/icons-material";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { LogOutIcon, MessageCircleQuestion, Settings, UserRound } from "lucide-react";
import ContainerModal from "./ContainerModal";

export const UserMenu = (props) => {
  const [modal, setModal] = useState(false)
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    // navigate("/login");
    window.location.reload();
    //navigate to login
  };
  const handleClick = () => {
    setModal(true)
  };

  return (
    <Menu
      sx={{ mt: 3 }}
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
    >
      <ContainerModal open={modal} onClose={() => setModal(false)} maxWidth="sm" title="Logout Modal">
        <TextField label="Email" />
        <TextField label="Password" />
        <Button variant="contained" onClick={handleLogout}>Logout</Button>
      </ContainerModal>
      <Stack minWidth="230px" direction="column" alignItems="center" >
        <MenuItem
          sx={{
            width: "100%",
            gap: 2,
            color: "#808080",
          }}
        >
          <UserRound size={24} display="block" />
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gap: 2,
            color: "#808080",
          }}
        >
          <Settings size={24} display="block" />
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gap: 2,
            color: "#808080",
          }}
        >
          <MessageCircleQuestion size={24} display="block" />
          <Typography>Help and docs</Typography>
        </MenuItem>
        <Divider flexItem sx={{ mx: 2 }} />
        <MenuItem
          onClick={handleClick}
          sx={{
            width: "100%",
            gap: 2,
            color: "#808080",
          }}
        >
          <LogOutIcon size={24} display="block" />
          <Typography>Logout</Typography>
        </MenuItem>
      </Stack>
    </Menu>
  );
};
