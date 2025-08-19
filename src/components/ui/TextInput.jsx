import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { formatPercent } from "../../utils/formatters";
import CustomTextField from "./SyledTextField";
const numberFormatter = new Intl.NumberFormat("en-US");

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
  isNumeric = false,
  isPercent = false,
  rules = {},
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
          value={
            isPercent
              ? formatPercent(field.value)
              : isNumeric
                ? field.value === "" || field.value == null
                  ? ""
                  : numberFormatter.format(field.value)
                : field.value ?? ""
          }
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
