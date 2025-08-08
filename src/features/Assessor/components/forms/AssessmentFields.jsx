import StyledFieldset from "../ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../constants/defaultValues";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { LandPropAssTable } from "../tables/LandPropAssTable";

export const AssessmentFields = (props) => {
  const { setFormData, formData } = props;

  const handleAcutalUseChange = (id, actualUseVal) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL].map(
        (row) => {
          if (row.id === id) {
            const actualUseRaw = actualUseVal;
            const actualUse = actualUseRaw?.toLowerCase();
            const assessmentLevel = ACTUAL_USE_EQUIVALENTS[actualUse] ?? 0;
            const totalMarketValue =
              row[FIELD_NAMES.LAND_BASE_MARKET_VALUE] ?? 0;

            const assessedValue = assessmentLevel * totalMarketValue;
            return {
              ...row,
              [FIELD_NAMES.LAND_ACTUAL_USE]: actualUseVal,
              [FIELD_NAMES.LAND_ASSESSMENT_LEVEL]: assessmentLevel,
              [FIELD_NAMES.LAND_ASSESSED_VALUE]: assessedValue,
            };
          }
          return row;
        }
      );

      const totalAssessedValue = updatedLandAppraisal.reduce(
        (sum, obj) => sum + (obj[FIELD_NAMES.LAND_ASSESSED_VALUE] || 0),
        0
      );

      const updatedFormData = {
        ...prev,
        [FIELD_NAMES.LAND_APPRAISAL]: updatedLandAppraisal,
        [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
      };

      return updatedFormData;
    });
  };

  return (
    <>
      <StyledFieldset title="Property Assessment">
        <LandPropAssTable
          formData={formData}
          handleChange={handleAcutalUseChange}
        />
      </StyledFieldset>
    </>
  );
};
