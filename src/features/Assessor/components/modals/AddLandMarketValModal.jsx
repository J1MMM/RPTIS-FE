// External
import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
// Shared components & utils
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { toFixedTwo } from "@utils/formatters";
// Feature-specific constants & utils
import { FIELD_NAMES } from "../../constants/fieldNames";
import { STRIPPING_FIELDS_DEFAULT } from "../../constants/defaultValues";
import { computeStrippingFields } from "../../utils/computeStrippingFields";
// Feature-specific constants & utils
import SelectAppraisalTable from "../tables/SelectAppraisalTable";
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
  const landAppraisal = formData[FIELD_NAMES.LAND_APPRAISAL];
  const FILTERED_LAND_APPRAISAL = landAppraisal?.filter(
    (row) => row?.adjusted == false
  );
  const INPUT_AREA =
    selectedRow?.[FIELD_NAMES.MARKET_VALUE_ADJUSTMENT_INPUT_AREA];
  const BASE_UNIT_VAL = Number(selectedRow?.[FIELD_NAMES.LAND_UNIT_VALUE] ?? 0);

  const handleFieldsChange = (e) => {
    const { name, value } = e.target;
    setSelectedRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdjustmentFactorChange = (row, value) => {
    setSelectedFactor(value);
    setSelectedRow({ ...row, [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]: value });
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
  };

  const handleClearAdjustmentFactor = () => {
    setSelectedRow({});
    setSelectedFactor("");
    setStrippingFields(STRIPPING_FIELDS_DEFAULT);
    setVisibleStripping(1);
  };

  useEffect(() => {
    if (!INPUT_AREA) return;

    const { totalValAdj, updatedFields, visibleCount } = computeStrippingFields(
      INPUT_AREA,
      BASE_UNIT_VAL
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
      return { ...prev, totalValueAdjustment: toFixedTwo(totalValAdj) };
    });
  }, [INPUT_AREA]);

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
          handleFieldsChange={handleFieldsChange}
          open={!selectedRowEmpty && selectedFactor === "Corner Influence"}
          selectedRow={selectedRow}
          selectedRowEmpty={selectedRowEmpty}
        />
      </Stack>
    </ContainerModal>
  );
};
