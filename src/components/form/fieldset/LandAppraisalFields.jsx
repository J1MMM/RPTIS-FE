import React from "react";
import Fieldset from "../../shared/Fieldset";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ClassificationTable } from "../table/ClassificationTable";
import { AddClassificationModal } from "../modal/AddClassificationModal";
import { Add } from "@mui/icons-material";
import {
  CLASSIFICATION_DD,
  SUBCLASS_DD,
} from "../../../pages/Assessor/assessorConstant";
import { NumericFormat } from "react-number-format";
import { SYMBOLS } from "../../../constant/symbols";

export const LandAppraisalFields = ({
  props,
  handleClassificationChange,
  classificationData,
}) => {
  return (
    <>
      <Fieldset title="Land Appraisal">
        <Stack>
          <Stack direction="row" gap={1}>
            <FormControl fullWidth margin="dense">
              <InputLabel>Classification</InputLabel>
              <Select
                required
                label="Classification"
                value={classificationData.classification || ""}
                name="classification"
                onChange={handleClassificationChange}
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
              disabled={!classificationData.classification}
            >
              <InputLabel>Sub-Class</InputLabel>
              <Select
                required
                label="Sub-Class"
                value={classificationData.subClass || ""}
                name="subClass"
                onChange={handleClassificationChange}
                readOnly={props?.readOnly || props?.pendingPage}
              >
                {SUBCLASS_DD[classificationData?.classification]?.map(
                  (val, index) => (
                    <MenuItem key={index} value={val}>
                      {val}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>

            <TextField
              required
              type="number"
              margin="dense"
              fullWidth
              label="Area"
              variant="outlined"
              name="area"
              value={classificationData?.area}
              onChange={handleClassificationChange}
              slotProps={{
                input: {
                  readOnly: props?.readOnly,
                  endAdornment: (
                    <InputAdornment position="end">
                      {SYMBOLS.SQUARE_METER}
                    </InputAdornment>
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
              name="unitValue"
              value={classificationData?.unitValue}
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
              name="baseMarketValue"
              value={classificationData?.baseMarketValue}
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
      </Fieldset>
    </>
  );
};
