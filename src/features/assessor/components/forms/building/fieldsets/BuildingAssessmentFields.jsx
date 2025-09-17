import StyledFieldset from "@components/ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { sumByField } from "../../../../../../utils/math";
import { useFormContext, useWatch } from "react-hook-form";
import { BuildingAssessmentTable } from "../../../tables/building/BuildingAssessmentTable";
import { useEffect } from "react";
import { getBldgAssLvl } from "../../../../utils/getBldgAssLvl";

function BuildingAssessmentFields({ readOnly }) {
  const { control, setValue } = useFormContext()
  const propertyAssessment = useWatch({ control, name: FIELDS.BLDG_ASSESSMENT_FIELDS }) || {};
  const { actualUse, marketValue, assessmentLevel, assessedValue } = propertyAssessment
  // set assessLevel and actualUse
  const handleChange = (newActualUse) => {
    const assLvlFn = getBldgAssLvl[newActualUse]

    if (typeof assLvlFn !== "function") {
      console.warn("No compute function for actual use:", newActualUse);
      return;
    }

    const assLevel = assLvlFn(marketValue) || 0

    setValue(FIELDS.BLDG_ASSESSMENT_ACTUAL_USE, newActualUse)
    setValue(FIELDS.BLDG_ASSESSMENT_LEVEL, assLevel)
  }
  // compute assessment value 
  useEffect(() => {
    const assLvlFn = getBldgAssLvl[actualUse];
    if (typeof assLvlFn !== "function") return;

    const assLevel = assLvlFn(marketValue) || 0;

    setValue(FIELDS.BLDG_ASSESSMENT_LEVEL, assLevel);
    setValue(FIELDS.BLDG_ASSESSED_VALUE, marketValue * assLevel);
  }, [actualUse, marketValue, setValue]);


  return (
    <>
      <StyledFieldset title="Property Assessment">
        <BuildingAssessmentTable
          readOnly={readOnly}
          rows={[{
            ...propertyAssessment,
            id: 1
          }]}
          handleChange={handleChange}
          control={control}
        />
      </StyledFieldset>
    </>
  );
};

export default BuildingAssessmentFields