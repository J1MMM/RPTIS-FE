import { Button, InputAdornment, Stack } from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { FIELD_NAMES } from "../../constants/fieldNames";
import NumberInput from "../../../../components/inputs/NumberInput";
import NumericFormatTextField from "../../../../components/inputs/NumericFormatTextField";
import BaseSelect from "../../../../components/inputs/BaseSelect";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";
import {
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import { SYMBOLS } from "../../../../constant/symbols";

export const AddLandAppraisalModal = (props) => {
  const {
    landAppraisal,
    handleFieldsChange,
    handleAppraisalSubmit,
    open,
    onClose,
  } = props;

  return (
    <ContainerModal
      maxWidth="sm"
      title="Land Appraisal"
      open={open}
      onClose={onClose}
      onSubmit={handleAppraisalSubmit}
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
          <BaseSelect
            label="Classification"
            name={FIELD_NAMES.LAND_CLASSIFICATION}
            value={landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION] || ""}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly || props?.pendingPage}
            options={CLASSIFICATION_OPTIONS}
          />

          <BaseSelect
            label="Sub-Class"
            name={FIELD_NAMES.LAND_SUB_CLASS}
            value={landAppraisal[FIELD_NAMES.LAND_SUB_CLASS] || ""}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly || props?.pendingPage}
            disabled={!landAppraisal[FIELD_NAMES.LAND_CLASSIFICATION]}
            options={
              SUBCLASS_OPTIONS[landAppraisal?.[FIELD_NAMES.LAND_CLASSIFICATION]]
            }
          />

          <NumberInput
            label="Area"
            name={FIELD_NAMES.LAND_AREA}
            value={landAppraisal?.[FIELD_NAMES.LAND_AREA]}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly}
            adornment={{
              endAdornment: (
                <InputAdornment position="start">
                  {SYMBOLS.SQUARE_METER}
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericFormatTextField
            label="Unit Value"
            name={FIELD_NAMES.LAND_UNIT_VALUE}
            value={landAppraisal?.[FIELD_NAMES.LAND_UNIT_VALUE]}
            adornment={{
              startAdornment: (
                <InputAdornment position="start">&#8369;</InputAdornment>
              ),
            }}
          />
          <NumericFormatTextField
            label="Base Market Value"
            name={FIELD_NAMES.LAND_BASE_MARKET_VALUE}
            value={landAppraisal?.[FIELD_NAMES.LAND_BASE_MARKET_VALUE]}
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
