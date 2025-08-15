import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "@constants/barangays";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";

export const OwnerInfoFields = (props) => {
  const { formData, handleFormChange, readOnly, pendingPage } = props;
  return (
    <StyledFieldset title="Owner's Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Full Name"
          variant="outlined"
          name={FIELDS.OWNER_FULLNAME}
          value={formData[FIELDS.OWNER_FULLNAME]}
          multiline
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="TIN No."
          variant="outlined"
          name={FIELDS.OWNER_TIN}
          value={formData[FIELDS.OWNER_TIN]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
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
          name={FIELDS.OWNER_STREET}
          value={formData[FIELDS.OWNER_STREET]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="Barangay/District">Barangay/District</InputLabel>
          <Select
            required
            labelId="Barangay/District"
            value={formData[FIELDS.OWNER_BARANGAY] || ""}
            name={FIELDS.OWNER_BARANGAY}
            label="Barangay/District"
            onChange={handleFormChange}
            readOnly={readOnly || pendingPage}
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
          name={FIELDS.OWNER_CITY}
          value={formData[FIELDS.OWNER_CITY]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Province"
          variant="outlined"
          name={FIELDS.OWNER_PROVINCE}
          value={formData[FIELDS.OWNER_PROVINCE]}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
          }}
        />
      </Stack>
    </StyledFieldset>
  );
};
