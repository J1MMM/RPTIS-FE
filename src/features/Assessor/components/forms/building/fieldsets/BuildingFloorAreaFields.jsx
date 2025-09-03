import { Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
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
import DividerHeading from "../../../../../../components/ui/DividerHeading";
import Row from "../../../../../../components/ui/Row";

function BuildingFloorAreaFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  return (
    <StyledFieldset title="Floor Area">

      <Stack direction="row" gap={1}>
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Number of Storeys"
          name={FIELDS.NO_OF_STOREYS}
        />
        <NumberInput
          readOnly={true}
          control={control}
          label="Total Floor Area"
          name={"totalFloorArea"}
        />
      </Stack>

      <Stack gap={1}>
        <DividerHeading mt={2}>Floor Area</DividerHeading>
        <Row sx={{ alignItems: 'center' }}>
          <Typography whiteSpace="nowrap">Area of 1st Floor: </Typography>
          <NumberInput
            readOnly={readOnly}
            control={control}
            name={"are1"}
          />
        </Row>
        <Row sx={{ alignItems: 'center' }}>
          <Typography whiteSpace="nowrap">Area of 1st Floor: </Typography>
          <NumberInput
            readOnly={readOnly}
            control={control}
            name={"are1"}
          />
        </Row>
      </Stack>

    </StyledFieldset>
  );
}

export default BuildingFloorAreaFields;
