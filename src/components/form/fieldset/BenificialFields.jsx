import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Stack, TextField } from "@mui/material";

export const BenificialFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Administrator Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Full Name"
          variant="outlined"
          name="administratorFullname"
          value={props?.row?.administratorFullname}
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
          name="administratorTIN"
          value={props?.row?.administratorTIN}
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
          name="administratorStreet"
          value={props?.row?.administratorStreet}
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
          id="outlined-basic"
          label="Barangay/District"
          variant="outlined"
          name="administratorBrgy"
          value={props?.row?.administratorBrgy}
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
          id="outlined-basic"
          label="City/Municipality"
          variant="outlined"
          name="administratorCity"
          value={props?.row?.administratorCity}
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
          id="outlined-basic"
          label="Province"
          variant="outlined"
          name="administratorProvince"
          value={props?.row?.administratorProvince}
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
          label="Tell. No."
          variant="outlined"
          name="AdminTel"
          value={props?.row?.AdminTel}
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
