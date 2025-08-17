import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { NumericFormat } from "react-number-format";
import StyledFieldset from "@components/ui/StyledFieldset";
import { CLASSIFICATION_OPTIONS } from "../../../../constants/dropdownOptions";

import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../components/inputs/TextInput";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { formatPercent } from "../../../../../../utils/formatters";
import SelectFieldOld from "../../../../../../components/ui/SelectFieldOld";

export const LandPropertyAssessmentFields = (props) => {
  const { formData, handleFormChange } = props;

  return (
    <StyledFieldset title="Property Assessment">
      <Stack>
        <Stack direction="row" gap={1}>
          <SelectFieldOld
            label="Actual Use"
            onChange={handleFormChange}
            name={FIELDS.PROPERTY_ASSESSMENT_ACTUAL_USE}
            readOnly={props?.readOnly || props?.pendingPage}
            value={formData[FIELDS.PROPERTY_ASSESSMENT_ACTUAL_USE] || ""}
            options={CLASSIFICATION_OPTIONS}
          />

          <TextInput
            label="Assessment Level"
            name={FIELDS.PROPERTY_ASSESSMENT_LEVEL}
            value={formatPercent(formData[FIELDS.PROPERTY_ASSESSMENT_LEVEL])}
            readOnly
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericFormat
            customInput={TextField}
            margin="dense"
            fullWidth
            label="Market Value"
            variant="outlined"
            name="baseMarketValue"
            value={formData?.[FIELDS.TOTAL_MARKET_VALUE]}
            thousandSeparator=","
            allowNegative={false}
            slotProps={{
              input: {
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">&#8369;</InputAdornment>
                ),
              },
            }}
          />
          <NumericFormat
            customInput={TextField}
            margin="dense"
            fullWidth
            label="Assessed Value"
            variant="outlined"
            name="assessedValue"
            value={formData[FIELDS.PROPERTY_ASSESSED_VALUE]}
            thousandSeparator=","
            allowNegative={false}
            slotProps={{
              input: {
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">&#8369;</InputAdornment>
                ),
              },
            }}
          />
        </Stack>
      </Stack>
    </StyledFieldset>
  );
};
