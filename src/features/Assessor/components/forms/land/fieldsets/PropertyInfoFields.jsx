import { Stack } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";
import useAssessorForm from "../../../../hooks/useFormContext";

function PropertyInfoFields() {
  const { landFaasControl } = useAssessorForm();

  return (
    <StyledFieldset title="Property Information">
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="ARP No."
          name={FIELDS.ARP_NO}
        />
        <TextInput control={landFaasControl} label="PIN" name={FIELDS.PIN} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="House No. & Street"
          name={FIELDS.NO_AND_STREET}
        />

        <SelectField
          control={landFaasControl}
          label="Barangay/District"
          name={FIELDS.BARANGAY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={landFaasControl}
          label="City/Municipality"
          name={FIELDS.CITY}
          readOnly={true}
        />
        <TextInput
          control={landFaasControl}
          label="Province"
          name={FIELDS.PROVINCE}
          readOnly={true}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="OCT/TCT/No."
          name={FIELDS.OCT_TCT_NO}
        />
        <DateInput control={landFaasControl} label="Date" name={FIELDS.DATE} />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          label="Lot No"
          name={FIELDS.LOT_NO}
        />
        <TextInput
          control={landFaasControl}
          label="Block No."
          name={FIELDS.BLOCK_NO}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextInput
          control={landFaasControl}
          multiline={true}
          label="Survey No."
          name="Survey"
        />
      </Stack>
    </StyledFieldset>
  );
};

export default PropertyInfoFields