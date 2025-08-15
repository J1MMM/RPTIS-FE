import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { TRANSACTION_CODE } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";

export const TaxNumberFields = (props) => {
  const { formData, handleFormChange } = props;

  return (
    <Stack width={200} direction="row" justifyContent="space-between">
      <FormControl fullWidth required>
        <InputLabel>Transaction Code</InputLabel>
        <Select
          label="Transaction Code"
          value={formData[FIELDS.TRANSACTION_CODE] || ""}
          name={FIELDS.TRANSACTION_CODE}
          onChange={handleFormChange}
        >
          {TRANSACTION_CODE.map((code, index) => (
            <MenuItem key={index} value={code}>
              {code}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
