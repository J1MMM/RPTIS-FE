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
import { SYMBOLS } from "../../../../../../constants/symbols";
import { structuralType } from "../../../../constants/structuralType";

function PropertyAppraisalFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()
  const [strucClass, buildingType] = useWatch({ control: control, name: [FIELDS.STRUCTURAL_CLASS, FIELDS.BUILDING_TYPE] })
  console.log(strucClass);
  console.log(buildingType);


  useEffect(() => {
    if (!strucClass || !buildingType) return


    const unitConstructionCost = structuralType[buildingType][strucClass] || 0
    setValue(FIELDS.UNIT_CONSTRUCTION_COST, unitConstructionCost)

  }, [strucClass, buildingType])

  return (
    <StyledFieldset title="Property Appraisals">
      <Row>
        <NumberInput
          readOnly={true}
          control={control}
          label="Unit Construction Cost"
          name={FIELDS.UNIT_CONSTRUCTION_COST}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">Php</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">/ {SYMBOLS.SQUARE_METER}</InputAdornment>
            ),
          }}
        />

        <NumberInput
          readOnly={true}
          control={control}
          label="Sub-Total"
          name={FIELDS.UCC_SUB_TOTAL}
          adornment={{
            startAdornment: (
              <InputAdornment position="start">Php</InputAdornment>
            ),
          }}
        />

      </Row>
      <Row>
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Depreciation Rate"
          name={FIELDS.DEPRECIATION_RATE}
          maxLength={3}
          adornment={ADORNMENTS.PERCENT}
        />
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Depreciation Cost"
          name={FIELDS.DEPRECIATION_COST}
          adornment={ADORNMENTS.PESO}
        />
      </Row>

      <Divider sx={{ my: 1, borderColor: "primary.main" }} />
    </StyledFieldset >
  );
}

export default PropertyAppraisalFields;
