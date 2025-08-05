import { InputAdornment, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

function NumericFormatTextField({ name, value, label, adornment }) {
  return (
    <NumericFormat
      customInput={TextField}
      margin="dense"
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={value}
      thousandSeparator=","
      allowNegative={false}
      slotProps={{
        input: {
          ...adornment,
          readOnly: true,
        },
      }}
    />
  );
}

export default NumericFormatTextField;
