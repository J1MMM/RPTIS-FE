import { TextField } from "@mui/material";

function TextInput({
  label,
  name,
  value,
  onChange,
  readOnly,
  pendingPage,
  disabled,
  adornment,
  size,
  margin = "dense",
  required = true,
}) {
  return (
    <TextField
      size={size}
      disabled={disabled}
      margin={margin}
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

export default TextInput;
