import { Button } from "@mui/material";
import { TaxNumberFields } from "../forms/TaxNumberFields";
import { OwnerInfoFields } from "../forms/OwnerInfoFields";
import { PropertyInfoFields } from "../forms/PropertyInfoFields";
import LandBounderiesFields from "../forms/LandBounderiesFields";
import { LandMarketValueFields } from "../forms/LandMarketValueFields";
import { AssessmentFields } from "../forms/AssessmentFields";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { AdministratorInfoFields } from "../forms/AdministratorInfoFields";
import { LandAppraisalFields } from "../forms/LandAppraisalFields";
import { TaxabilityFields } from "../forms/TaxabilityFields";

export default function AddLandFaasModal({ modalControl, formState }) {
  const { open, onClose } = modalControl;
  const { formData, setFormData, setReadOnly } = formState;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ContainerModal
        title="REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND"
        open={open}
        onClose={onClose}
        onSubmit={handleClickSubmit}
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
        <TaxNumberFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <PropertyInfoFields
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />

        <OwnerInfoFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <AdministratorInfoFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <LandBounderiesFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <LandAppraisalFields formData={formData} setFormData={setFormData} />

        <LandMarketValueFields formData={formData} />

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
