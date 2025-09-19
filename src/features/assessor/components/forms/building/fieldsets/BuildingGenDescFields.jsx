import { Stack } from "@mui/material";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { TextInput, Row, DateInput, SelectField, StyledFieldset } from "@components/ui/";
import { BUILDING_TYPE_OPTIONS, STRUC_CLASS_OPTIONS } from "../../../../constants/building/dropdown";
import { CLASSIFICATION_OPTIONS } from "../../../../constants/shared/dropdown";

function BuildingGenDescFields({ control, readOnly }) {

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
          name={FIELDS.STRUCTURAL_TYPE}
          label="Structural Classification"
          options={STRUC_CLASS_OPTIONS}
        />
        <SelectField
          control={control}
          name={FIELDS.STRUCTURAL_CATEGORY}
          label="Building/Occupancy Type"
          options={BUILDING_TYPE_OPTIONS}
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
        <DateInput
          readOnly={readOnly}
          control={control}
          label="Certificate of Completion Issue On"
          name={FIELDS.CO_COMPLITION}
        />
      </Stack>

      <Row>
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
          yearOnly
        />
      </Row>

    </StyledFieldset >
  );
}

export default BuildingGenDescFields;
