import { Box, Button, Checkbox, Divider, FormControl, Grid2, IconButton, InputAdornment, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import SelectField from "../../../../../../components/ui/SelectField";
import { BRGY_OPTIONS, FLOORING_MATERIALS, ROOF_MATERIALS, WALLS_MATERIALS } from "../../../../../../constants/dropdown";
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
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { use } from "react";
import { formatPeso } from "../../../../../../utils/formatters";
import { grey } from "@mui/material/colors";
import SelectFieldMulti from "../../../../../../components/ui/SelectFieldMulti";

function StructuralMaterialFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()

  const numberOfStoreys = useWatch({
    control,
    name: FIELDS.NO_OF_STOREYS
  })

  const floors = useWatch({
    control,
    name: "floors"
  })

  console.log("fields", floors);

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

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
          control={control}
          label="Roof"
          name={`roofMaterials`}
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
                size="small"
                control={control}
                label="Flooring"
                name={`floors.${index}.flooring`}
                options={FLOORING_MATERIALS}
              />

              <SelectFieldMulti
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
