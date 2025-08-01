import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const transactionCode = [
  "SD",
  "CS",
  "DC",
  "PC",
  "DP",
  "DT",
  "TR",
  "RC",
  "GR",
  "SP",
];

export const TaxNumberFields = ({ props, handleFormChange }) => {
  return (
    <Stack flexDirection="row" justifyContent="space-between" gap={1}>
      <FormControl fullWidth required>
        <InputLabel>Transaction Code</InputLabel>
        <Select label="Transaction Code">
          {transactionCode.map((c) => (
            <MenuItem value={c}>{c}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        required
        label="ARP No."
        variant="outlined"
        name="ArpNo"
        value={props?.row?.ArpNo}
        onChange={handleFormChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly || props?.pendingPage,
          },
        }}
      />

      <TextField
        fullWidth
        required
        label="PIN"
        variant="outlined"
        name="PIN"
        value={props?.row?.PIN}
        onChange={handleFormChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly,
          },
        }}
      />
    </Stack>
  );
};
