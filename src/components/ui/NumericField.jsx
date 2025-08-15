import { InputAdornment, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

function NumericField({
  name,
  value,
  label,
  adornment,
  disabled,
  size,
  color,
  margin = "dense",
  readOnly = true,
}) {
  return (
    <NumericFormat
      size={size}
      disabled={disabled}
      customInput={TextField}
      fullWidth
      variant="outlined"
      label={label}
      margin={margin}
      name={name}
      value={value}
      thousandSeparator=","
      allowNegative={false}
      slotProps={{
        input: {
          ...adornment,
          readOnly: readOnly,
        },
      }}
    />
  );
}

export default NumericField;
