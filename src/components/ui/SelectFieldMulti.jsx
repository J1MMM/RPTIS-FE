import { Controller } from "react-hook-form";
import { Checkbox, FormControl, FormHelperText, InputAdornment, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";

function SelectFieldMulti({
  control,
  name,
  label,
  readOnly,
  disabled,
  onChange,
  rules,
  size,
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
      size={size}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        defaultValue={[]}
        control={control}
        rules={{
          required: `${label || name} is required`,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              size={size}
              {...field}
              multiple
              required={required}
              labelId={labelId}
              label={label}
              id={`${labelId}-select`}
              readOnly={readOnly}
              error={!!error}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}

              input={<OutlinedInput label={label} />}
              renderValue={(selected) =>
                selected
                  .map((val) => options.find((opt) => opt.value === val)?.label)
                  .join(', ')
              }
            >
              {options.map((obj, index) => (
                <MenuItem key={index} value={obj.value}>
                  <Checkbox checked={field.value.includes(obj.value)} />
                  <ListItemText primary={obj.label} />
                </MenuItem>
              ))}
            </Select>
          </>
        )}

      />
      {/* <FormHelperText sx={{ fontSize: 8 }}>Tip: start typing to quickly find an option</FormHelperText> */}
    </FormControl>
  );
}

export default SelectFieldMulti;


