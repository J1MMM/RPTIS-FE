import Button from "@mui/material/Button";

import { useState } from "react";
import { v4 } from "uuid";
import { ContainerModal } from "../../shared/ContainerModal";
import { TaxNumberFields } from "../fieldset/TaxNumberFields";
import { OwnerInfoFields } from "../fieldset/OwnerInfoFields";
import { BenificialFields } from "../fieldset/BenificialFields";
import { PropertyInfoFields } from "../fieldset/PropertyInfoFields";
import { BoundariesFields } from "../fieldset/BoundariesFields";
import { TaxabilityFields } from "../fieldset/TaxabilityFields";
import { EOAFields } from "../fieldset/EOAFields";
import { ClassificationFields } from "../fieldset/ClassificationFields";
import { CancelsFields } from "../fieldset/CancelsFields";
import { Lan } from "@mui/icons-material";
import LandBounderiesFields from "../fieldset/LandBounderiesFields";
import {
  ACTUALUSE_EQUI_LEVEL,
  CLASSIFICATION_DEFAULT,
  UNIT_VALUE_TABLE,
} from "../../../pages/Assessor/assessorConstant";
import { LandMarketValueFields } from "../fieldset/LandMarketValueFields";
import { LandPropertyAssessmentFields } from "../fieldset/LandPropertyAssessmentFields";

export default function AddTaxDecModal(props) {
  const [openClassificationModal, setOpenClassificationModal] = useState(false);
  const [landAppraisal, setLandAppraisal] = useState(CLASSIFICATION_DEFAULT);

  const handleLandAppraisalChange = (e) => {
    const { name, value } = e.target;

    setLandAppraisal((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // Reset subclass if classification changes
      if (name === "classification") {
        updated.subClass = "";
      }

      const classification = updated.classification?.toLowerCase();
      const subClass = updated.subClass?.toLowerCase();
      const area = parseFloat(updated.area) || 0;
      const actualUse = updated.actualUse?.toLowerCase();

      updated.unitValue = UNIT_VALUE_TABLE[classification]?.[subClass] || 0;
      updated.assessmentLevel = ACTUALUSE_EQUI_LEVEL[actualUse] || 0;

      updated.baseMarketValue = parseFloat(
        (area * updated.unitValue).toFixed(2)
      );

      return updated;
    });
  };

  const handleLandChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          landDetails: {
            ...prev?.Boundaries?.landDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };

  const handleFormChange = (e) => {
    props?.setSelectedRow({
      ...props?.row,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddClassification = () => {
    if (landAppraisal.classification != "") {
      const id = v4();

      props?.setSelectedRow((prev) => {
        return {
          ...prev,
          classification: [
            ...prev.classification,
            { ...landAppraisal, id: id },
          ],
        };
      });

      setLandAppraisal(CLASSIFICATION_DEFAULT);
      setOpenClassificationModal(false);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    props?.setConfirmationOpen(true);
  };

  return (
    <>
      <ContainerModal
        title="REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND"
        open={props?.open}
        onClose={props?.handleClose}
        onSubmit={handleSubmitClick}
        actionButton={
          <>
            <Button
              size="small"
              onClick={props?.handleClose}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button size="small" type="submit" variant="contained">
              Submit
            </Button>
          </>
        }
      >
        <TaxNumberFields props={props} handleFormChange={handleFormChange} />
        <PropertyInfoFields props={props} handleFormChange={handleFormChange} />
        <OwnerInfoFields props={props} handleFormChange={handleFormChange} />
        <BenificialFields props={props} handleFormChange={handleFormChange} />

        <LandBounderiesFields
          props={props}
          handleLandChange={handleLandChange}
        />

        <ClassificationFields
          props={props}
          open={openClassificationModal}
          onClose={() => setOpenClassificationModal(false)}
          addClassOnlick={() => setOpenClassificationModal(true)}
          classificationData={landAppraisal}
          handleAddClassification={handleAddClassification}
          handleClassificationChange={handleLandAppraisalChange}
        />
        <LandMarketValueFields
          props={props}
          open={openClassificationModal}
          onClose={() => setOpenClassificationModal(false)}
          addClassOnlick={() => setOpenClassificationModal(true)}
          classificationData={landAppraisal}
          handleAddClassification={handleAddClassification}
          handleClassificationChange={handleLandAppraisalChange}
        />
        <LandPropertyAssessmentFields
          props={props}
          handleFormChange={handleFormChange}
        />

        <TaxabilityFields {...props} />
        <EOAFields props={props} handleFormChange={handleFormChange} />
      </ContainerModal>
    </>
  );
}
