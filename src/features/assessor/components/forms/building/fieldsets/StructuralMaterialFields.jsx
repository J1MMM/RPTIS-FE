import { Box, Divider, Typography } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import TextInput from "@components/ui/TextInput";
import { FLOORING_MATERIALS, ROOF_MATERIALS, WALLS_MATERIALS } from "@constants/dropdown";
import { useFormContext, useWatch } from "react-hook-form";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { toOrdinal } from "@utils/formatters";
import Row from "@components/ui/Row";
import { useEffect } from "react";
import { v4 } from "uuid";
import { grey } from "@mui/material/colors";
import SelectFieldMulti from "@components/ui/SelectFieldMulti";

function StructuralMaterialFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  const numberOfStoreys = useWatch({ control, name: FIELDS.NO_OF_STOREYS })
  const floors = useWatch({ control, name: "floors" })

  useEffect(() => {
    let numStoreys = parseInt(numberOfStoreys, 10);
    if (isNaN(numStoreys) || numStoreys < 1) numStoreys = 0;
    if (numStoreys > 20) numStoreys = 20;

    const floorAreasArr = [...Array(numStoreys)].map((_, index) => {
      const existing = floors?.[index];
      return {
        id: existing?.id || v4(),
        label: `${toOrdinal(index + 1)} floor`,
        area: existing?.area || "",
        flooring: existing?.flooring || [],
        walls: existing?.walls || [],
        roofMaterials: existing?.roofMaterials || []
      };
    });

    setValue("floors", floorAreasArr);
  }, [numberOfStoreys]);

  useEffect(() => {
    const totalArea = Array.isArray(floors)
      ? floors.reduce((acc, curr) => {
        const area = parseFloat(curr.area);
        return acc + (isNaN(area) ? 0 : area);
      }, 0)
      : 0;

    setValue(FIELDS.TOTAL_FLOOR_AREA, totalArea || "")
  }, [floors])

  return (
    <StyledFieldset title="Structural Materials">
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
        <SelectFieldMulti
          readOnly={readOnly}
          control={control}
          label="Roof"
          name={`floors.0.roofMaterials`}
          options={ROOF_MATERIALS}
        />

        <TextInput
          readOnly={true}
          control={control}
          label="Total Floor Area"
          name={FIELDS.TOTAL_FLOOR_AREA}
          isNumeric
          adornment={ADORNMENTS.SQM}
        />
      </Row>

      <Divider sx={{ my: 1, borderColor: "primary.main" }} />
      <Box display="grid" gridTemplateColumns={"repeat(1, 1fr)"} gap={1} >
        {
          floors && floors?.map((floor, index) => (
            <Box key={floor?.label} display="grid" gridTemplateColumns="auto 1fr 1fr 1fr" gap={1} borderBottom="1px solid" borderColor="primary.main" pb={1}>
              <Typography variant="body1" color={grey[900]} whiteSpace={"nowrap"} textAlign={"end"} alignSelf={"center"} width={80} >{floor?.label}:</Typography>
              <SelectFieldMulti
                readOnly={readOnly}
                size="small"
                control={control}
                label="Flooring"
                name={`floors.${index}.flooring`}
                options={FLOORING_MATERIALS}
              />

              <SelectFieldMulti
                readOnly={readOnly}
                size="small"
                control={control}
                label="Walls & Partition"
                name={`floors.${index}.walls`}
                options={WALLS_MATERIALS}
              />

              <NumberInput
                label="Area"
                readOnly={readOnly}
                size="small"
                maxLength={10}
                control={control}
                name={`floors.${index}.area`}
                adornment={ADORNMENTS.SQM}
              />
            </Box>
          ))
        }
      </Box>
    </StyledFieldset >
  );
}

export default StructuralMaterialFields;
