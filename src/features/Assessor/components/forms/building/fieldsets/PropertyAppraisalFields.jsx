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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function PropertyAppraisalFields({ control, readOnly }) {
  const { setValue, getValues } = useFormContext()



  return (
    <StyledFieldset title="Property Appraisals">
      <Row>
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Unit Construction Cost"
          name={"unit_construction_cost"}
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
          name={"unit_construction_cost_sub_total"}
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
          name={"depreciation_rate"}
          maxLength={3}
          adornment={ADORNMENTS.PERCENT}
        />
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Depreciation Cost"
          name={"depreciation_cost"}
          adornment={ADORNMENTS.PESO}
        />
      </Row>

      <Divider sx={{ my: 1, borderColor: "primary.main" }} />

      <Row>
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Unit Construction Cost"
          name={"unit_construction_cost"}
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
          name={"unit_construction_cost_sub_total"}
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
          name={"depreciation_rate"}
          maxLength={3}
          adornment={ADORNMENTS.PERCENT}
        />
        <NumberInput
          readOnly={readOnly}
          control={control}
          label="Depreciation Cost"
          name={"depreciation_cost"}
          adornment={ADORNMENTS.PESO}
        />
      </Row>



    </StyledFieldset >
  );
}

export default PropertyAppraisalFields;
