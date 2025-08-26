import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { CLASSIFICATION_OPTIONS, SUBCLASS_OPTIONS } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { FileText, } from "lucide-react";

export const AddLandAppraisalModal = ({ open, onClose, handleSubmit, control, watch, setValue, disabled }) => {
  const classification = watch(FIELDS.LAND_CLASSIFICATION);
  const subclass = watch(FIELDS.SUBCLASS);
  const area = watch(FIELDS.LAND_AREA);

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="sm"
      title="Land Appraisal"
      open={open}
      onClose={onClose}
      headerIcon={<FileText />}
      actionButton={
        <>
          <CancelButton disabled={disabled} onClick={onClose} />
          <SubmitButton onClick={handleSubmit} disabled={disabled || !classification || !subclass || !area} />
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
            }}
          />

          <SelectField
            control={control}
            label="Sub-Class"
            name={FIELDS.SUBCLASS}
            disabled={!classification}
            options={SUBCLASS_OPTIONS[classification] || []}
          />

          <NumberInput
            control={control}
            label="Area"
            name={FIELDS.LAND_AREA}
            adornment={ADORNMENTS.SQM}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <TextInput
            control={control}
            isNumeric
            label="Unit Value"
            name={FIELDS.LAND_UNIT_VALUE}
            adornment={ADORNMENTS.PESO}
            readOnly={true}
          />
          <TextInput
            control={control}
            isNumeric
            label="Base Market Value"
            name={FIELDS.LAND_BASE_MARKET_VALUE}
            adornment={ADORNMENTS.PESO}
            readOnly={true}
          />
        </Stack>
      </Stack>
    </ContainerModal>
  );
};
