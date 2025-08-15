// External
import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
// Shared components & utils
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { toFixedTwo } from "@utils/formatters";
// Feature-specific constants & utils
import { FIELDS } from "../../constants/fieldNames";
import {
  FACTOR_TYPES,
  STRIPPING_FIELDS_DEFAULT,
} from "../../constants/defaultValues";
import { computeStrippingFields } from "../../utils/computeStrippingFields";
// Feature-specific constants & utils
import SelectAppraisalTable from "../tables/select-appraisal/SelectAppraisalTable";
import StrippingComputationPanel from "../forms/land/panels/StrippingComputationPanel";
import CornerInfluencePanel from "../forms/land/panels/CornerInfluencePanel";

export const AddLandMarketValModal = ({
  open,
  onClose,
  formData,
  handleSubmit,
  selectedRow,
  setSelectedRow,
  strippingFields,
  setStrippingFields,
  selectedFactor,
  setSelectedFactor,
}) => {
  const [visibleStripping, setVisibleStripping] = useState(1);
  const selectedRowEmpty = Object.keys(selectedRow).length === 0;
  const landAppraisal = formData[FIELDS.LAND_APPRAISAL];
  const FILTERED_LAND_APPRAISAL = landAppraisal?.filter(
    (row) => row?.adjusted == false
  );
  const inputArea = selectedRow?.[FIELDS.MARKET_VALUE_ADJUSTMENT_INPUT_AREA];
  const unitValue = Number(selectedRow?.[FIELDS.LAND_UNIT_VALUE] ?? 0);

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;
    setSelectedRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdjustmentFactorChange = (row, value) => {
    setSelectedFactor(value);
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
    setSelectedRow({
      ...row,
      [FIELDS.TOTAL_MARKET_VALUE_ADJUSTMENT]: 0,
      [FIELDS.MARKET_ADJUSTMENT_FACTORS]: value,
    });
  };

  const handleClearAdjustmentFactor = () => {
    setSelectedRow({});
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
    setSelectedFactor("");
  };
  /* ==================================STRIPPING COMPUTATION==================================*/
  useEffect(() => {
    if (!inputArea || selectedFactor !== "Stripping") return;

    const { totalValAdj, updatedFields, visibleCount } = computeStrippingFields(
      inputArea,
      unitValue
    );

    // Avoid unnecessary update
    setStrippingFields((prev) =>
      JSON.stringify(prev) === JSON.stringify(updatedFields)
        ? prev
        : updatedFields
    );

    setVisibleStripping((prev) =>
      prev === visibleCount ? prev : visibleCount
    );

    setSelectedRow((prev) => {
      if (!prev) return prev;
      const prevTotal = Number(prev.totalValueAdjustment) || 0;
      if (toFixedTwo(prevTotal) === toFixedTwo(totalValAdj)) {
        return prev;
      }
      return { ...prev, totalValueAdjustment: totalValAdj };
    });
  }, [inputArea]);
  /* ==================================OTHER ADJUSTMENT FACTOR COMPUTATION==================================*/
  useEffect(() => {
    if (selectedRowEmpty || selectedFactor == "Stripping") return;
    const baseMarketVal = selectedRow[FIELDS.LAND_BASE_MARKET_VALUE] || 0;
    const area = selectedRow[FIELDS.LAND_AREA] || 0;
    let unitValue = selectedRow[FIELDS.LAND_UNIT_VALUE] || 0;
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

    setSelectedRow((prev) => ({
      ...prev,
      totalValueAdjustment,
      percent,
      unitValue,
    }));
  }, [selectedFactor]);

  return (
    <ContainerModal
      title="Market Value Adjustment"
      maxWidth="md"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            type="submit"
            disabled={selectedFactor == ""}
          >
            Submit
          </Button>
        </>
      }
    >
      <Stack>
        <SelectAppraisalTable
          rows={FILTERED_LAND_APPRAISAL}
          selectedRow={selectedRow}
          selectedRowEmpty={selectedRowEmpty}
          selectedFactor={selectedFactor}
          handleAdjustmentFactorChange={handleAdjustmentFactorChange}
          onClear={handleClearAdjustmentFactor}
        />

        <StrippingComputationPanel
          open={!selectedRowEmpty && selectedFactor == "Stripping"}
          selectedRow={selectedRow}
          selectedRowEmpty={selectedRowEmpty}
          strippingFields={strippingFields}
          visibleStripping={visibleStripping}
          handleFieldsChange={handleFieldsChange}
        />

        <CornerInfluencePanel
          open={!selectedRowEmpty && selectedFactor !== "Stripping"}
          handleFieldsChange={handleFieldsChange}
          selectedRow={selectedRow}
          selectedRowEmpty={selectedRowEmpty}
          selectedFactor={selectedFactor}
        />
      </Stack>
    </ContainerModal>
  );
};
