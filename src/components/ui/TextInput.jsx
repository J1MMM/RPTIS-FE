import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { formatPercent } from "../../utils/formatters";
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
  onChange,
  placeholder,
  required = true,
  type = "text",
  value,
  multiline = false,
  rows,
  shrink,
  margin = "dense",
  isNumeric = false,
  isPercent = false,
  rules = {},
}) {
  return (
    <Controller
      key={name}
      name={name}
      control={control}
      rules={{
        ...rules,
        ...(required && { required: `${label || name} is required` }),
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          required={required}
          type={type}
          size={size}
          disabled={disabled}
          margin={margin}
          fullWidth
          variant="outlined"
          multiline={multiline}
          rows={multiline && rows}
          label={label}
          placeholder={placeholder}
          onChange={(e) => {
            field.onChange(e); // use form hook function
            if (onChange) onChange(e); // use custom onChange function
          }}
          value={
            value ? value : isPercent
              ? formatPercent(field.value)
              : isNumeric
                ? field.value === "" || field.value == null
                  ? ""
                  : numberFormatter.format(field.value)
                : field.value ?? ""
          }
          error={!!error}
          // helperText={error ? error.message : ""}
          slotProps={{
            input: {
              ...adornment,
              readOnly: readOnly || pendingPage,
              inputRef: field.ref,
              ref: field.ref,
            },
            inputLabel: {
              shrink: shrink
            }
          }}
        />
      )}
    />
  );
}

export default TextInput;
