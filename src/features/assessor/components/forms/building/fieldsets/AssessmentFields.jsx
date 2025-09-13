import StyledFieldset from "@components/ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { sumByField } from "../../../../../../utils/math";
import { useFormContext, useWatch } from "react-hook-form";
import { BuildingAssessmentTable } from "../../../tables/building/BuildingAssessmentTable";

function BuildingAssessmentFields({ readOnly }) {
  const { control, setValue } = useFormContext()
  const propertyAssessment = useWatch({ control, name: "property_assessment" })

  const handleChange = (value) => {
    setValue(FIELDS.BLDG_ASSESSMENT_ACTUAL_USE, value)

  }
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