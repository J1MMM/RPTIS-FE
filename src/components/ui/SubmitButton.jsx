import { Button, CircularProgress } from "@mui/material";

function SubmitButton({ onClick, isSubmitting, disabled, label = "Submit" }) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      startIcon={isSubmitting && <CircularProgress size={16} color="inherit" />}
      variant="contained"
      size="small"
      type="submit"
    >
      {label}
    </Button>
  );
}

export default SubmitButton;
