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
          required={required}
          size={size}
          type="text"
          margin={margin}
          fullWidth
          variant="outlined"
          label={label}
          disabled={disabled}
          error={!!error}
          helperText={error?.message}
          value={field.value || ""}
          onKeyDown={(e) => {
            // Allow: navigation keys, numbers, decimal point, and Ctrl combinations
            if ("/^[0-9]$/".test(e.key) ||
              e.key === "."
            ) {
              return;
            }
            e.preventDefault();
          }}
          sx={{
            width: width,
          }}
          onChange={(e) => {
            let val = e.target.value;

            // Remove any non-numeric characters except decimal point
            val = val.replace(/[^0-9.]/g, "");

            // Ensure only one decimal point
            const parts = val.split(".");
            if (parts.length > 2) {
              val = parts[0] + "." + parts.slice(1).join("");
            }

            // Check length limit
            if (maxLength && val.length > maxLength) {
              val = val.slice(0, maxLength);
            }

            // Store the value (can be string for partial input like "123." or number for complete values)
            if (val === "" || val === ".") {
              field.onChange("");
              if (onChange) onChange("");
            } else {
              const numValue = parseFloat(val);
              if (!isNaN(numValue)) {
                field.onChange(numValue);
                if (onChange) onChange(numValue);
              } else {
                field.onChange(val);
                if (onChange) onChange(val);
              }
            }
          }}

          slotProps={{
            input: {
              ...adornment,
              readOnly,
            },
          }}
        />
      )}
    />
  );
}

export default NumberInput;
