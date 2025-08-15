import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import StyledFieldset from "@components/ui/StyledFieldset";
import { LandMarketValueTable } from "../../../tables/market-value-adjustment/LandMarketValueTable";
import { AddLandMarketValModal } from "../../../modals/AddLandMarketValModal";
import { useState } from "react";
import { FIELDS } from "../../../../constants/fieldNames";
import {
  FACTOR_TYPES,
  STRIPPING_FIELDS_DEFAULT,
} from "../../../../constants/defaultValues";
import { v4 } from "uuid";
import { sumByField } from "../../../../../../utils/math";
import {
  processNonStrippingAdjustment,
  processStrippingAdjustment,
  updateLandAppraisal,
} from "../../../../utils/submitAdjustmentComputations";

export const LandMarketValueFields = (props) => {
  const { formData, setFormData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [strippingFields, setStrippingFields] = useState(
    STRIPPING_FIELDS_DEFAULT
  );
  const [selectedFactor, setSelectedFactor] = useState("");

  const appraisalEmpty = formData[FIELDS.LAND_APPRAISAL]?.length === 0;
  console.log("formData");
  console.log(formData);
  console.log("selectedRow");
  console.log(selectedRow);

  const handleAdjustmentSubmit = () => {
    try {
      const adjustmentFactor = selectedRow[FIELDS.MARKET_ADJUSTMENT_FACTORS];

      if (adjustmentFactor === FACTOR_TYPES.STRIPPING) {
        const { updatedMarketAdjustment, totalMarketVal } =
          processStrippingAdjustment(selectedRow, strippingFields);
        setFormData((prev) => {
          const { updatedLandAppraisal, totalAssessedValue } =
            updateLandAppraisal(prev, totalMarketVal, selectedRow);

          return {
            ...prev,
            [FIELDS.MARKET_ADJUSTMENT]: [
              ...(prev[FIELDS.MARKET_ADJUSTMENT] || []),
              ...updatedMarketAdjustment,
            ],
            [FIELDS.LAND_APPRAISAL]: updatedLandAppraisal,
            [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
          };
        });
      } else {
        const updatedMarketAdjustment =
          processNonStrippingAdjustment(selectedRow);
        setFormData((prev) => {
          const { updatedLandAppraisal, totalAssessedValue } =
            updateLandAppraisal(
              prev,
              selectedRow?.totalValueAdjustment,
              selectedRow
            );
          return {
            ...prev,
            [FIELDS.MARKET_ADJUSTMENT]: [
              ...(prev[FIELDS.MARKET_ADJUSTMENT] || []),
              updatedMarketAdjustment,
            ],
            [FIELDS.LAND_APPRAISAL]: updatedLandAppraisal,
            [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
          };
        });
      }

      // Reset state
      setStrippingFields(STRIPPING_FIELDS_DEFAULT);
      setSelectedFactor("");
      setSelectedRow({});
      setModalActive(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    setFormData((prev) => {
      const updatedLandAppraisal = prev[FIELDS.LAND_APPRAISAL].map((item) => {
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

      const totalAssessedValue = sumByField(
        updatedLandAppraisal,
        FIELDS.LAND_ASSESSED_VALUE
      );

      const updatedMarketAjustments = prev[FIELDS.MARKET_ADJUSTMENT].filter(
        (item) => item?.appraisalID !== id
      );

      return {
        ...prev,
        landAppraisal: updatedLandAppraisal,
        [FIELDS.MARKET_ADJUSTMENT]: updatedMarketAjustments,
        [FIELDS.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
      };
    });
  };

  const onModalClose = () => {
    setSelectedFactor("");
    setSelectedRow({});
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
        <LandMarketValueTable formData={formData} handleDelete={handleDelete} />
      </StyledFieldset>

      <AddLandMarketValModal
        open={modalActive}
        onClose={onModalClose}
        handleSubmit={handleAdjustmentSubmit}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        strippingFields={strippingFields}
        setStrippingFields={setStrippingFields}
        formData={formData}
        selectedFactor={selectedFactor}
        setSelectedFactor={setSelectedFactor}
      />
    </>
  );
};
