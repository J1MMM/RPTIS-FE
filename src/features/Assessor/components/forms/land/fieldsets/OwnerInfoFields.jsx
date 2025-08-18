import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import SelectField from "../../../../../../components/ui/SelectField";

function OwnerInfoFields({ control }) {
  return (
    <StyledFieldset title="Owner's Information">
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="Full Name"
          name={FIELDS.OWNER_FULLNAME}
          multiline={true}
        />
        <TextInput control={control} label="TIN No." name={FIELDS.OWNER_TIN} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="House No. & Street"
          name={FIELDS.OWNER_STREET}
        />
        <SelectField
          control={control}
          label="Barangay/District"
          name={FIELDS.OWNER_BARANGAY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={control}
          label="City/Municipality"
          name={FIELDS.OWNER_CITY}
        />
        <TextInput
          control={control}
          label="Province"
          name={FIELDS.OWNER_PROVINCE}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default OwnerInfoFields;
