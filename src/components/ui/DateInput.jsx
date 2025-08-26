import { Controller } from "react-hook-form";
import { FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function DateInput({
  control,
  name,
  label,
  readOnly,
  yearOnly,
  popperClass,
  rules,
  required = true,
}) {
  return (
    <FormControl margin="dense" fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          rules={{
            required: `${label || name} is required`,
            ...rules,
          }}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              {...field}
              label={label}
              value={field.value ? dayjs(field.value) : null}
              onChange={(newVal) => field.onChange(newVal)}
              readOnly={readOnly}
              format={yearOnly ? "YYYY" : "MM/DD/YYYY"}
              openTo={yearOnly ? "year" : "day"}
              views={yearOnly ? ["year"] : ["year", "month", "day"]}
              slotProps={{
                textField: {
                  error: !!error,
                  helperText: error?.message,
                  required: required,
                },
                popper: {
                  className: popperClass,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}

export default DateInput;
