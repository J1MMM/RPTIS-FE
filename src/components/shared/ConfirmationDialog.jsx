import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const ConfirmationDialog = ({
  open,
  setOpen,
  title,
  content,
  confirm,
  disabled,
  serverity,
  label,
}) => {
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    if (open) setDisableBtn(false);
  }, [open]);

  return (
    <Dialog
      open={open}
      aria-describedby="alert-dialog-description"
      component={"span"}
    >
      <DialogTitle
        component={"span"}
        sx={{ bgcolor: "primary.main", p: .5 }}
        color="white"
      >
      </DialogTitle>
      <DialogContent component={"span"} dividers sx={{ p: 2 }}>
        <DialogContentText component={"span"} id="alert-dialog-description">
          <Alert
            component={"span"}
            sx={{
              maxWidth: "450px",
              display: "flex",
              gap: 2,
              alignItems: "center",
              "& .MuiAlert-icon": {
                fontSize: 48,
                padding: 0,
                margin: 0,
                color: "primary.main"
              },
              bgcolor: "#FFF"
            }}
            severity={serverity || "info"}
          >
            <Stack gap={1}>
              <Typography component={"span"} variant="h6">
                {title}
              </Typography>
              <Typography component={"span"} variant="body1" >
                {content}
              </Typography>
            </Stack>
          </Alert>
        </DialogContentText>
      </DialogContent>
      <DialogActions component={"span"}>
        <>
          <Button
            disabled={!!disabled || disableBtn}
            variant="outlined"
            size="small"
            onClick={setOpen}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            disabled={!!disabled || disableBtn}
            variant="contained"
            size="small"
            color={serverity || "primary"}
            onClick={() => {
              setDisableBtn(true)
              confirm()
            }}
          >
            {!!disabled ? (
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress size={18} color="inherit" />
                <span>Loading...</span>
              </Box>
            ) : (
              <span>{label || "confirm"}</span>
            )}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
