import { Stack, TextField } from "@mui/material";
import StyledFieldset from "../ui/StyledFieldset";
import { FIELD_NAMES } from "../../constants/fieldNames";

function LandBounderiesFields(props) {
  const { formData, handleFormChange } = props;
  return (
    <StyledFieldset title="Boundaries">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="North"
          variant="outlined"
          name={FIELD_NAMES.NORTH_BOUNDARY}
          value={formData[FIELD_NAMES.NORTH_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="South"
          variant="outlined"
          name={FIELD_NAMES.SOUTH_BOUNDARY}
          value={formData[FIELD_NAMES.SOUTH_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="East"
          variant="outlined"
          name={FIELD_NAMES.EAST_BOUNDARY}
          value={formData[FIELD_NAMES.EAST_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="West"
          variant="outlined"
          name={FIELD_NAMES.WEST_BOUNDARY}
          value={formData[FIELD_NAMES.WEST_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="NE"
          variant="outlined"
          name={FIELD_NAMES.NE_BOUNDARY}
          value={formData[FIELD_NAMES.NE_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="SW"
          variant="outlined"
          name={FIELD_NAMES.SW_BOUNDARY}
          value={formData[FIELD_NAMES.SW_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="SE"
          variant="outlined"
          name={FIELD_NAMES.SE_BOUNDARY}
          value={formData[FIELD_NAMES.SE_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="NW"
          variant="outlined"
          name={FIELD_NAMES.NW_BOUNDARY}
          value={formData[FIELD_NAMES.NW_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
