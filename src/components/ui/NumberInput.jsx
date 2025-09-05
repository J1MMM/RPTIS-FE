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
  onChange,
  margin = "dense",
  size = "medium",
  maxLength = 15,
  required = true,
  rules, // optional validation rules from RHF
}) {
  return (
    <Controller
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
          onChange={(e) => {
            let val = e.target.value;

            if (maxLength && val.length > maxLength) {
              val = val.slice(0, maxLength);
            }

            // Convert to number unless empty string
            // const numValue = val === "" ? "" : Number(val);
            const numValue = val === "" ? "" : val;

            field.onChange(numValue); // ✅ ensure RHF stores number
            if (onChange) onChange(numValue);
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
