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
