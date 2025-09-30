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

const UserMenu = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    // navigate("/login");
    window.location.reload();
    //navigate to login
  };


  return (
    <Menu
      sx={{ mt: 3 }}
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
    >
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
          onClick={handleLogout}
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

export default UserMenu