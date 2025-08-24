import Avatar from "@mui/material/Avatar";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { useState } from "react";
import { teal } from "@mui/material/colors";
import { ArrowDown, ChevronDown } from "lucide-react";
import UserMenu from "./UserMenu";

const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack alignItems="center" direction="row" gap={1}>
      {/* Avatar with click event to trigger popover */}
      <Avatar
        sx={{
          width: 40,
          height: 40,
          bgcolor: "secondary.main"
        }}
      >JD</Avatar>


      {/* Typography for user name and email */}
      <Stack>
        <Typography variant="body2" fontWeight={600} color={teal[900]}>
          Juan S. Dela Cruz {/* Replace with dynamic name */}
        </Typography>
        <Typography
          display="block"
          variant="caption"
          color={teal[900]}
          fontSize="10px"
          mt={-0.3}
        >
          juandelacruzg@example.com {/* Replace with dynamic email */}
        </Typography>
      </Stack>

      <IconButton onClick={handleClick}>
        <ChevronDown />
      </IconButton>

      {/* Popover with anchorOrigin and transformOrigin layout */}
      <UserMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </Stack>
  );
};

export default UserAvatar;
