import { FIELDS } from "../../../../constants/fieldNames";
import { DateInput, NumberInput, StyledFieldset } from "@components/ui";
import TextInput from "../../../../../../components/ui/TextInput";
import Row from "../../../../../../components/ui/Row";

function PreviousRecFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Record of Superseded Assessments">
      <Row>
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="Previous Owner"
          name={`previous_records.${FIELDS.OWNER_PREV}`}
        />
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="PIN No."
          name={`previous_records.${FIELDS.PIN_NO_PREV}`}
        />
      </Row>
      <Row>
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="ARP No."
          name={`previous_records.${FIELDS.ARP_NO_PREV}`}
        />
        <TextInput
          required={false}
          readOnly={readOnly}
          control={control}
          label="T.D. No."
          name={`previous_records.${FIELDS.TD_ARP_PREV}`}
        />
      </Row>
      <Row>
        <NumberInput
          required={false}
          control={control}
          label="Total Assessed Value"
          name={`previous_records.${FIELDS.ASSESSED_VALUE_PREV}`}
        />

        <DateInput
          required={false}
          yearOnly
          control={control}
          label="Effectivity"
          name={`previous_records.${FIELDS.EFFECTIVITY_YEAR_PREV}`}
        />
      </Row>
    </StyledFieldset>
  );
};

export default PreviousRecFields