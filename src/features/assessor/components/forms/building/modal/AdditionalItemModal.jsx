import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { ADDITIONAL_ITEMS_OPTIONS, CLASSIFICATION_OPTIONS, STRUC_CLASS_OPTIONS, SUBCLASS_OPTIONS } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { FileText, ListPlus, } from "lucide-react";

export const AdditionalItemModal = ({ open, onClose, handleSubmit, control, watch, setValue, disabled }) => {
  const classification = watch(FIELDS.LAND_CLASSIFICATION);
  const subclass = watch(FIELDS.SUBCLASS);
  const area = watch(FIELDS.LAND_AREA);

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="sm"
      title="Additional Items"
      open={open}
      onClose={onClose}
      headerIcon={<ListPlus />}
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
            label="Types of Items"
            name={FIELDS.LAND_CLASSIFICATION}
            options={ADDITIONAL_ITEMS_OPTIONS}
          />
          <TextInput
            control={control}
            label="Sub-Total"
            name={FIELDS.LAND_CLASSIFICATION}
          />


        </Stack>
      </Stack>
    </ContainerModal>
  );
};
