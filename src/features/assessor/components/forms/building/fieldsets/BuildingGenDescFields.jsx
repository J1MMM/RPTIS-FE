import { v4 } from "uuid";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { toOrdinal } from "@utils/formatters";
import { FIELDS } from "../../../../constants/fieldNames";
import { TextInput, Row, DateInput, SelectField, StyledFieldset } from "@components/ui/";
import { BUILDING_TYPE_OPTIONS, CLASSIFICATION_OPTIONS, STRUC_CLASS_OPTIONS } from "../../../../constants/dropdownOptions";

function BuildingGenDescFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()
  const numberOfStoreys = useWatch({ control, name: FIELDS.NO_OF_STOREYS })
  const floorAreas = useWatch({ control, name: "floorAreas" })

  console.log("fields", floorAreas);

  useEffect(() => {
    let numStoreys = parseInt(numberOfStoreys, 10);
    if (isNaN(numStoreys) || numStoreys < 1) numStoreys = 0;
    if (numStoreys > 20) numStoreys = 20;

    const floorAreasArr = [...Array(numStoreys)].map((_, index) => ({
      id: v4(),
      label: `${toOrdinal(index + 1)} floor`,
      area: "",
      flooring: [],
      walls: []
    }));

    setValue("floorAreas", floorAreasArr);
  }, [numberOfStoreys]);

  useEffect(() => {
    const totalArea = Array.isArray(floorAreas)
      ? floorAreas.reduce((acc, curr) => {
        const area = parseFloat(curr.area);
        return acc + (isNaN(area) ? 0 : area);
      }, 0)
      : 0;

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
          name={FIELDS.STRUCTURAL_CLASS}
          label="Structural Classification"
          options={STRUC_CLASS_OPTIONS}
        />
        <SelectField
          control={control}
          name={FIELDS.BUILDING_TYPE}
          label="Building/Occupancy Type"
          options={BUILDING_TYPE_OPTIONS}
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

    </StyledFieldset >
  );
}

export default BuildingGenDescFields;
