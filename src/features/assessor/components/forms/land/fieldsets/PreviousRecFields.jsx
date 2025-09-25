import { FIELDS } from "../../../../constants/shared/fieldNames";
import { Row, TextInput, DateInput, NumberInput, StyledFieldset } from "@components/ui";

function PreviousRecFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Record of Superseded Assessments">
      <Row>
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="Previous Owner"
          name={FIELDS.LAND_OWNER_PREV}
        />
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="PIN No."
          name={FIELDS.LAND_PIN_NO_PREV}
        />
      </Row>
      <Row>
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="ARP No."
          name={FIELDS.LAND_ARP_NO_PREV}
        />
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="T.D. No."
          name={FIELDS.LAND_ARP_NO_PREV}
        />
      </Row>
      <Row>
        <NumberInput
          readOnly={readOnly}
          required={false}
          control={control}
          label="Total Assessed Value"
          name={FIELDS.LAND_ASSESSED_VALUE_PREV}
        />

        <DateInput
          readOnly={readOnly}
          required={false}
          yearOnly
          control={control}
          label="Effectivity"
          name={FIELDS.LAND_EFFECTIVITY_YEAR_PREV}
        />
      </Row>
    </StyledFieldset>
  );
};

export default PreviousRecFields