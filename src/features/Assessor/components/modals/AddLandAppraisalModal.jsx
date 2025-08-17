import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { Stack } from "@mui/material";
import {
  CLASSIFICATION_OPTIONS,
  SUBCLASS_OPTIONS,
} from "../../constants/dropdownOptions";
import { FIELDS } from "../../constants/fieldNames";
import { ADORNMENTS } from "../../../../constants/adornments";
import SelectField from "../../../../components/ui/SelectField";
import SubmitButton from "../../../../components/ui/SubmitButton";
import CancelButton from "../../../../components/ui/CancelButton";
import NumberInput from "../../../../components/ui/NumberInput";
import NumericField from "../../../../components/ui/NumericField";

export const AddLandAppraisalModal = (props) => {
  const { watch, setValue, control, handleSubmit, open, onClose } = props;
  const classificationValue = watch(FIELDS.LAND_CLASSIFICATION);

  return (
    <ContainerModal
      maxWidth="sm"
      title="Land Appraisal"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      actionButton={
        <>
          <CancelButton />
          <SubmitButton />
        </>
      }
    >
      <Stack>
        <Stack direction="row" gap={1}>
          <SelectField
            control={control}
            label="Classification"
            name={FIELDS.LAND_CLASSIFICATION}
            options={CLASSIFICATION_OPTIONS}
            onChange={(e) => {
              setValue(FIELDS.SUBCLASS, "");
              setValue(FIELDS.LAND_CLASSIFICATION, e.target.value);
            }}
          />

          <SelectField
            control={control}
            label="Sub-Class"
            name={FIELDS.SUBCLASS}
            disabled={!classificationValue}
            options={SUBCLASS_OPTIONS[classificationValue] || []}
          />

          <NumberInput
            control={control}
            label="Area"
            name={FIELDS.LAND_AREA}
            adornment={ADORNMENTS.SQM}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <NumericField
            control={control}
            label="Unit Value"
            name={FIELDS.LAND_UNIT_VALUE}
            adornment={ADORNMENTS.PESO}
          />
          <NumericField
            control={control}
            label="Base Market Value"
            name={FIELDS.LAND_BASE_MARKET_VALUE}
            adornment={ADORNMENTS.PESO}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
