import { Box, Button, Divider, Grid2, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS } from "../../../../../../constants/dropdown";
import DateInput from "../../../../../../components/ui/DateInput";
import { Controller, useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { BRGY_CODE, BRGY_DISTRICTS } from "../../../../../../constants/barangayCode";
import { Grid, UserSearch } from "lucide-react";
import { BUILDING_TYPE_OPTIONS, CLASSIFICATION_OPTIONS, STRUC_CLASS_OPTIONS } from "../../../../constants/dropdownOptions";
import NumberInput from "@components/ui/NumberInput";
import DividerHeading from "@components/ui/DividerHeading";
import { ADORNMENTS } from "@constants/adornments";
import { toOrdinal } from "@utils/formatters";
import Row from "../../../../../../components/ui/Row";
import { useEffect } from "react";
import { v4 } from "uuid";
import { use } from "react";
import { formatPeso } from "../../../../../../utils/formatters";

function BuildingGenDescFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  const numberOfStoreys = useWatch({
    control,
    name: FIELDS.NO_OF_STOREYS
  })

  const floorAreas = useWatch({
    control,
    name: "floorAreas"
  })

  console.log("fields", floorAreas);

  useEffect(() => {
    const floorAreasArr = [...Array(Number(numberOfStoreys))].map((_, index) => ({
      id: v4(),
      label: `Area of ${toOrdinal(index + 1)} floor`,
      area: ""
    }))

    setValue("floorAreas", floorAreasArr)
  }, [numberOfStoreys])

  useEffect(() => {
    const totalArea = floorAreas.reduce((acc, curr) => {
      const area = parseFloat(curr.area);
      return acc + (isNaN(area) ? 0 : area);
    }, 0);

    setValue("totalFloorArea", totalArea || "")
  }, [floorAreas])

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
        <Stack direction="row" gap={1} width={"100%"}>
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

        <TextInput
          readOnly={readOnly}
          control={control}
          label="Condominium Certificate of Title (CCT)"
          name={FIELDS.CCT}
        />
      </Stack>

      <Stack direction="row" gap={1}>
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Certificate of Completion Issue On"
          name={FIELDS.CO_COMPLITION}
        />
        <TextInput
          readOnly={readOnly}
          control={control}
          label="Certificate of Occupancy Issue On"
          name={FIELDS.CO_OCCUPANCY}
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
      <DividerHeading mt={1}>Floor Area</DividerHeading>

      <Row>
        <NumberInput
          name={FIELDS.NO_OF_STOREYS}
          readOnly={readOnly}
          control={control}
          label="Number of Storeys"
          maxLength={2}
          onChange={() => {
            const numStoreys = getValues(FIELDS.NO_OF_STOREYS);
            if (numStoreys > 20) {
              setValue(FIELDS.NO_OF_STOREYS, 20);
            }
          }}
        />
        <TextInput
          readOnly={true}
          control={control}
          label="Total Floor Area"
          name={"totalFloorArea"}
          isNumeric
          adornment={ADORNMENTS.SQM}
        />
      </Row>

      <Divider sx={{ my: 1, borderColor: "primary.main" }} />
      <Box display="grid" gridTemplateColumns={"repeat(2, 1fr)"} gap={1}>
        {
          floorAreas.map((floor, index) => (
            <Row sx={{ alignItems: "center" }} key={floor?.id}>
              <Typography variant="body2" whiteSpace={"nowrap"}>{floor?.label}:</Typography>
              <NumberInput
                readOnly={readOnly}
                size="small"
                maxLength={10}
                control={control}
                name={`floorAreas.${index}.area`}
                adornment={ADORNMENTS.SQM}
              />

            </Row>
          ))
        }
      </Box>
    </StyledFieldset>
  );
}

export default BuildingGenDescFields;
