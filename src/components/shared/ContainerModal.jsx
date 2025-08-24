import { AddRounded, CloseRounded, CreateNewFolderOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { BsFolderPlus } from "react-icons/bs";

function ContainerModal({
  children,
  actionButton,
  title,
  open,
  onClose,
  onSubmit,
  maxWidth = "md",
  disabled,
  headerIcon
}) {
  return (
    <Dialog
      fullWidth
      open={open}
      component={"form"}
      maxWidth={maxWidth}
      onSubmit={onSubmit}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12px", // adjust as needed
          },
        }
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          {headerIcon &&
            <Stack p={1} bgcolor={"background.default"} borderRadius={2}>
              {headerIcon}
            </Stack>
          }
          <Typography fontWeight={600} variant="body1">{title}</Typography>
        </Stack>

        <IconButton disabled={disabled} onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {children}
      </DialogContent>

      <DialogActions sx={{ p: 1.5 }}>{actionButton}</DialogActions>
    </Dialog>
  );
};

export default ContainerModal