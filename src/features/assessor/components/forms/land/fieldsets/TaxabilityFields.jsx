import { Stack } from "@mui/material";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { RadioInput, DateInput, SelectField, StyledFieldset } from "@components/ui";
import { QUATER_OPTIONS, TAXABLE_OPTIONS } from "../../../../constants/shared/dropdown";

function TaxabilityFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Stack direction="row" gap={1}>
        <RadioInput
          readOnly={readOnly}
          control={control}
          name={FIELDS.TAXABILITY}
          rules={{ required: "Taxability is required" }}
          options={TAXABLE_OPTIONS}
        />

        <SelectField
          readOnly={readOnly}
          control={control}
          label="Quarter"
          name={FIELDS.EFFECTIVITY_QTR}
          options={QUATER_OPTIONS}
        />

        <DateInput
          readOnly={readOnly}
          control={control}
          label="Year"
          name={FIELDS.EFFECTIVITY_YEAR}
          yearOnly
        />

      </Stack>
    </StyledFieldset>
  );
};

export default TaxabilityFields