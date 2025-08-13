import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { AddLandMarketValModal } from "../modals/AddLandMarketValModal";
import { useState } from "react";
import { FIELD_NAMES } from "../../constants/fieldNames";
import { STRIPPING_FIELDS_DEFAULT } from "../../constants/defaultValues";
import { v4 } from "uuid";
import { sumByField } from "../../../../utils/math";

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

  const handleAdjustmentSubmit = () => {
    const adjustmentFactorRaw = [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS];
    const adjustmentFactor = (adjustmentFactorRaw || "").toLowerCase();
    const landBaseMarketVal = selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE];

    try {
      if (adjustmentFactor === "stripping") {
        // new market value adjustment obj
        const updatedMarketAdjustment = strippingFields.map((row) => ({
          id: v4(),
          appraisalID: selectedRow.id,
          [FIELD_NAMES.LAND_BASE_MARKET_VALUE]: landBaseMarketVal,
          [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]: row.name,
          [FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
          [FIELD_NAMES.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
        }));

        const totalMarketVal = sumByField(updatedMarketAdjustment, [
          FIELD_NAMES.ADJUSTED_MARKETVALUE,
        ]);

        setFormData((prev) => {
          // updated the udjusted value of appraisal
          const updatedLandAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL]?.map(
            (row) => {
              if (row.id == selectedRow.id) {
                return {
                  ...row,
                  [FIELD_NAMES.LAND_MARKET_VALUE]: totalMarketVal,
                  [FIELD_NAMES.LAND_ACTUAL_USE]: "",
                  [FIELD_NAMES.LAND_ASSESSMENT_LEVEL]: 0,
                  [FIELD_NAMES.LAND_ASSESSED_VALUE]: 0,
                  adjusted: true,
                };
              }
              return row;
            }
          );

          const totalAssessedValue = sumByField(
            updatedLandAppraisal,
            FIELD_NAMES.LAND_ASSESSED_VALUE
          );

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
        setStrippingFields(STRIPPING_FIELDS_DEFAULT);
        setSelectedFactor("");
        setSelectedRow({});
        setModalActive(false);
      }
    } catch (error) {
      console.log(error);
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
