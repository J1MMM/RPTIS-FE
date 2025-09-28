import { Factory } from "lucide-react";
import { Stack } from "@mui/material";
import ContainerModal from "@components/shared/ContainerModal";
import SubmitButton from "@components/ui/SubmitButton";
import CancelButton from "@components/ui/CancelButton";
import NumberInput from "@components/ui/NumberInput";
import TextInput from "@components/ui/TextInput";
import Row from "@components/ui/Row";
import StyledFieldset from "@components/ui/StyledFieldset";

export const AddMachineAppraisal = ({
  open,
  onClose,
  handleSubmit,
  control,
  disabled,
}) => {
  return (
    <ContainerModal
      disabled={disabled}
      maxWidth="md"
      title="Add Property Appraisal"
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
            label="Machinery Description"
            name="machinery_description"
          />
          <NumberInput
            control={control}
            label="No. of Units"
            name="no_of_units"
          />
        </Row>

        <Row>
          <NumberInput
            required={false}
            control={control}
            label="Acquisition Cost"
            name="acquisition_cost"
          />
          <NumberInput
            control={control}
            label="Market Value"
            name="market_value"
          />
        </Row>

        <StyledFieldset title="Additional Costs">
          <Row>
            <NumberInput
              control={control}
              label="Freight"
              name="additional_cost.freight"
              required={false}
            />
            <NumberInput
              control={control}
              label="Installation"
              name="additional_cost.installation"
              required={false}
            />
          </Row>
          <Row>
            <NumberInput
              control={control}
              label="Insurance"
              name="additional_cost.insurance"
              required={false}
            />
            <NumberInput
              control={control}
              label="Others"
              name="additional_cost.others"
              required={false}
            />
          </Row>
        </StyledFieldset>

        <Row sx={{ mt: 1 }}>
          <NumberInput
            control={control}
            label="Depreciation"
            name="depreciation"
            required={false}
          />
          <NumberInput
            control={control}
            label="Depreciated Market Value"
            name="depreciation_value"
            required={false}
          />
        </Row>
      </Stack>
    </ContainerModal>
  );
};
