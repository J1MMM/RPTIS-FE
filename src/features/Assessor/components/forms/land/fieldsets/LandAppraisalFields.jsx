import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { toastConfig } from "@constants/toastConfig";
import { LandAppraisalTable } from "../../../tables/land/land-appraisal/LandAppraisalTable";
import { APPRAISAL_FORM_DEFAULT } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { UNITVAL_TABLE } from "../../../../constants/unitValues";
import { sumByField } from "../../../../../../utils/math";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { toast } from "react-toastify";
import { logger } from "../../../../../../utils/logger";

function LandAppraisalFields() {
  const { control: landFormControl, setValue: setLandFormVal } = useFormContext();
  const { control: addAppraisalControl, watch, setValue, handleSubmit, reset: resetAddAppraisalForm, formState: { isSubmitting } } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);

  const [classification, subClass, landArea] = useWatch({ control: addAppraisalControl, name: [FIELDS.LAND_CLASSIFICATION, FIELDS.SUBCLASS, FIELDS.LAND_AREA] });
  const landAppraisal = useWatch({ control: landFormControl, name: FIELDS.LAND_APPRAISAL }) || []; //array

  useEffect(() => {
    const unitValue = UNITVAL_TABLE[classification?.toLowerCase()]?.[subClass?.toLowerCase()] || 0;
    const baseMarketValue = unitValue * (parseFloat(landArea) || 0);

    setValue(FIELDS.LAND_UNIT_VALUE, unitValue);
    setValue(FIELDS.LAND_MARKET_VALUE, baseMarketValue);
    setValue(FIELDS.LAND_BASE_MARKET_VALUE, baseMarketValue);

  }, [subClass, landArea]);

  const onAppraisalSubmit = (data) => {
    try {
      const updatedAppraisals = [...landAppraisal, { ...data, id: v4() }];
      const totalMarketValue = sumByField(updatedAppraisals, FIELDS.LAND_MARKET_VALUE);

      setLandFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisals);
      setLandFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue);
      setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, 0);
      resetAddAppraisalForm(APPRAISAL_FORM_DEFAULT);
      toast.success("Appraisal added successfully!", toastConfig);
      setModalActive(false);

    } catch (error) {
      toast.error("Failed to Add appraisal. Please try again.", toastConfig);
      console.error("Error in onAppraisalSubmit:", error);
    }
  };

  const handleDelete = (id) => {
    try {
      const updatedLandAppraisal = landAppraisal.filter(item => item?.id !== id)
      const totalMarketValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_MARKET_VALUE]);
      const totalAssessedValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_ASSESSED_VALUE]);
      // Update RHF state
      setLandFormVal(FIELDS.LAND_APPRAISAL, updatedLandAppraisal)
      setLandFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue)
      setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)
      toast.success("Appraisal deleted successfully!", toastConfig);
    } catch (error) {
      toast.error("Failed to delete appraisal. Please try again.", toastConfig);
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
            <input style={{ position: "absolute", width: 100, opacity: 0 }} required={landAppraisal?.length == 0} />
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