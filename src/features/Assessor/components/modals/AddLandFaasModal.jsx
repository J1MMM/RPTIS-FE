import { useState } from "react";
import { Button } from "@mui/material";
import { TaxNumberFields } from "../forms/TaxNumberFields";
import { OwnerInfoFields } from "../forms/OwnerInfoFields";
import { PropertyInfoFields } from "../forms/PropertyInfoFields";
import { TaxabilityFields } from "../forms/TaxabilityFields";
import { EOAFields } from "../forms/EOAFields";
import LandBounderiesFields from "../forms/LandBounderiesFields";
import { LandMarketValueFields } from "../forms/LandMarketValueFields";
import { LandPropertyAssessmentFields } from "../forms/LandPropertyAssessmentFields";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";
import { LAND_APPRAISAL_DEFAULT_DATA } from "../../constants/defaultValues";
import { AdministratorInfoFields } from "../forms/AdministratorInfoFields";
import { LandAppraisalFields } from "../forms/LandAppraisalFields";

export default function AddLandFaasModal({ modalControl, formState }) {
  const { open, onClose } = modalControl;
  const { formData, setFormData, setReadOnly } = formState;

  const [openMarketValAdjustmentModal, setOpenMarketValAdjustmentModal] =
    useState(false);

  const [landAppraisal, setLandAppraisal] = useState(
    LAND_APPRAISAL_DEFAULT_DATA
  );

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

        <LandAppraisalFields
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
        />

        <LandMarketValueFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        {/*     <LandPropertyAssessmentFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <TaxabilityFields
          formData={formData}
          handleFormChange={handleFormChange}
        />

        <EOAFields formData={formData} handleFormChange={handleFormChange} /> */}
      </ContainerModal>
    </>
  );
}
