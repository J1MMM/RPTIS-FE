import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectField({
  label,
  name,
  value,
  onChange,
  readOnly,
  disabled,
  margin = "dense",
  required = true,
  options = [{ value: "", label: "" }],
}) {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <FormControl
      fullWidth
      margin={margin}
      required={required}
      disabled={disabled}
    >
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
        {options.map((obj, index) => (
          <MenuItem key={index} value={obj.value}>
            {obj.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
