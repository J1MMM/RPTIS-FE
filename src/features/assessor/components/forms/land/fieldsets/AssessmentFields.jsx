import StyledFieldset from "@components/ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { LandPropAssTable } from "../../../tables/land/property-assessment/LandPropAssTable";
import { sumByField } from "../../../../../../utils/math";
import { useFormContext, useWatch } from "react-hook-form";

const assLevel = {
  residential: 15,
  agricultural: 40,
  commercial: 40,
  industrial: 40,
};

function AssessmentFields({ readOnly }) {
  const { control: landFormControl, setValue: setLandFormVal } = useFormContext()
  const formData = useWatch({ control: landFormControl })

  const handleActualUseChange = (id, actualUseVal) => {
    const updatedAppraisals = formData["propertyAssessments"].map((row) =>
      row.id === id
        ? {
          ...row,
          [FIELDS.LAND_ACTUAL_USE]: actualUseVal,
          [FIELDS.LAND_ASSESSMENT_LEVEL]: assLevel[actualUseVal?.toLowerCase()] ?? 0,
          [FIELDS.LAND_ASSESSED_VALUE]: (ACTUAL_USE_EQUIVALENTS[actualUseVal?.toLowerCase()] ?? 0) * (row[FIELDS.LAND_MARKET_VALUE] ?? 0),
        }
        : row
    );

    setLandFormVal("propertyAssessments", updatedAppraisals);
    setLandFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisals);
    setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, sumByField(updatedAppraisals, FIELDS.LAND_ASSESSED_VALUE));
  };


  return (
    <>
      <StyledFieldset title="Property Assessment">
        <LandPropAssTable
          readOnly={readOnly}
          formData={formData}
          handleChange={handleActualUseChange}
          control={landFormControl}
        />
      </StyledFieldset>
    </>
  );
};

export default AssessmentFields