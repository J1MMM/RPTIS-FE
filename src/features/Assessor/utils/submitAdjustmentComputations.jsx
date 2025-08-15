import { v4 } from "uuid";
import { FIELDS } from "../constants/fieldNames";
import { sumByField } from "../../../utils/math";

export const processStrippingAdjustment = (selectedRow, strippingFields) => {
  const updatedMarketAdjustment = strippingFields.map((row) => ({
    id: v4(),
    appraisalID: selectedRow.id,
    [FIELDS.LAND_BASE_MARKET_VALUE]: selectedRow[FIELDS.LAND_BASE_MARKET_VALUE],
    [FIELDS.MARKET_ADJUSTMENT_FACTORS]: row.name,
    [FIELDS.MARKET_ADJUSTMENT_PERCENT]: row.percentOfAdj,
    [FIELDS.ADJUSTED_MARKETVALUE]: row.valueAdjustment,
  }));

  const totalMarketVal = sumByField(updatedMarketAdjustment, [
    FIELDS.ADJUSTED_MARKETVALUE,
  ]);

  return { updatedMarketAdjustment, totalMarketVal };
};

export const processNonStrippingAdjustment = (selectedRow) => ({
  id: v4(),
  appraisalID: selectedRow?.id,
  [FIELDS.LAND_BASE_MARKET_VALUE]: selectedRow[FIELDS.LAND_BASE_MARKET_VALUE],
  [FIELDS.MARKET_ADJUSTMENT_FACTORS]:
    selectedRow[FIELDS.MARKET_ADJUSTMENT_FACTORS],
  [FIELDS.MARKET_ADJUSTMENT_PERCENT]: selectedRow?.percent,
  [FIELDS.ADJUSTED_MARKETVALUE]: selectedRow?.totalValueAdjustment,
});

export const updateLandAppraisal = (prev, updatedValue, selectedRow) => {
  const updatedLandAppraisal = prev[FIELDS.LAND_APPRAISAL]?.map((row) =>
    row.id === selectedRow.id
      ? {
          ...row,
          [FIELDS.LAND_MARKET_VALUE]: updatedValue,
          [FIELDS.LAND_ACTUAL_USE]: "",
          [FIELDS.LAND_ASSESSMENT_LEVEL]: 0,
          [FIELDS.LAND_ASSESSED_VALUE]: 0,
          adjusted: true,
        }
      : row
  );

  return {
    updatedLandAppraisal,
    totalAssessedValue: sumByField(
      updatedLandAppraisal,
      FIELDS.LAND_ASSESSED_VALUE
    ),
  };
};
