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
import {
  CLASSIFICATION_DD,
  SUBCLASS_DD,
} from "../../constants/dropdownOptions";
import { useState } from "react";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { LAND_APPRAISAL_DEFAULT_DATA } from "../../constants/defaultValues";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";

export const LandAppraisalFields = (props) => {
  const { formData, setFormData, handleFormChange } = props;
  const [landAppraisal, setLandAppraisal] = useState(
    LAND_APPRAISAL_DEFAULT_DATA
  );

  const handleLandAppraisalChange = (e) => {
    const { name, value } = e.target;

    setLandAppraisal((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // Reset subclass if classification changes
      if (name === FIELD_NAMES.LAND_CLASSIFICATION) {
        updated[FIELD_NAMES.LAND_SUB_CLASS] = "";
      }

      const classification =
        updated[FIELD_NAMES.LAND_CLASSIFICATION]?.toLowerCase();
      const subClass = updated[FIELD_NAMES.LAND_SUB_CLASS]?.toLowerCase();
      const area = parseFloat(updated[FIELD_NAMES.LAND_AREA]) || 0;
      const actualUse =
        updated[FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE]?.toLowerCase();

      updated[FIELD_NAMES.LAND_UNIT_VALUE] =
        UNIT_VALUE_TABLE[classification]?.[subClass] || 0;
      updated[FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL] =
        ACTUALUSE_EQUI_LEVEL[actualUse] || 0;

      updated[FIELD_NAMES.LAND_BASE_MARKET_VALUE] = parseFloat(
        (area * updated[FIELD_NAMES.LAND_UNIT_VALUE]).toFixed(2)
      );

      return updated;
    });
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack>
          <Stack direction="row" gap={1}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Classification</InputLabel>
              <Select
                required
                label="Classification"
                value={landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION] || ""}
                name={FIELD_NAMES.LAND_CLASSIFICATION}
                onChange={handleLandAppraisalChange}
                readOnly={props?.readOnly || props?.pendingPage}
              >
                {CLASSIFICATION_DD.map((val, index) => (
                  <MenuItem key={index} value={val.value}>
                    {val.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              margin="dense"
              disabled={!landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION]}
            >
              <InputLabel>Sub-Class</InputLabel>
              <Select
                required
                label="Sub-Class"
                value={landAppraisal[FIELD_NAMES.LAND_SUB_CLASS] || ""}
                name={FIELD_NAMES.LAND_SUB_CLASS}
                onChange={handleLandAppraisalChange}
                readOnly={props?.readOnly || props?.pendingPage}
              >
                {SUBCLASS_DD[
                  landAppraisal?.[FIELD_NAMES.LAND_CLASSIFICATION]
                ]?.map((val, index) => (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              type="number"
              margin="dense"
              fullWidth
              label="Area"
              variant="outlined"
              name={FIELD_NAMES.LAND_AREA}
              value={landAppraisal?.[FIELD_NAMES.LAND_AREA]}
              onChange={handleLandAppraisalChange}
              onWheel={(e) => {
                e.target.blur();
              }}
              sx={{
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                "& input[type=number]": {
                  MozAppearance: "textfield", // For Firefox
                },
              }}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                  endAdornment: (
                    <InputAdornment position="end">m²</InputAdornment>
                  ),
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
              label="Unit Value"
              variant="outlined"
              name={FIELD_NAMES.LAND_UNIT_VALUE}
              value={landAppraisal?.[FIELD_NAMES.LAND_UNIT_VALUE]}
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
              label="Base Market Value"
              variant="outlined"
              name={FIELD_NAMES.LAND_BASE_MARKET_VALUE}
              value={landAppraisal?.[FIELD_NAMES.LAND_BASE_MARKET_VALUE]}
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
    </>
  );
};
