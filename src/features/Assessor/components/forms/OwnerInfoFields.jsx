import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "../../../../utils/constant";
import StyledFieldset from "../ui/StyledFieldset";

export const OwnerInfoFields = ({ props, handleFormChange }) => {
  return (
    <StyledFieldset title="Owner's Information">
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

        <FormControl fullWidth margin="dense">
          <InputLabel id="Barangay/District">Barangay/District</InputLabel>
          <Select
            required
            labelId="Barangay/District"
            id="demo-simple-select"
            value={props?.row?.ownerBrgy || ""}
            name="ownerBrgy"
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
    </StyledFieldset>
  );
};
