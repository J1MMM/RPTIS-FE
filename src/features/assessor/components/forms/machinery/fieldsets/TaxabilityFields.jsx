import { Box, Stack, Typography } from "@mui/material";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { RadioInput, DateInput, SelectField, StyledFieldset, Row, TextInput } from "@components/ui";
import { QUATER_OPTIONS, TAXABLE_OPTIONS } from "../../../../constants/shared/dropdown";

function TaxabilityFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Taxability & Effectivity">
      <Row>

        <TextInput
          readOnly={readOnly}
          control={control}
          label="Previous Owner"
          name="previous_data.owner"
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Previous Value"
          name="previous_data.value"
        />
      </Row>
      <Row>
        <RadioInput
          label="Taxability"
          readOnly={readOnly}
          control={control}
          name={FIELDS.TAXABILITY}
          rules={{ required: "Taxability is required" }}
          options={TAXABLE_OPTIONS}
        />
        <Row>
          <SelectField
            readOnly={readOnly}
            control={control}
            label="Quarter"
            name={FIELDS.LAND_EFFECTIVITY_QTR}
            options={QUATER_OPTIONS}
          />

          <DateInput
            readOnly={readOnly}
            control={control}
            label="Year"
            name={FIELDS.LAND_EFFECTIVITY_YEAR}
            yearOnly
          />
        </Row>
      </Row>
    </StyledFieldset>
  );
};

export default TaxabilityFields