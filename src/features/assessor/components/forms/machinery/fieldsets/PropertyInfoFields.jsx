import { Stack } from "@mui/material";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import { StyledFieldset, DateInput, SelectField, TextInput } from "@components/ui";
import Row from "../../../../../../components/ui/Row";

function PropertyInfoFields({ control, readOnly }) {
  return (
    <StyledFieldset title="Property Information">
      <Row>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="ARP NO."
          name={FIELDS.ARP_NO}
        />

        <TextInput
          readOnly={readOnly}
          control={control}
          label="PIN NO."
          name={FIELDS.PIN}
        />
      </Row>
      <Row>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Bldg. Owner (where mach. is located)"
          name={FIELDS.M_BLDG_REF_OWNER}
        />

        <TextInput
          readOnly={readOnly}
          control={control}
          label="Bldg. PIN"
          name={FIELDS.M_BLDG_REF_PIN}
        />
      </Row>
      <Row>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Land Owner (where mach. is located)"
          name={FIELDS.M_LAND_REF_OWNER}
        />

        <TextInput
          readOnly={readOnly}
          control={control}
          label="Land PIN"
          name={FIELDS.M_LAND_REF_PIN}
        />
      </Row>
      <Row>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="No. / Street"
          name={FIELDS.NO_AND_STREET}
        />

        <SelectField
          readOnly={readOnly}
          control={control}
          label="Barangay"
          name={FIELDS.BARANGAY}
          options={BRGY_OPTIONS}
        />

        <TextInput
          control={control}
          label="City"
          name={FIELDS.CITY}
          readOnly={true}
        />
        <TextInput
          control={control}
          label="Province"
          name={FIELDS.PROVINCE}
          readOnly={true}

        />
      </Row>
    </StyledFieldset>
  );
}

export default PropertyInfoFields;
