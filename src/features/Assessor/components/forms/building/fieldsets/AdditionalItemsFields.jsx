import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { toastConfig } from "@constants/toastConfig";
import { APPRAISAL_FORM_DEFAULT } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { UNITVAL_TABLE } from "../../../../constants/unitValues";
import { sumByField } from "../../../../../../utils/math";
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { AdditionalItemsTable } from "../../../tables/building/AdditionalItemsTable";
import { PlusCircle } from "lucide-react";
import { AdditionalItemModal } from "../modal/AdditionalItemModal";

function AdditionalItemsFields({ readOnly }) {
  const { control: landFormControl, setValue: setLandFormVal, reset, resetField: resetFaasFormField, getValues } = useFormContext();
  const { control: addAppraisalControl, watch, setValue, handleSubmit, reset: resetAddAppraisalForm, formState: { isSubmitting } } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const { fields, append, remove } = useFieldArray({ control: landFormControl, name: FIELDS.LAND_APPRAISAL });
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

  const onSubmit = (data) => {
    try {
      const updatedAppraisals = [...landappraisals, { ...data, id: v4() }];
      const totalMarketValue = sumByField(updatedAppraisals, FIELDS.LAND_MARKET_VALUE);
      const newAppraisal = { ...data, id: v4() }
      append(newAppraisal)
      appendAssessment(newAppraisal)
      // setLandFormVal("propertyAssessments", newAppraisal);
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
      removeAssessment(id)
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
      <StyledFieldset title="Cost of Additional Items">
        <Stack mb={2}>
          <Button
            disabled={readOnly}
            disableFocusRipple
            variant="contained"
            startIcon={<PlusCircle size="18" />}
            onClick={() => setModalActive(true)}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Add Items
          </Button>
        </Stack>
        <AdditionalItemsTable
          readOnly={readOnly}
          currentAppraisals={fields}
          handleDelete={handleDelete} />
      </StyledFieldset>

      <AdditionalItemModal
        disabled={isSubmitting}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(AdditionalItemsFields)}
        control={addAppraisalControl}
        watch={watch}
        setValue={setValue}
      />
    </>
  );
};

export default AdditionalItemsFields