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
import { BUILDING_TYPE_OPTIONS, CLASSIFICATION_OPTIONS, STRUC_CLASS_OPTIONS } from "../../../../constants/dropdownOptions";
import NumberInput from "../../../../../../components/ui/NumberInput";

function BuildingGenDescFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  return (
    <StyledFieldset title="General Description">
      <Stack direction="row" gap={1}>
        <SelectField
          control={control}
          name={FIELDS.KIND_OF_BUILDING}
          label="Kind of Building"
          options={CLASSIFICATION_OPTIONS}
        />

        <TextInput
          readOnly={readOnly}
          control={control}
          label="Building Age"
          name={FIELDS.BUILDING_AGE}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <SelectField
          control={control}
          name={FIELDS.BUILDING_TYPE}
          label="Building/Occupancy Type"
          options={BUILDING_TYPE_OPTIONS}
        />
        <SelectField
          control={control}
          name={FIELDS.STRUCTURAL_CLASS}
          label="Structural Classification"
          options={STRUC_CLASS_OPTIONS}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Bldg. Permit No."
          name={FIELDS.BLDG_PERMIT}
        />
        <DateInput
          readOnly={readOnly}
          control={control}
          label="Date Issued"
          name={FIELDS.BLDG_PERMIT_DATE_ISSUE}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Condominium Certificate of Title (CCT)"
          name={FIELDS.CCT}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Certificate of Completion Issue On"
          name={FIELDS.CO_COMPLITION}
        />

      </Stack>

      <Stack direction="row" gap={1}>

        <DateInput
          readOnly={readOnly}
          control={control}
          label="Date Constructed / Completed"
          name={FIELDS.DATE_CONSTRUCTED}
        />
        <DateInput
          readOnly={readOnly}
          control={control}
          label="Date Occupied"
          name={FIELDS.DATE_OCCUPIED}
        />
      </Stack>
    </StyledFieldset>
  );
}

export default BuildingGenDescFields;
