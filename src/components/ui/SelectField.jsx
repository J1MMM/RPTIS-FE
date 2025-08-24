import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

function SelectField({
  control,
  name,
  label,
  readOnly,
  disabled,
  onChange,
  rules,
  required = true,
  margin = "dense",
  options = [{ value: "", label: "" }],
}) {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <FormControl
      fullWidth
      margin={margin} // This will apply dense spacing
      disabled={disabled}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={{
          required: `${label || name} is required`,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              required={required}
              labelId={labelId}
              label={label}
              id={`${labelId}-select`}
              readOnly={readOnly}
              error={!!error}
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
            {/* {error && <FormHelperText error>{error.message}</FormHelperText>} */}
          </>
        )}

      />
    </FormControl>
  );
}

export default SelectField;
