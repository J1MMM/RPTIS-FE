import { InputAdornment, TextField } from "@mui/material";

function BaseTextField({
  label,
  name,
  value,
  onChange,
  readOnly,
  pendingPage,
  disabled,
  adornment,
  required = true,
}) {
  return (
    <TextField
      disabled={disabled}
      margin="dense"
      fullWidth
      required={required}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          ...adornment,
          readOnly: readOnly || pendingPage,
        },
      }}
    />
  );
}

export default BaseTextField;
