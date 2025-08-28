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
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { toast } from "react-toastify";
import { logger } from "../../../../../../utils/logger";

function LandAppraisalFields({ readOnly }) {
  const { control: landFormControl, setValue: setLandFormVal, reset, resetField: resetFaasFormField, getValues } = useFormContext();
  const { control: addAppraisalControl, watch, setValue, handleSubmit, reset: resetAddAppraisalForm, formState: { isSubmitting } } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const { fields, append, remove } = useFieldArray({ control: landFormControl, name: FIELDS.LAND_APPRAISAL });

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

      append({ ...data, id: v4() })
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
      const updatedLandAppraisal = fields.filter(item => item?.id !== id)
      const totalMarketValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_MARKET_VALUE]);
      const totalAssessedValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_ASSESSED_VALUE]);
      // Update RHF state
      remove(id)
      reset({
        ...getValues(),
        [FIELDS.TOTAL_MARKET_VALUE]: totalMarketValue,
        [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue
      });

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
            disabled={readOnly}
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
          readOnly={readOnly}
          currentAppraisals={fields}
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