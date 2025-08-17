import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { useEffect, useState } from "react";
import { LandAppraisalTable } from "../../../tables/land-appraisal/LandAppraisalTable";
import { APPRAISAL_FORM_DEFAULT } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { UNITVAL_TABLE } from "../../../../constants/unitValues";
import { sumByField } from "../../../../../../utils/math";
import { useForm, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";

function LandAppraisalFields() {
  const { control: landFaasFormControl, setValue: setLandFaasFormVal } = useAssessorForm();
  const { control: addAppraisalControl, watch, setValue, handleSubmit, reset: resetAddAppraisalForm, formState: { isSubmitting } } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);

  const [classification, subClass, landArea] = useWatch({ control: addAppraisalControl, name: [FIELDS.LAND_CLASSIFICATION, FIELDS.SUBCLASS, FIELDS.LAND_AREA] });
  const [landAppraisal, marketAdjustment] = useWatch({ control: landFaasFormControl, name: [FIELDS.LAND_APPRAISAL, FIELDS.MARKET_ADJUSTMENT] }) || []; //array

  useEffect(() => {
    const unitValue = UNITVAL_TABLE[classification?.toLowerCase()]?.[subClass?.toLowerCase()] || 0;
    const baseMarketValue = unitValue * (parseFloat(landArea) || 0);

    setValue(FIELDS.LAND_UNIT_VALUE, unitValue);
    setValue(FIELDS.LAND_MARKET_VALUE, baseMarketValue);
    setValue(FIELDS.LAND_BASE_MARKET_VALUE, baseMarketValue);

  }, [subClass, landArea]);

  const onAppraisalSubmit = async (data) => {
    try {
      const updatedAppraisals = [...landAppraisal, { ...data, id: v4() }];
      const totalMarketValue = sumByField(updatedAppraisals, [FIELDS.LAND_MARKET_VALUE]);
      // Update RHF state
      setLandFaasFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisals);
      setLandFaasFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue);
      setLandFaasFormVal(FIELDS.TOTAL_ASSESSED_VALUE, 0);
      // clear form
      resetAddAppraisalForm(APPRAISAL_FORM_DEFAULT);
    } catch (error) {
      console.error("Error in onAppraisalSubmit:", error);
    } finally {
      setModalActive(false);
    }
  };

  const handleDelete = (id) => {
    try {
      const updatedLandAppraisal = landAppraisal.filter(item => item?.id !== id)
      const updatedMarketAdj = marketAdjustment.filter(item => item?.appraisalID !== id);
      const totalMarketValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_MARKET_VALUE]);
      const totalAssessedValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_ASSESSED_VALUE]);
      // Update RHF state
      setLandFaasFormVal(FIELDS.LAND_APPRAISAL, updatedLandAppraisal)
      setLandFaasFormVal(FIELDS.MARKET_ADJUSTMENT, updatedMarketAdj)
      setLandFaasFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue)
      setLandFaasFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack mb={2}>
          <Button
            disableFocusRipple
            variant="contained"
            startIcon={<Add />}
            onClick={() => setModalActive(true)}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Appraisal
          </Button>
        </Stack>
        <LandAppraisalTable
          currentAppraisals={landAppraisal}
          handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandAppraisalModal
        disabled={isSubmitting}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(onAppraisalSubmit)}
        control={addAppraisalControl}
        watch={watch}
        setValue={setValue}
      />
    </>
  );
};

export default LandAppraisalFields