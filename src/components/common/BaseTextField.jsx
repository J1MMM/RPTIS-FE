import { TextField } from "@mui/material";

function BaseTextField({
  label,
  name,
  value,
  onChange,
  readOnly,
  pendingPage,
  required = true,
}) {
  return (
    <TextField
      fullWidth
      required={required}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          readOnly: readOnly || pendingPage,
        },
      }}
    />
  );
}

export default BaseTextField;
