import { v4 } from "uuid";
import { FIELD_NAMES } from "../constants/fieldNames";
import { sumByField } from "../../../utils/math";

export const processStrippingAdjustment = (selectedRow, strippingFields) => {
  const updatedMarketAdjustment = strippingFields.map((row) => ({
    id: v4(),
    appraisalID: selectedRow.id,
    [FIELD_NAMES.LAND_BASE_MARKET_VALUE]:
      selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE],
    [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]: row.name,
    [FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
    [FIELD_NAMES.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
  }));

  const totalMarketVal = sumByField(updatedMarketAdjustment, [
    FIELD_NAMES.ADJUSTED_MARKETVALUE,
  ]);

  return { updatedMarketAdjustment, totalMarketVal };
};

export const processNonStrippingAdjustment = (selectedRow) => ({
  id: v4(),
  appraisalID: selectedRow?.id,
  [FIELD_NAMES.LAND_BASE_MARKET_VALUE]:
    selectedRow[FIELD_NAMES.LAND_BASE_MARKET_VALUE],
  [FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS]:
    selectedRow[FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS],
  [FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT]: selectedRow?.percent,
  [FIELD_NAMES.ADJUSTED_MARKETVALUE]: selectedRow?.totalValueAdjustment,
});

export const updateLandAppraisal = (prev, updatedValue, selectedRow) => {
  const updatedLandAppraisal = prev[FIELD_NAMES.LAND_APPRAISAL]?.map((row) =>
    row.id === selectedRow.id
      ? {
          ...row,
          [FIELD_NAMES.LAND_MARKET_VALUE]: updatedValue,
          [FIELD_NAMES.LAND_ACTUAL_USE]: "",
          [FIELD_NAMES.LAND_ASSESSMENT_LEVEL]: 0,
          [FIELD_NAMES.LAND_ASSESSED_VALUE]: 0,
          adjusted: true,
        }
      : row
  );

  return {
    updatedLandAppraisal,
    totalAssessedValue: sumByField(
      updatedLandAppraisal,
      FIELD_NAMES.LAND_ASSESSED_VALUE
    ),
  };
};
