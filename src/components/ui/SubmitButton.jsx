import { Button, CircularProgress } from "@mui/material";

function SubmitButton({ disabled, label = "Submit" }) {
  return (
    <Button
      disabled={disabled}
      startIcon={disabled && <CircularProgress size={16} color="inherit" />}
      variant="contained"
      size="small"
      type="submit"
    >
      {label}
    </Button>
  );
}

export default SubmitButton;
