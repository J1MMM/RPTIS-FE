import StyledFieldset from "@components/ui/StyledFieldset";
import { ACTUAL_USE_EQUIVALENTS } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { sumByField } from "../../../../../../utils/math";
import { useFormContext, useWatch } from "react-hook-form";
import { BuildingAssessmentTable } from "../../../tables/building/BuildingAssessmentTable";

function BuildingAssessmentFields({ readOnly }) {
  const { control: landFormControl, setValue: setLandFormVal } = useFormContext()
  const propertyAssessment = useWatch({ control: landFormControl, name: "property_assessment" })
  console.log("propertyAssessment");
  console.log(propertyAssessment);



  return (
    <>
      <StyledFieldset title="Property Assessment">
        <BuildingAssessmentTable
          readOnly={readOnly}
          rows={[{
            ...propertyAssessment,
            id: 1
          }]}
          handleChange={() => { }}
          control={landFormControl}
        />
      </StyledFieldset>
    </>
  );
};

export default BuildingAssessmentFields