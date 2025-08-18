import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";

function LandBounderiesFields({ control }) {
  return (
    <StyledFieldset title="Boundaries">
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="North"
          name={FIELDS.NORTH_BOUNDARY}
        />
        <TextInput
          control={control}
          label="South"
          name={FIELDS.SOUTH_BOUNDARY}
        />
        <TextInput control={control} label="East" name={FIELDS.EAST_BOUNDARY} />
        <TextInput control={control} label="West" name={FIELDS.WEST_BOUNDARY} />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput control={control} label="NE" name={FIELDS.NE_BOUNDARY} />
        <TextInput control={control} label="SW" name={FIELDS.SW_BOUNDARY} />
        <TextInput control={control} label="SE" name={FIELDS.SE_BOUNDARY} />
        <TextInput control={control} label="NW" name={FIELDS.NW_BOUNDARY} />
      </Stack>
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
