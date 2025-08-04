import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function BaseSelect({
  label,
  name,
  value,
  onChange,
  options = [],
  readOnly,
  required = true,
}) {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <FormControl fullWidth margin="dense" required={required}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={`${labelId}-select`}
        value={value || ""}
        name={name}
        label={label}
        onChange={onChange}
        readOnly={readOnly}
      >
        {options.map((val, index) => (
          <MenuItem key={index} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BaseSelect;
