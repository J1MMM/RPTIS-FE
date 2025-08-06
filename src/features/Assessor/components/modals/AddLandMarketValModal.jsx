import { Button, InputAdornment, Stack } from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import { FIELD_NAMES } from "../../constants/fieldNames";
import NumberInput from "../../../../components/inputs/NumberInput";
import NumericFormatTextField from "../../../../components/inputs/NumericFormatTextField";
import {
  ADJUSTMENT_FACTOR_OPTIONS,
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import BaseTextField from "../../../../components/inputs/BaseTextField";

export const AddLandMarketValModal = (props) => {
  const { open, onClose, inputFields, handleFieldsChange, formData } = props;
  return (
    <ContainerModal
      maxWidth="sm"
      title="Market Value Adjustment"
      open={open}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
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
          <NumericFormatTextField
            label="Base Market Value"
            name={FIELD_NAMES.TOTAL_MARKET_VALUE}
            value={formData[FIELD_NAMES.TOTAL_MARKET_VALUE] || ""}
            readOnly={true}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />

          <BaseSelect
            label="Adjustment Factors"
            name={FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS}
            value={inputFields[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS] || ""}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly || props?.pendingPage}
            options={ADJUSTMENT_FACTOR_OPTIONS}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericFormatTextField
            label="Unit Value"
            name={FIELD_NAMES.LAND_UNIT_VALUE}
            value={inputFields?.[FIELD_NAMES.LAND_UNIT_VALUE]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
          <NumericFormatTextField
            label="Base Market Value"
            name={FIELD_NAMES.LAND_BASE_MARKET_VALUE}
            value={inputFields?.[FIELD_NAMES.LAND_BASE_MARKET_VALUE]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
