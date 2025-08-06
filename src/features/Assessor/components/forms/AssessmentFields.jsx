import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { useEffect, useState } from "react";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { LandAppraisalTable } from "../tables/LandAppraisalTable";
import { LAND_APPRAISAL_DEFAULT_DATA } from "../../constants/defaultValues";
import { FIELD_NAMES } from "../../constants/fieldNames";
import {
  ACTUALUSE_EQUI_LEVEL,
  UNIT_VALUE_TABLE,
} from "../../constants/unitValues";
import { AddLandPropAssModal } from "../modals/AddLandPropAssModal";
import { LandPropAssTable } from "../tables/LandPropAssTable";

export const AssessmentFields = (props) => {
  const { setFormData, formData, handleFormChange } = props;
  const [modalActive, setModalActive] = useState(false);

  const appraisalEmpty = formData[FIELD_NAMES.LAND_APPRAISAL]?.length === 0;

  const handlePropAssSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const id = v4();

      const newPropAssessment = {
        id,
        [FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE]:
          formData[FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE],
        [FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL]:
          formData[FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL],
        [FIELD_NAMES.TOTAL_MARKET_VALUE]:
          formData[FIELD_NAMES.TOTAL_MARKET_VALUE],
        [FIELD_NAMES.PROPERTY_ASSESSED_VALUE]:
          formData[FIELD_NAMES.PROPERTY_ASSESSED_VALUE],
      };

      setFormData((prev) => {
        const updated = {
          ...prev,
          [FIELD_NAMES.PROPERTY_ASSESSMENT]: [
            ...prev[FIELD_NAMES.PROPERTY_ASSESSMENT],
            newPropAssessment,
          ],
          [FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE]: "",
        };

        const totalAssessedValue = updated[
          FIELD_NAMES.PROPERTY_ASSESSMENT
        ].reduce(
          (sum, obj) => sum + (obj[FIELD_NAMES.PROPERTY_ASSESSED_VALUE] || 0),
          0
        );

        updated[FIELD_NAMES.TOTAL_ASSESSED_VALUE] = totalAssessedValue;

        return updated;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setModalActive(false);
    }
  };

  const handleDelete = (id) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[
        FIELD_NAMES.PROPERTY_ASSESSMENT
      ]?.filter((item) => item.id !== id);

      const totalAssessedValue = updatedLandAppraisal.reduce(
        (sum, obj) => sum + (obj[FIELD_NAMES.PROPERTY_ASSESSED_VALUE] || 0),
        0
      );
      return {
        ...prev,
        [FIELD_NAMES.PROPERTY_ASSESSMENT]: updatedLandAppraisal,
        [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
      };
    });
  };

  return (
    <>
      <StyledFieldset title="Property Assessment">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            variant="contained"
            disabled={appraisalEmpty}
            startIcon={<Add />}
            onClick={() => setModalActive(true)}
          >
            Assessment
          </Button>
        </Stack>

        <LandPropAssTable formData={formData} handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandPropAssModal
        open={modalActive}
        onClose={() => setModalActive(false)}
        formData={formData}
        handleFormChange={handleFormChange}
        handlePropAssSubmit={handlePropAssSubmit}
      />
    </>
  );
};
