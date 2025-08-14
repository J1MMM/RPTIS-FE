import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "../ui/StyledFieldset";
import { useEffect, useState } from "react";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { LandAppraisalTable } from "../tables/LandAppraisalTable";
import { LAND_APPRAISAL_DEFAULT_DATA } from "../../constants/defaultValues";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { UNIT_VALUE_TABLE } from "../../constants/unitValues";
import { sumByField } from "../../../../utils/math";

export const LandAppraisalFields = (props) => {
  const { setFormData, formData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [landAppraisalForm, setLandAppraisalForm] = useState(
    LAND_APPRAISAL_DEFAULT_DATA
  );

  const subClass = landAppraisalForm[FIELD_NAMES.LAND_SUB_CLASS];
  const landArea = landAppraisalForm[FIELD_NAMES.LAND_AREA];

  useEffect(() => {
    setLandAppraisalForm((prev) => {
      const classificationRaw = prev[FIELD_NAMES.LAND_CLASSIFICATION];
      const subClassRaw = prev[FIELD_NAMES.LAND_SUB_CLASS];

      const classification = classificationRaw?.toLowerCase();
      const subClass = subClassRaw?.toLowerCase();
      const unitValue = UNIT_VALUE_TABLE[classification]?.[subClass] || 0;
      const landArea = parseFloat(prev[FIELD_NAMES.LAND_AREA]) || 0;
      const baseMarketValue = unitValue * landArea;

      const currentUnitValue = prev[FIELD_NAMES.LAND_UNIT_VALUE];
      const currentBMV = prev[FIELD_NAMES.LAND_BASE_MARKET_VALUE];

      // Prevent unnecessary state updates
      if (currentUnitValue === unitValue && currentBMV === baseMarketValue)
        return prev;

      return {
        ...prev,
        [FIELD_NAMES.LAND_UNIT_VALUE]: unitValue,
        [FIELD_NAMES.LAND_BASE_MARKET_VALUE]: baseMarketValue,
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

      if (name === FIELD_NAMES.LAND_CLASSIFICATION) {
        updated[FIELD_NAMES.LAND_SUB_CLASS] = "";
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
        [FIELD_NAMES.LAND_MARKET_VALUE]:
          landAppraisalForm?.[FIELD_NAMES.LAND_BASE_MARKET_VALUE],
      };

      const updatedAppraisals = [...formData?.landAppraisal, newAppraisal];

      const totalMarketValue = sumByField(updatedAppraisals, [
        FIELD_NAMES.LAND_MARKET_VALUE,
      ]);

      setFormData((prev) => ({
        ...prev,
        [FIELD_NAMES.LAND_APPRAISAL]: updatedAppraisals,
        [FIELD_NAMES.TOTAL_MARKET_VALUE]: totalMarketValue,
        [FIELD_NAMES.PROPERTY_ASSESSMENT]: [],
        [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: 0,
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
      const updatedLandAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL].filter(
        (item) => item.id !== id
      );
      const updatedMarketAjustments = prev[
        FIELD_NAMES.MARKET_ADJUSTMENT
      ].filter((item) => item?.appraisalID !== id);

      const totalMarketValue = sumByField(updatedLandAppraisal, [
        FIELD_NAMES.LAND_MARKET_VALUE,
      ]);

      const totalAssessedValue = sumByField(updatedLandAppraisal, [
        FIELD_NAMES.LAND_ASSESSED_VALUE,
      ]);

      return {
        ...prev,
        totalMarketValue,
        landAppraisal: updatedLandAppraisal,
        [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
        [FIELD_NAMES.MARKET_ADJUSTMENT]: updatedMarketAjustments,
        [FIELD_NAMES.PROPERTY_ASSESSMENT]: [],
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
