import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { ADDITIONAL_ITEMS_OPTIONS, } from "../../../../constants/building/dropdown";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import TextInput from "@components/ui/TextInput";
import { ListPlus, } from "lucide-react";
import Row from "@components/ui/Row";
import DynamicItemInputs from "../panels/DynamicItemInputs";
import { useWatch } from "react-hook-form";

export const AdditionalItemModal = ({ open, onClose, handleSubmit, control, disabled, formMode }) => {
  const [itemType] = useWatch({ control: control, name: ["category"] })

  return (
    <ContainerModal
      maxWidth="sm"
      disabled={disabled}
      title={formMode === "edit" ? "Edit Additional Item" : "Additional Items"}
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
            name={"total"}
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
