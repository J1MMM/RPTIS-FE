import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";
import { useFormContext } from "react-hook-form";
import { BRGY_CODE, BRGY_DISTRICTS } from "../../../../../../constants/barangayCode";
import { UserSearch } from "lucide-react";

function BuildingLandRefFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  return (
    <StyledFieldset title="Land Reference">
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="TD / ARP NO."
          name={FIELDS.TD_ARP_REF}
          adornment={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" title="Search Owner">
                  <UserSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Owner"
          name={FIELDS.LAND_OWNER_REF}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Area"
          name={FIELDS.LAND_AREA_REF}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="OCT/TCT/CLOA No."
          name={FIELDS.OCT_TCT_NO}
        />
        <TextInput readOnly={readOnly} control={control} label="Lot No." name={FIELDS.LOT_NO} />
        <TextInput readOnly={readOnly} control={control} label="Block No." name={FIELDS.BLOCK_NO} />
      </Stack>
      <Stack direction="row" gap={1}>

        <TextInput
          readOnly={readOnly}
          control={control}
          multiline={true}
          label="Survey No."
          name={FIELDS.SURVEY_NO}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default BuildingLandRefFields;
