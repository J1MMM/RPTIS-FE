import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";


function PropertyInfoFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Property Information">
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="ARP NO."
          name={FIELDS.ARP_NO}
        />

        <TextInput
          readOnly={readOnly}
          control={control}
          label="PIN NO."
          name={FIELDS.PIN}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="No. / Street"
          name={FIELDS.NO_AND_STREET}
        />

        <SelectField
          readOnly={readOnly}
          control={control}
          label="Barangay"
          name={FIELDS.BARANGAY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={control}
          label="City"
          name={FIELDS.CITY}
          readOnly={true}
        />
        <TextInput
          control={control}
          label="Province"
          name={FIELDS.PROVINCE}
          readOnly={true}

        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="OCT/TCT/No."
          name={FIELDS.OCT_TCT_NO}
        />
        <DateInput readOnly={readOnly} control={control} label="Date" name={FIELDS.DATE} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput readOnly={readOnly} control={control} label="Lot No" name={FIELDS.LOT_NO} />
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

export default PropertyInfoFields;
