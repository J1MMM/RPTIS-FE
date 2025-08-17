import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import useAssessorForm from "../../../../hooks/useFormContext";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import SelectField from "../../../../../../components/ui/SelectField";

export const OwnerInfoFields = () => {
  const { landFaasControl } = useAssessorForm();
  return (
    <StyledFieldset title="Owner's Information">
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="Full Name"
          name={FIELDS.OWNER_FULLNAME}
          multiline={true}
        />
        <TextInput
          control={landFaasControl}
          label="TIN No."
          name={FIELDS.OWNER_TIN}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="House No. & Street"
          name={FIELDS.OWNER_STREET}
        />
        <SelectField
          control={landFaasControl}
          label="Barangay/District"
          name={FIELDS.OWNER_BARANGAY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={landFaasControl}
          label="City/Municipality"
          name={FIELDS.OWNER_CITY}
        />
        <TextInput
          control={landFaasControl}
          label="Province"
          name={FIELDS.OWNER_PROVINCE}
        />
      </Stack>
    </StyledFieldset>
  );
};
