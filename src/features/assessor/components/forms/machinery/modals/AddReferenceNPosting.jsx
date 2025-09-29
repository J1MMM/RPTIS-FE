import { Factory, FileText, } from "lucide-react";
import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SelectField from "@components/ui/SelectField";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import { ADORNMENTS } from "@constants/adornments";
import { SUBCLASS_OPTIONS } from "../../../../constants/land/dropdown";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import TextInput from "@components/ui/TextInput";
import { CLASSIFICATION_OPTIONS } from "../../../../constants/shared/dropdown";
import Row from "@components/ui/Row";
import DateInput from "../../../../../../components/ui/DateInput";
import StyledFieldset from "../../../../../../components/ui/StyledFieldset";

export const AddReferenceNPosting = ({ open, onClose, handleSubmit, control, disabled, formMode }) => {

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="xs"
      title={formMode === "edit" ? "Edit Reference and posting" : "Add Reference and posting"}
      open={open}
      onClose={onClose}
      headerIcon={<FileText />}
      actionButton={
        <>
          <CancelButton disabled={disabled} onClick={onClose} />
          <SubmitButton onClick={handleSubmit} disabled={disabled} />
        </>
      }
    >
      <Stack>
        <TextInput
          control={control}
          label="PIN"
          name="pin"
        />
        <TextInput
          control={control}
          label="Previous"
          name="previous_posting"
        />
        <TextInput
          control={control}
          label="Present"
          name="present_posting"
        />


        <Row>
          <TextInput
            control={control}
            label="Posting Initial"
            name="posting.initial"
          />
          <DateInput
            control={control}
            label="Posting Date"
            name="posting.date"
          />

        </Row>
      </Stack>
    </ContainerModal>
  );
};
