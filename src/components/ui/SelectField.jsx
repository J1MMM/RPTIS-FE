import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectField({
  control,
  name,
  label,
  readOnly,
  disabled,
  onChange,
  margin = "dense",
  required = true,
  options = [{ value: "", label: "" }],
}) {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <FormControl
      fullWidth
      margin={margin} // This will apply dense spacing
      required={required}
      disabled={disabled}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={{ required: required && "This field is required" }}
        render={({ field }) => (
          <Select
            {...field}
            labelId={labelId}
            label={label}
            id={`${labelId}-select`}
            readOnly={readOnly}
            onChange={(e) => {
              field.onChange(e); // use form hook function
              if (onChange) onChange(e); // use custom onChange function
            }}
          >
            {options.map((obj, index) => (
              <MenuItem key={index} value={obj.value}>
                {obj.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
}

export default SelectField;
