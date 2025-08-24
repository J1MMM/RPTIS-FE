import { Stack } from "@mui/material";
import { FIELDS } from "../../../../constants/fieldNames";
import { RadioInput, DateInput, SelectField, StyledFieldset } from "@components/ui";
import { QUATER_OPTIONS, TAXABLE_OPTIONS } from "../../../../constants/dropdownOptions";

function TaxabilityFields({ control }) {
  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Stack direction="row" gap={1}>
        <RadioInput
          control={control}
          name={FIELDS.TAXABILITY}
          rules={{ required: "Taxability is required" }}
          options={TAXABLE_OPTIONS}
        />

        <SelectField
          control={control}
          label="Quarter"
          name={FIELDS.EFFECTIVITY_QTR}
          options={QUATER_OPTIONS}
        />

        <DateInput popperClass="yearOnly" control={control} label="Year" name={FIELDS.EFFECTIVITY_YEAR} yearOnly={true} />

      </Stack>
    </StyledFieldset>
  );
};

export default TaxabilityFields