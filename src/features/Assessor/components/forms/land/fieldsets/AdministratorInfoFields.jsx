import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import SelectField from "../../../../../../components/ui/SelectField";

function AdministratorInfoFields({ control }) {
  return (
    <StyledFieldset title="Administrator Information">
      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="Full Name"
          name={FIELDS.ADMINISTRATOR_FULLNAME}
          multiline={true}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          control={control}
          label="House No. & Street"
          name={FIELDS.ADMINISTRATOR_STREET}
        />

        <SelectField
          control={control}
          label="Barangay/District"
          name={FIELDS.ADMINISTRATOR_BRGY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={control}
          label="City/Municipality"
          name={FIELDS.ADMINISTRATOR_CITY}
        />

        <TextInput
          control={control}
          label="Province"
          name={FIELDS.ADMINISTRATOR_PROVINCE}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput control={control} label="Tel. No." name={FIELDS.ADMIN_TEL} />

        <TextInput
          control={control}
          label="TIN No."
          name={FIELDS.ADMINISTRATOR_TIN}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default AdministratorInfoFields;
