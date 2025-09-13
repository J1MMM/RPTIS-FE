import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function EmailInput({
    control,
    name,
    label = "Email Address",
    readOnly = false,
    disabled = false,
    placeholder = "example@email.com",
    rules = {},
    required = true,
}) {
    return (
        <Controller
            key={name}
            name={name}
            control={control}
            rules={{
                ...(required && { required: `${label} is required` }),
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex
                    message: "Enter a valid email address",
                },
                ...rules,
            }}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    margin="dense"
                    type="email"
                    fullWidth
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputProps={{
                        readOnly,
                    }}
                    onChange={(e) => {
                        field.onChange(e.target.value.trim()); // remove accidental spaces
                    }}
                    value={field.value ?? ""}
                    error={!!error}
                    helperText={error ? error.message : ""}
                />
            )}
        />
    );
}

export default EmailInput;
