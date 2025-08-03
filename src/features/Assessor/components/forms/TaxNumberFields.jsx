import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { TRANSACTION_CODE } from "../../constants/dropdownOptions";

export const TaxNumberFields = ({ props, handleFormChange }) => {
  return (
    <Stack
      width={200}
      flexDirection="row"
      justifyContent="space-between"
      gap={1}
    >
      <FormControl fullWidth required>
        <InputLabel>Transaction Code</InputLabel>
        <Select
          label="Transaction Code"
          value={props?.row?.transactionCode || ""}
          name="transactionCode"
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
