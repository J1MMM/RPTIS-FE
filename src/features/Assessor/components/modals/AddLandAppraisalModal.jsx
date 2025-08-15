import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { Button, Stack } from "@mui/material";
import {
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import NumberInput from "../../../../components/ui/NumberInput";
import SelectField from "../../../../components/ui/SelectField";
import NumericField from "../../../../components/ui/NumericField";
import { FIELDS } from "../../constants/fieldNames";
import { toFixedTwo } from "../../../../utils/formatters";
import { ADORNMENTS } from "../../../../constants/adornments";

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
          <SelectField
            label="Classification"
            name={FIELDS.LAND_CLASSIFICATION}
            value={landAppraisal[FIELDS.LAND_CLASSIFICATION] || ""}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly || props?.pendingPage}
            options={CLASSIFICATION_OPTIONS}
          />

          <SelectField
            label="Sub-Class"
            name={FIELDS.LAND_SUB_CLASS}
            value={landAppraisal[FIELDS.LAND_SUB_CLASS] || ""}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly || props?.pendingPage}
            disabled={!landAppraisal[FIELDS.LAND_CLASSIFICATION]}
            options={
              SUBCLASS_OPTIONS[landAppraisal?.[FIELDS.LAND_CLASSIFICATION]]
            }
          />

          <NumberInput
            label="Area"
            name={FIELDS.LAND_AREA}
            value={landAppraisal?.[FIELDS.LAND_AREA]}
            onChange={handleFieldsChange}
            readOnly={props?.readOnly}
            adornment={ADORNMENTS.SQM}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericField
            label="Unit Value"
            name={FIELDS.LAND_UNIT_VALUE}
            value={landAppraisal?.[FIELDS.LAND_UNIT_VALUE]}
            adornment={ADORNMENTS.PESO}
          />
          <NumericField
            label="Base Market Value"
            name={FIELDS.LAND_BASE_MARKET_VALUE}
            value={toFixedTwo(landAppraisal?.[FIELDS.LAND_BASE_MARKET_VALUE])}
            adornment={ADORNMENTS.PESO}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
