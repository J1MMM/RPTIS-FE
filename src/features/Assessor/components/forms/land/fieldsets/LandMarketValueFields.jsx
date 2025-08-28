import { v4 } from "uuid";
import { Button, Stack } from "@mui/material";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { ArrowUpDown } from "lucide-react";
import { LandMarketValueTable } from "../../../tables/land/market-value-adjustment/LandMarketValueTable";
import { useEffect, useState } from "react";
import { FIELDS } from "../../../../constants/fieldNames";
import { APPRAISAL_FORM_DEFAULT, FACTOR_TYPES, STRIPPING_FIELDS_DEFAULT } from "../../../../constants/defaultValues";
import { sumByField } from "../../../../../../utils/math";
import { normalizeNonStripping, normalizeStripping, updateAppraisals } from "../../../../utils/submitAdjustmentComputations";
import StyledFieldset from "@components/ui/StyledFieldset";
import AddLandMarketValModal from "../modals/AddLandMarketValModal";

function LandMarketValueFields({ readOnly }) {
  const [adjustmentRows, setAdjustmentRows] = useState([])
  const [modalActive, setModalActive] = useState(false);
  const [strippingFields, setStrippingFields] = useState(STRIPPING_FIELDS_DEFAULT);
  const [selectedFactor, setSelectedFactor] = useState("");

  const { control: landFormControl, setValue: setLandFormVal } = useFormContext();
  const { control: selControl, getValues: getSelValues, setValue: setSelValue, reset: resetSelForm } = useForm({ defaultValues: APPRAISAL_FORM_DEFAULT })
  const landAppraisals = useWatch({ control: landFormControl, name: FIELDS.LAND_APPRAISAL }) || []
  const selectedRowData = useWatch({ control: selControl })
  const appraisalEmpty = landAppraisals?.length === 0;

  useEffect(() => {
    setAdjustmentRows(() => {
      return landAppraisals?.flatMap(row =>
        row?.adjustments?.map(v => (
          {
            ...v,
            id: v4(),
            appraisalID: row.id,
            baseMarketValue: row[FIELDS.LAND_BASE_MARKET_VALUE],
          }
        )) || []
      );
    });
  }, [landAppraisals]);

  const handleAdjustmentSubmit = () => {
    const adjustmentFactor = selectedRowData[FIELDS.MARKET_ADJUSTMENT_FACTORS];

    try {
      if (adjustmentFactor === FACTOR_TYPES.STRIPPING) {
        const { adjustments, adjustedMarketVal } = normalizeStripping(strippingFields);
        const { updatedAppraisals, assessedValue } = updateAppraisals(landAppraisals, adjustedMarketVal, selectedRowData?.id, adjustments);

        setLandFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisals)
        setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, assessedValue)
      } else {
        const adjustments = normalizeNonStripping(selectedRowData, selectedRowData?.area);
        const { updatedAppraisals, assessedValue } = updateAppraisals(landAppraisals, selectedRowData?.totalValueAdjustment, selectedRowData?.id, adjustments);

        setLandFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisals)
        setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, assessedValue)
      }
      // Reset state
      setStrippingFields(STRIPPING_FIELDS_DEFAULT);
      setSelectedFactor("");
      resetSelForm(APPRAISAL_FORM_DEFAULT)
      setModalActive(false);
      toast.success("Adjustment added successfully!");

    } catch (error) {
      toast.error("Failed to Add Adjustment. Please try again.");
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    try {
      const updatedAppraisal = landAppraisals.map((item) => {
        if (item?.id == id) {
          const initialMarketVal = item[FIELDS.LAND_BASE_MARKET_VALUE];
          const { adjustments, ...rest } = item; // remove adjustments
          return {
            ...rest,
            [FIELDS.LAND_MARKET_VALUE]: initialMarketVal,
            [FIELDS.LAND_ACTUAL_USE]: "",
            [FIELDS.LAND_ASSESSMENT_LEVEL]: 0,
            [FIELDS.LAND_ASSESSED_VALUE]: 0,
            adjusted: false,
          };
        }
        return item;
      });
      const totalAssessedValue = sumByField(updatedAppraisal, FIELDS.LAND_ASSESSED_VALUE);

      setLandFormVal(FIELDS.LAND_APPRAISAL, updatedAppraisal)
      setLandFormVal(FIELDS.TOTAL_ASSESSED_VALUE, totalAssessedValue)
      toast.success("Adjustment deleted successfully!");
    } catch (error) {
      toast.error("Failed to Delete Adjustment. Please try again.");
      console.error(error);
    }
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
            disabled={readOnly || appraisalEmpty}
            disableFocusRipple
            sx={{ alignSelf: "flex-start" }}
            onClick={() => setModalActive(true)}
            variant="contained"
            startIcon={<ArrowUpDown size={18} />}
          >
            Adjustment
          </Button>
        </Stack>
        <LandMarketValueTable readOnly={readOnly} rows={adjustmentRows} handleDelete={handleDelete} />
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