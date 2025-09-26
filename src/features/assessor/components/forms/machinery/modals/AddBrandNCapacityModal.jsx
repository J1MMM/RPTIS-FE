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

export const AddBrandNCapacityModal = ({ open, onClose, handleSubmit, control, disabled }) => {

  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="md"
      title="Add Machinery Information"
      open={open}
      onClose={onClose}
      headerIcon={<Factory />}
      actionButton={
        <>
          <CancelButton disabled={disabled} onClick={onClose} />
          <SubmitButton onClick={handleSubmit} disabled={disabled} />
        </>
      }
    >
      <Stack>
        <Row>
          <TextInput
            control={control}
            label="Description"
            name="description"
          />
          <TextInput
            control={control}
            label="Model"
            name="model"
          />
          <TextInput
            control={control}
            label="H.P."
            name="hp"
          />
        </Row>

        <Row>
          <DateInput
            control={control}
            label="Date Acquired"
            name="date_acquired"
          />
          <TextInput
            control={control}
            label="Condition when acquired"
            name="condition_when_acquired"
          />

          <Row>
            <TextInput
              control={control}
              label="ESTIMATED"
              name="economic_life.estimated"
            />
            <TextInput
              control={control}
              label="REMAINING"
              name="economic_life.remaining"
            />
          </Row>

        </Row>
        {/* <StyledFieldset title="Economic Life">
          <Row>
            <TextInput
              control={control}
              label="ESTIMATED"
              name="economic_life.estimated"
            />
            <TextInput
              control={control}
              label="REMAINING"
              name="economic_life.remaining"
            />
          </Row>
        </StyledFieldset> */}

        <Row>
          <DateInput
            control={control}
            label="Date Installed"
            name="date_installed"
          />
          <DateInput
            control={control}
            label="Date of Operation"
            name="date_of_operation"
          />
          <TextInput
            control={control}
            label="Remarks"
            name="remarks"
          />
        </Row>
      </Stack>
    </ContainerModal>
  );
};
