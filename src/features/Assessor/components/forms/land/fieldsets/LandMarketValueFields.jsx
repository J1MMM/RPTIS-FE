import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { LandMarketValueTable } from "../../../tables/market-value-adjustment/LandMarketValueTable";
import { useState } from "react";
import { FIELDS } from "../../../../constants/fieldNames";
import { APPRAISAL_FORM_DEFAULT, FACTOR_TYPES, STRIPPING_FIELDS_DEFAULT } from "../../../../constants/defaultValues";
import { sumByField } from "../../../../../../utils/math";
import { processNonStrippingAdjustment, processStrippingAdjustment, updateLandAppraisal } from "../../../../utils/submitAdjustmentComputations";
import AddLandMarketValModal from "../modals/AddLandMarketValModal";
import { useForm, useWatch } from "react-hook-form";
import useAssessorForm from "../../../../hooks/useFormContext";

function LandMarketValueFields() {
  const [modalActive, setModalActive] = useState(false);
  const [strippingFields, setStrippingFields] = useState(STRIPPING_FIELDS_DEFAULT);
  const [selectedFactor, setSelectedFactor] = useState("");

  const { control: landFaasFormControl, setValue: setLandFaasFormVal, getValues: getLandFaasFormVal } = useAssessorForm();
  const { control: selControl, getValues: getSelValues, setValue: setSelValue, reset: resetSelForm } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT })
  const faasFormData = useWatch({ control: landFaasFormControl })
  const landAppraisals = useWatch({ control: landFaasFormControl, name: FIELDS.LAND_APPRAISAL }) || []
  const marketAdjustment = useWatch({ control: landFaasFormControl, name: FIELDS.MARKET_ADJUSTMENT }) || []
  const selectedRowData = useWatch({ control: selControl })
  const appraisalEmpty = landAppraisals?.length === 0;
  console.log("==SELECTED ROW==");
  console.log(getSelValues());
  console.log("==FAAS FORM==");
  console.log(faasFormData);

  const handleAdjustmentSubmit = () => {
    const adjustmentFactor = selectedRowData[FIELDS.MARKET_ADJUSTMENT_FACTORS];
    const prevMartketAdj = faasFormData[FIELDS.MARKET_ADJUSTMENT]

    try {
      if (adjustmentFactor === FACTOR_TYPES.STRIPPING) {
        const { updatedMarketAdj, totalMarketVal } = processStrippingAdjustment(selectedRowData, strippingFields);
        const { updatedAppraisal, totalAssessedValue } = updateLandAppraisal(faasFormData, totalMarketVal, selectedRowData);

        setLandFaasFormVal(FIELDS.MARKET_ADJUSTMENT, [...prevMartketAdj, ...updatedMarketAdj])
        setLandFaasFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisal)
        setLandFaasFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)

      } else {
        const updatedMarketAdj = processNonStrippingAdjustment(selectedRowData);
        const { updatedAppraisal, totalAssessedValue } = updateLandAppraisal(faasFormData, selectedRowData?.totalValueAdjustment, selectedRowData);

        setLandFaasFormVal(FIELDS.MARKET_ADJUSTMENT, [...prevMartketAdj, updatedMarketAdj])
        setLandFaasFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisal)
        setLandFaasFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)
      }

      // Reset state
      setStrippingFields(STRIPPING_FIELDS_DEFAULT);
      setSelectedFactor("");
      resetSelForm(APPRAISAL_FORM_DEFAULT)
      setModalActive(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    const updatedAppraisal = landAppraisals.map((item) => {
      const initialMarketVal = item[FIELDS.LAND_BASE_MARKET_VALUE];
      if (item?.id == id) {
        return {
          ...item,
          [FIELDS.LAND_MARKET_VALUE]: initialMarketVal,
          [FIELDS.LAND_ACTUAL_USE]: "",
          [FIELDS.LAND_ASSESSMENT_LEVEL]: 0,
          [FIELDS.LAND_ASSESSED_VALUE]: 0,
          adjusted: false,
        };
      }
      return item;
    });

    const updatedMarketAjustments = marketAdjustment.filter((item) => item?.appraisalID !== id);
    const totalAssessedValue = sumByField(updatedAppraisal, FIELDS.LAND_ASSESSED_VALUE);

    setLandFaasFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisal)
    setLandFaasFormVal(FIELDS.MARKET_ADJUSTMENT, updatedMarketAjustments)
    setLandFaasFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)
  };

  const onModalClose = () => {
    setSelectedFactor("");
    resetSelForm(APPRAISAL_FORM_DEFAULT)
    setModalActive(false);
  };

  return (
    <>
      <StyledFieldset title="Market Value Adjustment">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            onClick={() => setModalActive(true)}
            variant="contained"
            disabled={appraisalEmpty}
            startIcon={<Add />}
          >
            Adjustment
          </Button>
        </Stack>
        <LandMarketValueTable marketAdjustment={marketAdjustment} handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandMarketValModal
        open={modalActive}
        onClose={onModalClose}
        handleSubmit={handleAdjustmentSubmit}
        strippingFields={strippingFields}
        setStrippingFields={setStrippingFields}
        selectedFactor={selectedFactor}
        setSelectedFactor={setSelectedFactor}
        landAppraisal={landAppraisals}
        selControl={selControl}
        getSelValues={getSelValues}
        setSelValue={setSelValue}
        resetSelForm={resetSelForm}
        seletedRowData={selectedRowData}
      />
    </>
  );
};

export default LandMarketValueFields