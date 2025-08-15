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

export const AdministratorInfoFields = (props) => {
  const { formData, handleFormChange, readOnly } = props;
  return (
    <StyledFieldset title="Administrator Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Full Name"
          variant="outlined"
          name={FIELDS.ADMINISTRATOR_FULLNAME}
          value={formData[FIELDS.ADMINISTRATOR_FULLNAME] || ""}
          multiline
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="House No. & Street"
          variant="outlined"
          name={FIELDS.ADMINISTRATOR_STREET}
          value={formData[FIELDS.ADMINISTRATOR_STREET] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="administratorBrgy-label">
            Barangay/District
          </InputLabel>
          <Select
            labelId="administratorBrgy-label"
            value={formData[FIELDS.ADMINISTRATOR_BRGY] || ""}
            required
            name={FIELDS.ADMINISTRATOR_BRGY}
            label="Barangay/District"
            onChange={handleFormChange}
            readOnly={readOnly}
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
          name={FIELDS.ADMINISTRATOR_CITY}
          value={formData[FIELDS.ADMINISTRATOR_CITY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="Province"
          variant="outlined"
          name={FIELDS.ADMINISTRATOR_PROVINCE}
          value={formData[FIELDS.ADMINISTRATOR_PROVINCE] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Tel. No."
          variant="outlined"
          name={FIELDS.ADMIN_TEL}
          value={formData[FIELDS.ADMIN_TEL] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="TIN No."
          variant="outlined"
          name={FIELDS.ADMINISTRATOR_TIN}
          value={formData[FIELDS.ADMINISTRATOR_TIN] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />
      </Stack>
    </StyledFieldset>
  );
};
