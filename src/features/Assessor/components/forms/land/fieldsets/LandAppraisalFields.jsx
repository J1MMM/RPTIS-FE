import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { useEffect, useState } from "react";
import { AddLandAppraisalModal } from "../../../modals/AddLandAppraisalModal";
import { LandAppraisalTable } from "../../../tables/land-appraisal/LandAppraisalTable";
import { APPRAISAL_FORM_DEFAULT } from "../../../../constants/defaultValues";
import { FIELDS } from "../../../../constants/fieldNames";
import { GET_UNITVAL } from "../../../../constants/unitValues";
import { sumByField } from "../../../../../../utils/math";
import { useForm, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";

export const LandAppraisalFields = (props) => {
  const { setFormData, formData } = props;
  const { setValue: setFormValue } = useAssessorForm();
  const [modalActive, setModalActive] = useState(false);
  const [landAppraisalForm, setLandAppraisalForm] = useState(
    APPRAISAL_FORM_DEFAULT
  );
  const { control, watch, setValue, getValues, handleSubmit, reset } = useForm({
    defaultValues: APPRAISAL_FORM_DEFAULT,
  });

  const [classification, subClass, landArea] = useWatch({
    control,
    name: [FIELDS.LAND_CLASSIFICATION, FIELDS.SUBCLASS, FIELDS.LAND_AREA],
  });
  console.log(watch());

  useEffect(() => {
    const unitValue =
      GET_UNITVAL[classification?.toLowerCase()]?.[subClass?.toLowerCase()] ||
      0;

    const baseMarketValue = unitValue * (parseFloat(landArea) || 0);
    setValue(FIELDS.LAND_UNIT_VALUE, unitValue, {});
    setValue(FIELDS.LAND_MARKET_VALUE, baseMarketValue, {});
    setValue(FIELDS.LAND_BASE_MARKET_VALUE, baseMarketValue, {});
  }, [subClass, landArea]);

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;

    setLandAppraisalForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === FIELDS.LAND_CLASSIFICATION) {
        updated[FIELDS.SUBCLASS] = "";
      }

      return updated;
    });
  };

  const onAppraisalSubmit = (data) => {
    try {
      const id = v4();
      const newAppraisal = { ...data, id }; //object
      const currentAppraisals = getValues(FIELDS.LAND_APPRAISAL) || []; //array
      const updatedAppraisals = [...currentAppraisals, newAppraisal]; //array

      const totalMarketValue = sumByField(updatedAppraisals, [
        FIELDS.LAND_MARKET_VALUE,
      ]);
      setFormValue(FIELDS.LAND_APPRAISAL, updatedAppraisals);
      // Update RHF state
      setValue(FIELDS.LAND_APPRAISAL, updatedAppraisals);
      setValue(FIELDS.TOTAL_MARKET_VALUE, totalMarketValue);
      setValue(FIELDS.PROPERTY_ASSESSMENT, []);
      setValue(FIELDS.TOTAL_ASSESSED_VALUE, 0);

      reset(APPRAISAL_FORM_DEFAULT); // clear form
    } catch (error) {
      console.error("Error in onAppraisalSubmit:", error);
    } finally {
      setModalActive(false);
    }
  };

  const handleDelete = (id) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[FIELDS.LAND_APPRAISAL].filter(
        (item) => item.id !== id
      );
      const updatedMarketAjustments = prev[FIELDS.MARKET_ADJUSTMENT].filter(
        (item) => item?.appraisalID !== id
      );

      const totalMarketValue = sumByField(updatedLandAppraisal, [
        FIELDS.LAND_MARKET_VALUE,
      ]);

      const totalAssessedValue = sumByField(updatedLandAppraisal, [
        FIELDS.LAND_ASSESSED_VALUE,
      ]);

      return {
        ...prev,
        totalMarketValue,
        landAppraisal: updatedLandAppraisal,
        [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
        [FIELDS.MARKET_ADJUSTMENT]: updatedMarketAjustments,
        [FIELDS.PROPERTY_ASSESSMENT]: [],
      };
    });
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            variant="contained"
            disabled={props?.readOnly}
            startIcon={<Add />}
            onClick={() => setModalActive(true)}
          >
            Appraisal
          </Button>
        </Stack>

        <LandAppraisalTable formData={formData} handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandAppraisalModal
        watch={watch}
        setValue={setValue}
        control={control}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(onAppraisalSubmit)}
        landAppraisal={landAppraisalForm}
      />
    </>
  );
};
