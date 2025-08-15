import { Stack, TextField } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";

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
          name={FIELDS.NORTH_BOUNDARY}
          value={formData[FIELDS.NORTH_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="South"
          variant="outlined"
          name={FIELDS.SOUTH_BOUNDARY}
          value={formData[FIELDS.SOUTH_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="East"
          variant="outlined"
          name={FIELDS.EAST_BOUNDARY}
          value={formData[FIELDS.EAST_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="West"
          variant="outlined"
          name={FIELDS.WEST_BOUNDARY}
          value={formData[FIELDS.WEST_BOUNDARY] || ""}
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
          name={FIELDS.NE_BOUNDARY}
          value={formData[FIELDS.NE_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="SW"
          variant="outlined"
          name={FIELDS.SW_BOUNDARY}
          value={formData[FIELDS.SW_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="SE"
          variant="outlined"
          name={FIELDS.SE_BOUNDARY}
          value={formData[FIELDS.SE_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="NW"
          variant="outlined"
          name={FIELDS.NW_BOUNDARY}
          value={formData[FIELDS.NW_BOUNDARY] || ""}
          onChange={handleFormChange}
          slotProps={{ input: { readOnly: props?.readOnly } }}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
