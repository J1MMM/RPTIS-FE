// External
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { useWatch } from "react-hook-form";
// Shared components & utils
import ContainerModal from "@components/shared/ContainerModal";
import CancelButton from "@components/ui/CancelButton";
import SubmitButton from "@components/ui/SubmitButton";
// Feature-specific constants & utils
import { FIELDS } from "../../../../constants/fieldNames";
import { APPRAISAL_FORM_DEFAULT, FACTOR_TYPES, STRIPPING_FIELDS_DEFAULT } from "../../../../constants/defaultValues";
import { computeStrippingFields } from "../../../../utils/computeStrippingFields";
import SelectAppraisalTable from "../../../tables/select-appraisal/SelectAppraisalTable";
import StrippingComputationPanel from "../panels/StrippingComputationPanel";
import CornerInfluencePanel from "../panels/CornerInfluencePanel";

function AddLandMarketValModal({
  open,
  onClose,
  handleSubmit,
  strippingFields,
  setStrippingFields,
  selectedFactor,
  setSelectedFactor,
  landAppraisal,
  selControl,
  getSelValues,
  setSelValue,
  resetSelForm,
  seletedRowData
}) {

  const FILTERED_LAND_APPRAISAL = landAppraisal?.filter((row) => row?.adjusted == false);
  const selectedRowEmpty = JSON.stringify(seletedRowData) === JSON.stringify(APPRAISAL_FORM_DEFAULT);
  const [inputArea, unitValue] = useWatch({ control: selControl, name: [FIELDS.INPUT_AREA, FIELDS.LAND_UNIT_VALUE] });

  const handleSelectRow = (row, value) => {
    setSelectedFactor(value);
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    resetSelForm({ ...row, [FIELDS.INPUT_AREA]: "", [FIELDS.MARKET_ADJUSTMENT_FACTORS]: value })
  };

  const clearSelectedRow = () => {
    setSelectedFactor("");
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    resetSelForm(APPRAISAL_FORM_DEFAULT)
  };

  /* ==================================STRIPPING COMPUTATION==================================*/
  useEffect(() => {
    if (!inputArea || selectedFactor !== "Stripping") return;

    const { totalValAdj, updatedFields } = computeStrippingFields(inputArea, unitValue);
    setStrippingFields((prev) => JSON.stringify(prev) === JSON.stringify(updatedFields) ? prev : updatedFields);
    setSelValue(FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT, totalValAdj)
  }, [inputArea]);

  /* ============================OTHER ADJUSTMENT FACTOR COMPUTATION===========================*/
  useEffect(() => {
    if (selectedRowEmpty || selectedFactor == "Stripping") return;

    const baseMarketVal = getSelValues(FIELDS.LAND_BASE_MARKET_VALUE) || 0;
    const area = getSelValues(FIELDS.LAND_AREA) || 0;
    let unitValue = getSelValues(FIELDS.LAND_UNIT_VALUE) || 0;
    let percent = 0;
    let totalValueAdjustment = 0;

    switch (selectedFactor) {
      case FACTOR_TYPES.CORNER_INFLUENCE:
        percent = 0.3;
        unitValue *= percent;
        totalValueAdjustment = unitValue * area + baseMarketVal;
        break;
      case FACTOR_TYPES.RIGHT_OF_WAY:
        percent = 0.1;
        unitValue *= percent;
        totalValueAdjustment = unitValue * area;
        break;
      case FACTOR_TYPES.OPEN_SPACES:
        percent = 0.3;
        unitValue *= percent;
        totalValueAdjustment = unitValue * area;
        break;
    }

    setSelValue(FIELDS.MARKET_ADJUSTMENT_PERCENT, percent)
    setSelValue(FIELDS.LAND_UNIT_VALUE, unitValue)
    setSelValue(FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT, totalValueAdjustment)
  }, [selectedFactor]);

  return (
    <ContainerModal

      title="Market Value Adjustment"
      maxWidth="md"
      open={open}
      onClose={onClose}
      actionButton={
        <>
          <CancelButton onClick={onClose} />
          <SubmitButton onClick={handleSubmit} disabled={selectedFactor == "" || inputArea == "" && selectedFactor == "Stripping"} />
        </>
      }
    >
      <Stack>
        <SelectAppraisalTable
          rows={FILTERED_LAND_APPRAISAL}
          selectedRow={seletedRowData}
          selectedRowEmpty={selectedRowEmpty}
          selectedFactor={selectedFactor}
          handleSelectRow={handleSelectRow}
          onClear={clearSelectedRow}
        />

        <StrippingComputationPanel
          open={!selectedRowEmpty && selectedFactor == "Stripping"}
          selectedRowEmpty={selectedRowEmpty}
          strippingFields={strippingFields}
          selControl={selControl}
        />

        <CornerInfluencePanel
          open={!selectedRowEmpty && selectedFactor !== "Stripping"}
          selectedFactor={selectedFactor}
          selControl={selControl}
        />
      </Stack>
    </ContainerModal >
  );
};

export default AddLandMarketValModal