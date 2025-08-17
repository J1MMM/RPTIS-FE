import { Button, Stack } from "@mui/material";
import { OwnerInfoFields } from "../forms/land/fieldsets/OwnerInfoFields";
import { PropertyInfoFields } from "../forms/land/fieldsets/PropertyInfoFields";
import LandBounderiesFields from "../forms/land/fieldsets/LandBounderiesFields";
import { LandMarketValueFields } from "../forms/land/fieldsets/LandMarketValueFields";
import { AssessmentFields } from "../forms/land/fieldsets/AssessmentFields";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { AdministratorInfoFields } from "../forms/land/fieldsets/AdministratorInfoFields";
import { LandAppraisalFields } from "../forms/land/fieldsets/LandAppraisalFields";
import { TaxabilityFields } from "../forms/land/fieldsets/TaxabilityFields";
import useAssessorForm from "../../hooks/useFormContext";
import SelectField from "../../../../components/ui/SelectField";
import { TRANSACTION_CODE } from "../../constants/dropdownOptions";
import { FIELDS } from "../../constants/fieldNames";

export default function AddLandFaasModal({
  modalControl,
  formState,
  onSubmit,
}) {
  const { handleSubmit } = useAssessorForm();
  const { open, onClose } = modalControl;
  const { formData, setFormData, setReadOnly } = formState;
  const { landFaasControl } = useAssessorForm();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <ContainerModal
        title="REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND"
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionButton={
          <>
            <Button size="small" onClick={onClose} variant="outlined">
              Cancel
            </Button>
            <Button size="small" type="submit" variant="contained">
              Submit
            </Button>
          </>
        }
      >
        <Stack width={230} direction="row" justifyContent="space-between">
          <SelectField
            control={landFaasControl}
            label="Transaction Code"
            name={FIELDS.TRANSACTION_CODE}
            options={TRANSACTION_CODE}
          />
        </Stack>

        <PropertyInfoFields />
        <OwnerInfoFields />
        <AdministratorInfoFields />
        <LandBounderiesFields />

        <LandAppraisalFields formData={formData} setFormData={setFormData} />
        <LandMarketValueFields formData={formData} setFormData={setFormData} />
        <AssessmentFields
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />
        <TaxabilityFields
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />
      </ContainerModal>
    </>
  );
}
