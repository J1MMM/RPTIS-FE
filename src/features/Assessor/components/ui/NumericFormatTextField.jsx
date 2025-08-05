import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { NumericFormat } from "react-number-format";

function NumericFormatTextField({ name, value, label }) {
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
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">&#8369;</InputAdornment>
          ),
        },
      }}
    />
  );
}

export default NumericFormatTextField;
