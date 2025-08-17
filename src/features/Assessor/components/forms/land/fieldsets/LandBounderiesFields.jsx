import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import useAssessorForm from "../../../../hooks/useFormContext";

function LandBounderiesFields() {
  const { landFaasControl } = useAssessorForm();
  return (
    <StyledFieldset title="Boundaries">
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="North"
          name={FIELDS.NORTH_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="South"
          name={FIELDS.SOUTH_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="East"
          name={FIELDS.EAST_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="West"
          name={FIELDS.WEST_BOUNDARY}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="NE"
          name={FIELDS.NE_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="SW"
          name={FIELDS.SW_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="SE"
          name={FIELDS.SE_BOUNDARY}
        />
        <TextInput
          control={landFaasControl}
          label="NW"
          name={FIELDS.NW_BOUNDARY}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
