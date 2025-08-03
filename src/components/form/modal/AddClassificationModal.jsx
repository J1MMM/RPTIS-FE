import React, { useEffect } from "react";
import { ContainerModal } from "../../shared/ContainerModal";
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
import { NumericFormat } from "react-number-format";
import {
  CLASSIFICATION_DD,
  SUBCLASS_DD,
  UNIT_VALUE_TABLE,
} from "../../../pages/Assessor/assessorConstant";

export const AddClassificationModal = ({
  props,
  open,
  onClose,
  handleAddClassification,
  handleClassificationChange,
  classificationData: data,
}) => {
  const unitValue =
    UNIT_VALUE_TABLE[data?.classification.toLowerCase()]?.[
      data?.subClass.toLowerCase()
    ] || 0;
  const baseMarketValue = parseFloat((data?.area * unitValue).toFixed(2));

  return (
    <ContainerModal
      maxWidth="sm"
      title="Land Appraisal"
      open={open}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleAddClassification();
      }}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </>
      }
    >
      <Stack>
        <Stack direction="row" gap={1}>
          <FormControl fullWidth margin="dense">
            <InputLabel>Classification</InputLabel>
            <Select
              required
              label="Classification"
              value={data.classification || ""}
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

          <FormControl fullWidth margin="dense" disabled={!data.classification}>
            <InputLabel>Sub-Class</InputLabel>
            <Select
              required
              label="Sub-Class"
              value={data.subClass || ""}
              name="subClass"
              onChange={handleClassificationChange}
              readOnly={props?.readOnly || props?.pendingPage}
            >
              {SUBCLASS_DD[data?.classification]?.map((val, index) => (
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
            name="area"
            value={data?.area}
            onChange={handleClassificationChange}
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
            name="unitValue"
            value={data?.unitValue}
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
            value={data?.baseMarketValue}
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

          {/* <NumericFormat
            customInput={TextField}
            margin="dense"
            fullWidth
            label="Assessed Value"
            variant="outlined"
            name="assessedValue"
            value={data?.assessedValue}
            onValueChange={(values) => {
              const { value } = values; // value will be the unformatted number (e.g., 1234567)
              handleClassificationChange({
                target: {
                  name: "assessedValue",
                  value: value,
                },
              });
            }}
            thousandSeparator=","
            allowNegative={false} // Optional, to prevent negative numbers
          /> */}
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
