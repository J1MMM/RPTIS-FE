import { Controller } from "react-hook-form";
import { FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateInput({ control, name, label, readOnly }) {
  return (
    <FormControl margin="dense" fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={label}
              value={field.value ? field.value : null}
              onChange={(newVal) => field.onChange(newVal)}
              readOnly={readOnly}
              slotProps={{ textField: { required: true } }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}

export default DateInput;
