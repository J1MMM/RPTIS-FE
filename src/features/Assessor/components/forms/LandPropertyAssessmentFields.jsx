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
import StyledFieldset from "../modals/StyledFieldset";
import { CLASSIFICATION_DD } from "../../constants/dropdownOptions";

export const LandPropertyAssessmentFields = ({ props, handleFormChange }) => {
  return (
    <StyledFieldset title="Property Assessment">
      <Stack>
        <Stack direction="row" gap={1}>
          <FormControl fullWidth margin="dense" required>
            <InputLabel>Actual Use</InputLabel>
            <Select
              required
              label="Actual Use"
              value={props?.row?.actualUse || ""}
              name="actualUse"
              onChange={handleFormChange}
              readOnly={props?.readOnly || props?.pendingPage}
            >
              {CLASSIFICATION_DD.map((val, index) => (
                <MenuItem key={index} value={val.value}>
                  {val.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            required
            type="number"
            margin="dense"
            fullWidth
            label="Assessment Level"
            variant="outlined"
            name="assessmentLevel"
            value={props?.row?.assessmentLevel}
            onChange={handleFormChange}
            slotProps={{
              input: {
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                inputProps: {
                  min: 0,
                },
              },
            }}
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
            value={props?.row?.baseMarketValue}
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
            value={props?.row?.assessedValue}
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
