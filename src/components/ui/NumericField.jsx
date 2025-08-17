import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

function NumericField({
  control,
  name,
  label,
  adornment,
  disabled,
  size = "medium",
  margin = "dense",
  readOnly = true,
  rules, // RHF validation rules
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <NumericFormat
          {...field}
          customInput={TextField}
          fullWidth
          variant="outlined"
          label={label}
          size={size}
          margin={margin}
          disabled={disabled}
          thousandSeparator=","
          allowNegative={false}
          value={field.value ?? ""}
          onValueChange={(values) => {
            field.onChange(values.value); // raw number without formatting
          }}
          slotProps={{
            input: {
              ...adornment,
              readOnly,
            },
          }}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default NumericField;
