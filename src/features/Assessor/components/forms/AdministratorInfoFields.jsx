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
import { FIELD_NAMES } from "../../constants/fieldNames";

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
          name={FIELD_NAMES.ADMINISTRATOR_FULLNAME}
          value={formData[FIELD_NAMES.ADMINISTRATOR_FULLNAME] || ""}
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
          name={FIELD_NAMES.ADMINISTRATOR_STREET}
          value={formData[FIELD_NAMES.ADMINISTRATOR_STREET] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="administratorBrgy-label">
            Barangay/District
          </InputLabel>
          <Select
            labelId="administratorBrgy-label"
            value={formData[FIELD_NAMES.ADMINISTRATOR_BRGY] || ""}
            required
            name={FIELD_NAMES.ADMINISTRATOR_BRGY}
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
          name={FIELD_NAMES.ADMINISTRATOR_CITY}
          value={formData[FIELD_NAMES.ADMINISTRATOR_CITY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="Province"
          variant="outlined"
          name={FIELD_NAMES.ADMINISTRATOR_PROVINCE}
          value={formData[FIELD_NAMES.ADMINISTRATOR_PROVINCE] || ""}
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
          name={FIELD_NAMES.ADMIN_TEL}
          value={formData[FIELD_NAMES.ADMIN_TEL] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="TIN No."
          variant="outlined"
          name={FIELD_NAMES.ADMINISTRATOR_TIN}
          value={formData[FIELD_NAMES.ADMINISTRATOR_TIN] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly } }}
        />
      </Stack>
    </StyledFieldset>
  );
};
