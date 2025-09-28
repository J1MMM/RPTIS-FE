import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
} from "@mui/material";
import { Controller } from "react-hook-form";

function RadioInput({
    name,
    control,
    label,
    rules,
    options = [],
    required = true,
    readOnly = false,
}) {
    return (
        <Stack direction="row" width="100%" alignItems="center">
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field, fieldState: { error } }) => (
                    <FormControl
                        component="fieldset"
                        error={!!error}
                        required={required}
                        sx={
                            label && {
                                border: "1px solid",
                                borderColor: error ? "error.main" : "grey.400",
                                borderRadius: 1,
                                px: 2,
                                pb: 0.5,
                                mt: -0.5,
                                width: "100%",
                            }
                        }
                    >
                        {label && (
                            <FormLabel component="legend" sx={{ fontSize: 12, px: 0.5 }}>
                                {label}
                            </FormLabel>
                        )}

                        <RadioGroup
                            row
                            value={field.value}
                            onChange={(e) => {
                                let val = e.target.value;
                                // convert "true"/"false" strings back to booleans if options are boolean
                                if (val === "true") val = true;
                                if (val === "false") val = false;
                                field.onChange(val);
                            }}
                        >
                            {options.map((v, i) => (
                                <FormControlLabel
                                    key={i}
                                    label={v?.label}
                                    value={String(v?.value)} // force values to string for RadioGroup
                                    control={<Radio disabled={readOnly} />}
                                />
                            ))}
                        </RadioGroup>

                        {error && <FormHelperText>{error.message}</FormHelperText>}
                    </FormControl>
                )}
            />
        </Stack>
    );
}

export default RadioInput;
