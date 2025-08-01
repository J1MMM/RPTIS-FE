import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Stack, TextField } from "@mui/material";

export const OwnerInfoFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Owner's Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Full Name"
          variant="outlined"
          name="ownerFullname"
          value={props?.row?.ownerFullname}
          multiline
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="TIN No."
          variant="outlined"
          name="TIN"
          value={props?.row?.TIN}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="House No. & Street"
          variant="outlined"
          name="Street"
          value={props?.row?.Street}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Barangay/District"
          variant="outlined"
          name="Barangay"
          value={props?.row?.Barangay}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="City/Municipality"
          variant="outlined"
          name="city"
          value={props?.row?.City}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Province"
          variant="outlined"
          name="city"
          value={props?.row?.City}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
    </Fieldset>
  );
};
