import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { LandPropAssTable } from "../../../tables/land/property-assessment/LandPropAssTable";
import { sumByField } from "@utils/math";
import { useFormContext, useWatch } from "react-hook-form";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/land/lookup";
import { logger } from "../../../../../../utils/logger";

function AssessmentFields({ readOnly }) {
  const { control, setValue } = useFormContext();

  const propertyAssessments = useWatch({ control, name: "propertyAssessments" }) ?? [];
  const landAppraisals = useWatch({ control, name: FIELDS.LAND_APPRAISAL }) ?? [];

  const handleActualUseChange = (id, actualUseVal) => {
    const assLevel = ACTUAL_USE_EQUIVALENTS[actualUseVal?.toLowerCase()] ?? 0;

    const updatedAssessments = propertyAssessments.map((row) =>
      row.id === id
        ? {
          ...row,
          [FIELDS.LAND_ACTUAL_USE]: actualUseVal,
          [FIELDS.LAND_ASSESSMENT_LEVEL]: assLevel,
          [FIELDS.LAND_ASSESSED_VALUE]: Number(
            ((assLevel / 100) * Number(row[FIELDS.LAND_MARKET_VALUE] ?? 0)).toFixed(2)
          ),
        }
        : row
    );

    const updatedAppraisals = landAppraisals.map((row) =>
      row.id === id
        ? {
          ...row,
          [FIELDS.LAND_ACTUAL_USE]: actualUseVal,
        }
        : row
    );

    setValue(FIELDS.ASSESSMENT_FIELDS, updatedAssessments);
    setValue(FIELDS.LAND_APPRAISAL, updatedAppraisals);
    setValue(FIELDS.TOTAL_ASSESSED_VALUE, sumByField(updatedAssessments, FIELDS.LAND_ASSESSED_VALUE));
  };

  return (
    <StyledFieldset title="Property Assessment">
      <LandPropAssTable
        readOnly={readOnly}
        handleChange={handleActualUseChange}
        control={control}
      />
    </StyledFieldset>
  );
}


export default AssessmentFields