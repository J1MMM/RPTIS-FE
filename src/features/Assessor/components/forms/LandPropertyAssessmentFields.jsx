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
import StyledFieldset from "../ui/StyledFieldset";
import { CLASSIFICATION_OPTIONS } from "../../constants/dropdownOptions";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import { FIELD_NAMES } from "../../constants/fieldNames";
import BaseTextField from "../../../../components/inputs/BaseTextField";
import { ACTUAL_USE_EQUIVALENTS } from "../../constants/defaultValues";
import { formatPercent } from "../../../../utils/formatters";

export const LandPropertyAssessmentFields = (props) => {
  const { formData, handleFormChange } = props;

  return (
    <StyledFieldset title="Property Assessment">
      <Stack>
        <Stack direction="row" gap={1}>
          <BaseSelect
            label="Actual Use"
            onChange={handleFormChange}
            name={FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE}
            readOnly={props?.readOnly || props?.pendingPage}
            value={formData[FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE] || ""}
            options={CLASSIFICATION_OPTIONS}
          />

          <BaseTextField
            label="Assessment Level"
            name={FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL}
            value={formatPercent(
              formData[FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL]
            )}
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
            value={formData?.[FIELD_NAMES.TOTAL_MARKET_VALUE]}
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
            value={formData[FIELD_NAMES.PROPERTY_ASSESSED_VALUE]}
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
