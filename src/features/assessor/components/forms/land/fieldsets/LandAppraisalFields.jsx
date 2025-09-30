import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { toastConfig } from "@constants/toastConfig";
import { LandAppraisalTable } from "../../../tables/land/land-appraisal/LandAppraisalTable";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { UNITVAL_TABLE } from "../../../../constants/land/lookup";
import { sumByField } from "@utils/math";
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { toast } from "react-toastify";
import { logger } from "@utils/logger";
import { PlusCircle } from "lucide-react";
import { APPRAISAL_FORM_DEFAULT } from "../../../../constants/land/default";

function LandAppraisalFields({ readOnly }) {
  const { control: landFormControl, setValue: setLandFormVal, reset, resetField: resetFaasFormField, getValues } = useFormContext();
  const { control: addAppraisalControl, watch, setValue, handleSubmit, reset: resetAddAppraisalForm, formState: { isSubmitting } } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [editingId, setEditingId] = useState(null);
  const { fields, append, remove, update } = useFieldArray({ control: landFormControl, name: FIELDS.LAND_APPRAISAL });
  const { append: appendAssessment, remove: removeAssessment } = useFieldArray({ control: landFormControl, name: "propertyAssessments" });

  const [classification, subClass, landArea] = useWatch({ control: addAppraisalControl, name: [FIELDS.LAND_CLASSIFICATION, FIELDS.SUBCLASS, FIELDS.LAND_AREA] });
  const landappraisals = useWatch({ control: landFormControl, name: FIELDS.LAND_APPRAISAL }) || []; //array

  useEffect(() => {
    const unitValue = UNITVAL_TABLE[classification?.toLowerCase()]?.[subClass?.toLowerCase()] || 0;
    const baseMarketValue = unitValue * (parseFloat(landArea) || 0);

    setValue(FIELDS.LAND_UNIT_VALUE, unitValue);
    setValue(FIELDS.LAND_MARKET_VALUE, baseMarketValue);
    setValue(FIELDS.LAND_BASE_MARKET_VALUE, baseMarketValue);

  }, [subClass, landArea]);

  const onAddSubmit = (data) => {
    try {
      const updatedAppraisals = [...landappraisals, { ...data, id: v4() }];
      const totalMarketValue = sumByField(updatedAppraisals, FIELDS.LAND_MARKET_VALUE);
      const newAppraisal = { ...data, id: v4() };
      append(newAppraisal);
      appendAssessment(newAppraisal);
      setLandFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue);
      setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, 0);
      resetAddAppraisalForm(APPRAISAL_FORM_DEFAULT);
      toast.success("Appraisal added successfully!", toastConfig);
      setModalActive(false);
    } catch (error) {
      toast.error("Failed to Add appraisal. Please try again.", toastConfig);
      console.error("Error in onAddSubmit:", error);
    }
  };

  const onEditSubmit = (data) => {

    const selectedItem = getValues(FIELDS.LAND_APPRAISAL) || []

    try {
      const updatedAppraisal = { ...data, id: selectedItem[editingId].id };
      update(editingId, updatedAppraisal);

      // Update the assessment as well
      const updatedAppraisals = fields.map((item, index) =>
        index === editingId ? updatedAppraisal : item
      );
      const totalMarketValue = sumByField(updatedAppraisals, FIELDS.LAND_MARKET_VALUE);
      const totalAssessedValue = sumByField(updatedAppraisals, FIELDS.LAND_ASSESSED_VALUE);

      setLandFormVal(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue);
      setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue);

      setModalActive(false);
      setEditingId(null);
      resetAddAppraisalForm(APPRAISAL_FORM_DEFAULT);
      toast.success("Appraisal updated successfully!", toastConfig);
    } catch (error) {
      console.error("Error updating appraisal:", error);
      toast.error("Failed to update appraisal. Please try again.", toastConfig);
    }
  };

  const handleDelete = (id) => {
    try {
      const updatedLandAppraisal = fields.filter(item => item?.id !== id);
      const totalMarketValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_MARKET_VALUE]);
      const totalAssessedValue = sumByField(updatedLandAppraisal, [FIELDS.LAND_ASSESSED_VALUE]);
      // Update RHF state
      remove(id);
      removeAssessment(id);
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

  const handleEdit = (id) => {
    setFormMode("edit");
    setEditingId(id);
    setModalActive(true);
    resetAddAppraisalForm(fields[id]);
  };

  const handleClose = () => {
    setModalActive(false);
    setEditingId(null);
    resetAddAppraisalForm(APPRAISAL_FORM_DEFAULT);
  };

  const handleAddBtnClick = () => {
    setFormMode("add");
    setModalActive(true);
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack mb={2}>
          <Button
            disabled={readOnly}
            disableFocusRipple
            variant="contained"
            startIcon={<PlusCircle size="18" />}
            onClick={handleAddBtnClick}
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
          handleDelete={handleDelete}
          handleEdit={handleEdit} />
      </StyledFieldset>

      <AddLandAppraisalModal
        disabled={isSubmitting}
        open={modalActive}
        onClose={handleClose}
        handleSubmit={formMode === "add" ? handleSubmit(onAddSubmit) : handleSubmit(onEditSubmit)}
        control={addAppraisalControl}
        watch={watch}
        setValue={setValue}
        formMode={formMode}
      />
    </>
  );
};

export default LandAppraisalFields