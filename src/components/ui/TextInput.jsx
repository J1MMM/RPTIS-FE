import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function TextInput({
  control,
  name,
  label,
  readOnly,
  pendingPage,
  disabled,
  adornment,
  size,
  multiline = false,
  margin = "dense",
  required = true,
  rules = {}, // validation rules
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          size={size}
          disabled={disabled}
          margin={margin}
          fullWidth
          required={required}
          variant="outlined"
          multiline={multiline}
          label={label}
          error={!!error}
          helperText={error ? error.message : ""}
          slotProps={{
            input: {
              ...adornment,
              readOnly: readOnly || pendingPage,
            },
          }}
        />
      )}
    />
  );
}

export default TextInput;
