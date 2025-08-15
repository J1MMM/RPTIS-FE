import StyledFieldset from "@components/ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { LandPropAssTable } from "../../../tables/property-assessment/LandPropAssTable";
import { sumByField } from "../../../../../../utils/math";
import { useEffect } from "react";

export const AssessmentFields = (props) => {
  const { setFormData, formData } = props;

  const handleAcutalUseChange = (id, actualUseVal) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[FIELDS.LAND_APPRAISAL].map((row) => {
        if (row.id === id) {
          const actualUseRaw = actualUseVal;
          const actualUse = actualUseRaw?.toLowerCase();
          const assessmentLevel = ACTUAL_USE_EQUIVALENTS[actualUse] ?? 0;
          const landMarketValue = row[FIELDS.LAND_MARKET_VALUE] ?? 0;

          const assessedValue = assessmentLevel * landMarketValue;
          return {
            ...row,
            [FIELDS.LAND_ACTUAL_USE]: actualUseVal,
            [FIELDS.LAND_ASSESSMENT_LEVEL]: assessmentLevel,
            [FIELDS.LAND_ASSESSED_VALUE]: assessedValue,
          };
        }
        return row;
      });

      const totalAssessedValue = sumByField(
        updatedLandAppraisal,
        FIELDS.LAND_ASSESSED_VALUE
      );

      const updatedFormData = {
        ...prev,
        [FIELDS.LAND_APPRAISAL]: updatedLandAppraisal,
        [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
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
