import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { useEffect, useState } from "react";
import { AddLandAppraisalModal } from "../../../modals/AddLandAppraisalModal";
import { LandAppraisalTable } from "../../../tables/land-appraisal/LandAppraisalTable";
import { LAND_APPRAISAL_DEFAULT_DATA } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { UNIT_VALUE_TABLE } from "../../../../constants/unitValues";
import { sumByField } from "../../../../../../utils/math";

export const LandAppraisalFields = (props) => {
  const { setFormData, formData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [landAppraisalForm, setLandAppraisalForm] = useState(
    LAND_APPRAISAL_DEFAULT_DATA
  );

  const subClass = landAppraisalForm[FIELDS.LAND_SUB_CLASS];
  const landArea = landAppraisalForm[FIELDS.LAND_AREA];

  useEffect(() => {
    setLandAppraisalForm((prev) => {
      const classificationRaw = prev[FIELDS.LAND_CLASSIFICATION];
      const subClassRaw = prev[FIELDS.LAND_SUB_CLASS];

      const classification = classificationRaw?.toLowerCase();
      const subClass = subClassRaw?.toLowerCase();
      const unitValue = UNIT_VALUE_TABLE[classification]?.[subClass] || 0;
      const landArea = parseFloat(prev[FIELDS.LAND_AREA]) || 0;
      const baseMarketValue = unitValue * landArea;

      const currentUnitValue = prev[FIELDS.LAND_UNIT_VALUE];
      const currentBMV = prev[FIELDS.LAND_BASE_MARKET_VALUE];

      // Prevent unnecessary state updates
      if (currentUnitValue === unitValue && currentBMV === baseMarketValue)
        return prev;

      return {
        ...prev,
        [FIELDS.LAND_UNIT_VALUE]: unitValue,
        [FIELDS.LAND_BASE_MARKET_VALUE]: baseMarketValue,
      };
    });
  }, [subClass, landArea]);

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;

    setLandAppraisalForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === FIELDS.LAND_CLASSIFICATION) {
        updated[FIELDS.LAND_SUB_CLASS] = "";
      }

      return updated;
    });
  };

  const handleAppraisalSubmit = (e) => {
    try {
      const id = v4();

      const newAppraisal = {
        ...landAppraisalForm,
        id,
        [FIELDS.LAND_MARKET_VALUE]:
          landAppraisalForm?.[FIELDS.LAND_BASE_MARKET_VALUE],
      };

      const updatedAppraisals = [...formData?.landAppraisal, newAppraisal];

      const totalMarketValue = sumByField(updatedAppraisals, [
        FIELDS.LAND_MARKET_VALUE,
      ]);

      setFormData((prev) => ({
        ...prev,
        [FIELDS.LAND_APPRAISAL]: updatedAppraisals,
        [FIELDS.TOTAL_MARKET_VALUE]: totalMarketValue,
        [FIELDS.PROPERTY_ASSESSMENT]: [],
        [FIELDS.TOTAL_ASSESSED_VALUE]: 0,
      }));
      setLandAppraisalForm(LAND_APPRAISAL_DEFAULT_DATA);
    } catch (error) {
      console.error(error);
    } finally {
      setModalActive(false);
    }
  };

  const handleDelete = (id) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[FIELDS.LAND_APPRAISAL].filter(
        (item) => item.id !== id
      );
      const updatedMarketAjustments = prev[FIELDS.MARKET_ADJUSTMENT].filter(
        (item) => item?.appraisalID !== id
      );

      const totalMarketValue = sumByField(updatedLandAppraisal, [
        FIELDS.LAND_MARKET_VALUE,
      ]);

      const totalAssessedValue = sumByField(updatedLandAppraisal, [
        FIELDS.LAND_ASSESSED_VALUE,
      ]);

      return {
        ...prev,
        totalMarketValue,
        landAppraisal: updatedLandAppraisal,
        [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
        [FIELDS.MARKET_ADJUSTMENT]: updatedMarketAjustments,
        [FIELDS.PROPERTY_ASSESSMENT]: [],
      };
    });
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            variant="contained"
            disabled={props?.readOnly}
            startIcon={<Add />}
            onClick={() => setModalActive(true)}
          >
            Appraisal
          </Button>
        </Stack>

        <LandAppraisalTable formData={formData} handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandAppraisalModal
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleAppraisalSubmit={handleAppraisalSubmit}
        landAppraisal={landAppraisalForm}
        handleFieldsChange={handleFieldsChange}
      />
    </>
  );
};
