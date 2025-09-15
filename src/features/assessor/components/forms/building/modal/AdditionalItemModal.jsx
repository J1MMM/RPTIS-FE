import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { ADDITION_FLOORING_OPTIONS, ADDITIONAL_FOUNDATION_OPTIONS, ADDITIONAL_ITEMS_OPTIONS, CLASSIFICATION_OPTIONS, STRUC_CLASS_OPTIONS, SUBCLASS_OPTIONS } from "../../../../constants/dropdownOptions";
import { FIELDS } from "../../../../constants/fieldNames";
import TextInput from "../../../../../../components/ui/TextInput";
import { FileText, ListPlus, } from "lucide-react";
import Row from "../../../../../../components/ui/Row";
import DynamicItemInputs from "../panels/DynamicItemInputs";
import { useWatch } from "react-hook-form";
import { ADDITIONAL_ITEMS_DEFAULT } from "../../../../constants/defaultValues";

export const AdditionalItemModal = ({ open, onClose, handleSubmit, control, disabled, }) => {
  const [itemType] = useWatch({ control: control, name: ["category"] })

  return (
    <ContainerModal
      maxWidth="sm"
      disabled={disabled}
      title="Additional Items"
      open={open}
      onClose={onClose}
      headerIcon={<ListPlus />}
      actionButton={
        <>
          <CancelButton disabled={disabled} onClick={onClose} />
          <SubmitButton onClick={handleSubmit} disabled={disabled} />
        </>
      }
    >
      <Stack>
        <Row>
          <SelectField
            control={control}
            label="Types of Items"
            name={"category"}
            options={ADDITIONAL_ITEMS_OPTIONS}
          />
          <TextInput
            isNumeric
            readOnly={true}
            control={control}
            label="Sub-Total"
            name={"sub_total"}
          />
        </Row>

        <DynamicItemInputs
          control={control}
          itemType={itemType}
        />
      </Stack>
    </ContainerModal>
  );
};
