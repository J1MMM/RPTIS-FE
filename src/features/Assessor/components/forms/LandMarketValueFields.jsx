import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { AddLandMarketValModal } from "../modals/AddLandMarketValModal";
import { useState } from "react";
import { FIELD_NAMES } from "../../constants/fieldNames";
import {
  FACTOR_TYPES,
  STRIPPING_FIELDS_DEFAULT,
} from "../../constants/defaultValues";
import { v4 } from "uuid";
import { sumByField } from "../../../../utils/math";
import {
  processNonStrippingAdjustment,
  processStrippingAdjustment,
  updateLandAppraisal,
} from "../../utils/submitAdjustmentComputations";

export const LandMarketValueFields = (props) => {
  const { formData, setFormData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [strippingFields, setStrippingFields] = useState(
    STRIPPING_FIELDS_DEFAULT
  );
  const [selectedFactor, setSelectedFactor] = useState("");

  const appraisalEmpty = formData[FIELD_NAMES.LAND_APPRAISAL]?.length === 0;
  console.log("formData");
  console.log(formData);
  console.log("selectedRow");
  console.log(selectedRow);

  const handleAdjustmentSubmit = () => {
    try {
      const adjustmentFactor =
        selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS];

      if (adjustmentFactor === FACTOR_TYPES.STRIPPING) {
        const { updatedMarketAdjustment, totalMarketVal } =
          processStrippingAdjustment(selectedRow, strippingFields);
        setFormData((prev) => {
          const { updatedLandAppraisal, totalAssessedValue } =
            updateLandAppraisal(prev, totalMarketVal, selectedRow);

          return {
            ...prev,
            [FIELD_NAMES.MARKET_ADJUSTMENT]: [
              ...(prev[FIELD_NAMES.MARKET_ADJUSTMENT] || []),
              ...updatedMarketAdjustment,
            ],
            [FIELD_NAMES.LAND_APPRAISAL]: updatedLandAppraisal,
            [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
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
            [FIELD_NAMES.MARKET_ADJUSTMENT]: [
              ...(prev[FIELD_NAMES.MARKET_ADJUSTMENT] || []),
              updatedMarketAdjustment,
            ],
            [FIELD_NAMES.LAND_APPRAISAL]: updatedLandAppraisal,
            [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
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
      const updatedLandAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL].map(
        (item) => {
          const initialMarketVal = item[FIELD_NAMES.LAND_BASE_MARKET_VALUE];
          if (item?.id == id) {
            return {
              ...item,
              [FIELD_NAMES.LAND_MARKET_VALUE]: initialMarketVal,
              [FIELD_NAMES.LAND_ACTUAL_USE]: "",
              [FIELD_NAMES.LAND_ASSESSMENT_LEVEL]: 0,
              [FIELD_NAMES.LAND_ASSESSED_VALUE]: 0,
              adjusted: false,
            };
          }
          return item;
        }
      );

      const totalAssessedValue = sumByField(
        updatedLandAppraisal,
        FIELD_NAMES.LAND_ASSESSED_VALUE
      );

      const updatedMarketAjustments = prev[
        FIELD_NAMES.MARKET_ADJUSTMENT
      ].filter((item) => item?.appraisalID !== id);

      return {
        ...prev,
        landAppraisal: updatedLandAppraisal,
        [FIELD_NAMES.MARKET_ADJUSTMENT]: updatedMarketAjustments,
        [FIELD_NAMES.TOTAL_ASSESSED_VALUE]: totalAssessedValue,
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
