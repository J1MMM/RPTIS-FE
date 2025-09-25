import { Stack } from "@mui/material";
import { StyledFieldset, TextInput } from "@components/ui";
import { FIELDS } from "../../../../constants/shared/fieldNames";

function LandBounderiesFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Boundaries">
      <Stack direction="row" gap={1}>
        <TextInput readOnly={readOnly} required={false} control={control} label="North" name={FIELDS.NORTH_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="South" name={FIELDS.SOUTH_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="East" name={FIELDS.EAST_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="West" name={FIELDS.WEST_BOUNDARY} />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput readOnly={readOnly} required={false} control={control} label="NE" name={FIELDS.NE_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="SW" name={FIELDS.SW_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="SE" name={FIELDS.SE_BOUNDARY} />
        <TextInput readOnly={readOnly} required={false} control={control} label="NW" name={FIELDS.NW_BOUNDARY} />
      </Stack>
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
