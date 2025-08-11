import { InputAdornment, TextField } from "@mui/material";

function NumberInput({
  value,
  name,
  label,
  onChange,
  readOnly,
  adornment,
  disabled,
  margin = "dense",
  size = "medium",
}) {
  return (
    <TextField
      required
      size={size}
      type="number"
      margin={margin}
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onWheel={(e) => {
        e.target.blur();
      }}
      disabled={disabled}
      sx={{
        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
        "& input[type=number]": {
          MozAppearance: "textfield", // For Firefox
        },
      }}
      slotProps={{
        input: {
          ...adornment,
          readOnly,
          inputProps: {
            min: 0,
          },
        },
      }}
    />
  );
}

export default NumberInput;
