import { FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material'
import { Controller } from 'react-hook-form'

function RadioInput({ name, control, rules, options = [], required = true }) {
    return (
        <Stack direction="row" width={"100%"} alignItems="center">
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field, fieldState: { error } }) => (
                    <FormControl component="fieldset" error={!!error} required>
                        <RadioGroup {...field} row>
                            {options.map((v, i) => (
                                <FormControlLabel
                                    required={required}
                                    key={i}
                                    label={v?.label}
                                    value={v?.value}
                                    control={<Radio />}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                )}
            />
        </Stack>
    )
}

export default RadioInput