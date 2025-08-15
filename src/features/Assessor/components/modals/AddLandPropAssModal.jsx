import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { FIELDS } from "../../constants/fieldNames";
import NumberInput from "../../../../components/inputs/NumberInput";
import NumericField from "../../../../components/inputs/NumericField";
import SelectField from "../../../../components/inputs/SelectField";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";
import {
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import TextInput from "../../../../components/inputs/TextInput";
import { NumericFormat } from "react-number-format";
import { formatPercent } from "../../../../utils/formatters";

export const AddLandPropAssModal = (props) => {
  const { formData, handleFormChange, handlePropAssSubmit, open, onClose } =
    props;

  return (
    <ContainerModal
      maxWidth="sm"
      title="Property Assessment"
      open={open}
      onClose={onClose}
      onSubmit={handlePropAssSubmit}
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
          <SelectField
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
    </ContainerModal>
  );
};
