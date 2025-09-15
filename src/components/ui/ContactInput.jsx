import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function ContactInput({
    control,
    name,
    label = "Contact Number",
    readOnly = false,
    disabled = false,
    placeholder = "09XXXXXXXXX",
    required = true, // ✅ new prop
    rules = {},
}) {
    return (
        <Controller
            key={name}
            name={name}
            control={control}
            rules={{
                ...(required && { required: `${label} is required` }),
                pattern: {
                    value: /^09\d{9}$/, // PH mobile format
                    message: "Enter a valid contact number (e.g. 09XXXXXXXXX)",
                },
                ...rules,
            }}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    margin="dense"
                    type="tel"
                    fullWidth
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    inputProps={{
                        maxLength: 11,
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        readOnly,
                    }}
                    onChange={(e) => {
                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                        field.onChange(onlyNums);
                    }}
                    value={field.value ?? ""}
                    error={!!error}
                    helperText={error ? error.message : ""}
                />
            )}
        />
    );
}

export default ContactInput;
