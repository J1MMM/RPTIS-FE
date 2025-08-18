import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function NumberInput({
  control,
  name,
  label,
  readOnly,
  adornment,
  disabled,
  width,
  margin = "dense",
  size = "medium",
  maxLength = 15,
  rules, // optional validation rules from RHF
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          required
          size={size}
          type="number"
          margin={margin}
          fullWidth
          variant="outlined"
          label={label}
          onWheel={(e) => e.target.blur()}
          disabled={disabled}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-"].includes(e.key)) {
              e.preventDefault();
            }
          }}
          error={!!error}
          helperText={error?.message}
          sx={{
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            width: width,
          }}
          onInput={(e) => {
            if (maxLength && e.target.value.length > maxLength) {
              e.target.value = e.target.value.slice(0, maxLength);
            }
            field.onChange(e); // ✅ keep RHF in sync
          }}
          slotProps={{
            input: {
              ...adornment,
              readOnly,
              inputProps: { min: 0 },
            },
          }}
        />
      )}
    />
  );
}

export default NumberInput;
