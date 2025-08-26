import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";
import { useFormContext } from "react-hook-form";
import { BRGY_ARP_CODE } from "../../../../../../constants/barangayCode";

function PropertyInfoFields({ control }) {
  const { setValue } = useFormContext()
  return (
    <StyledFieldset title="Property Information">
      <Stack direction="row" gap={1}>
        <TextInput control={control} label="ARP No." name={FIELDS.ARP_NO} />
        <TextInput control={control} label="PIN" name={FIELDS.PIN} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="House No. & Street"
          name={FIELDS.NO_AND_STREET}
        />

        <SelectField
          control={control}
          label="Barangay/District"
          name={FIELDS.BARANGAY}
          options={BRGY_OPTIONS}
          onChange={(e) => {
            setValue(FIELDS.ARP_NO, `${BRGY_ARP_CODE[e.target.value]}-`);
          }}
        />

        <TextInput
          control={control}
          label="City/Municipality"
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
          control={control}
          label="OCT/TCT/No."
          name={FIELDS.OCT_TCT_NO}
        />
        <DateInput control={control} label="Date" name={FIELDS.DATE} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput control={control} label="Lot No" name={FIELDS.LOT_NO} />
        <TextInput control={control} label="Block No." name={FIELDS.BLOCK_NO} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
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
