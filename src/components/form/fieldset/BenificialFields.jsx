import React from "react";
import Fieldset from "../../shared/Fieldset";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "../../../utils/constant";

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

        <FormControl fullWidth margin="dense">
          <InputLabel id="Barangay/District">Barangay/District</InputLabel>
          <Select
            labelId="Barangay/District"
            id="demo-simple-select"
            value={props?.row?.administratorBrgy || ""}
            required
            name="administratorBrgy"
            label="Barangay/District"
            onChange={handleFormChange}
            readOnly={props?.readOnly || props?.pendingPage}
          >
            {BRGY_LIST.map((val, index) => (
              <MenuItem key={index} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
    </Fieldset>
  );
};
